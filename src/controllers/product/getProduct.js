const { Op } = require("sequelize");
const { Product, Image, Stock, Size, Comment } = require("../../db");

const getProduct = async (req, res) => {
  try {
    //paginado -----> habría que llevar la lógica del paginado a utilities
    const currentPage = req.query.page ? parseInt(req.query.page) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit) : 12;
    const offset = (currentPage - 1) * limit;

    const baseUrl = "http://localhost:3005/Inventario";

    let previousPage = "";

    if (currentPage !== 1) {
      previousPage = `${baseUrl}?page=${Math.max(1, currentPage - 1)}&limit=${limit}`;
    } else {
      previousPage = null;
    }

    const nextPage = `${baseUrl}?page=${currentPage + 1}&limit=${limit}`; //-------> falta hacer la lógica para que cuando no haya next de nulo

    // filtros
    const { subCategory, category, minPrice, maxPrice, Sizes, id, search } = req.query;
    const filterCriteria = {};
    filterCriteria.subCategory = subCategory || { [Op.not]: null };
    filterCriteria.category = category || { [Op.not]: null };
    filterCriteria.id = id || { [Op.not]: null };
    // filterCriteria.Sizes = Sizes || { [Op.not]: null };
    if (minPrice && maxPrice && !isNaN(minPrice) && !isNaN(maxPrice)) {
      filterCriteria.price = {
        [Op.between]: [parseFloat(minPrice), parseFloat(maxPrice)],
      };
    }

    //search
    if (search) {
      filterCriteria.title = {
        [Op.iLike]: `%${search}%`,
      };
    }

    //cantidad de productos en la db
    const countProducts = await Product.count({
      where: { available: true },
    });

    // cantidad de productos filtrados
    const countFilterCriteria = await Product.count({
      where: { ...filterCriteria, available: true },
    });

    //busca todos los productos de la db
    const products = await Product.findAll({
      where: { ...filterCriteria, available: true },
      limit,
      offset,
      include: [{ model: Stock }, { model: Image, attributes: ["url"], through: { attributes: [] } }],
    });

    if (!products || products.length === 0) {
      return res.status(404).json({ mensaje: "No se encontraron productos." });
    }

    const modifiedProducts = products.map((product) => {
      // Crear un nuevo objeto para cada producto
      const modifiedProduct = { ...product.toJSON() };

      // Modificar el array
      modifiedProduct.Images = modifiedProduct.Images.map((image) => image.url);
      // modifiedProduct.Sizes = modifiedProduct.Sizes.map((Size) => Size.name);

      return modifiedProduct;
    });

    return res.status(200).json({
      totalCount: countProducts,
      totalFilteredCount: countFilterCriteria,
      currentPage,
      limit,
      previousPage,
      nextPage,
      data: modifiedProducts,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensaje: "Hubo un error al recuperar los productos." });
  }
};

module.exports = {
  getProduct,
};
