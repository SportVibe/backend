const { Op } = require("sequelize");
const { Product, Image, Comment } = require("../../db");

const getProduct = async (req, res) => {
  try {
    //paginado -----> habría que llevar la lógica del paginado a utilities
    const currentPage = req.query.page ? parseInt(req.query.page) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit) : 12;

    const baseUrl = "http://localhost:3005/Inventario";

    let previousPage = "";

    if (currentPage !== 1) {
      previousPage = `${baseUrl}?page=${Math.max(1, currentPage - 1)}&limit=${limit}`;
    } else {
      previousPage = null;
    }

    const nextPage = `${baseUrl}?page=${currentPage + 1}&limit=${limit}`; //-------> falta hacer la lógica para que cuando no haya next de como nulo

    // filtros
    const { subCategory, category, minPrice, maxPrice, size, search } = req.query;
    const filterCriteria = {};
    filterCriteria.subCategory = subCategory || { [Op.not]: null };
    filterCriteria.category = category || { [Op.not]: null };
    // filterCriteria.size = size || { [Op.not]: null };
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
      where: { ...filterCriteria, available: true },
    });

    //busca todos los productos de la db
    const products = await Product.findAll({
      where: { ...filterCriteria, available: true },
      include: { model: Image, attributes: ["url"], through: { attributes: [] } },
    });

    if (!products || products.length === 0) {
      return res.status(404).json({ mensaje: "No se encontraron productos." });
    }

    return res.status(200).json({
      count: countProducts,
      currentPage,
      limit,
      previousPage,
      nextPage,
      data: products,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensaje: "Hubo un error al recuperar los productos." });
  }
};

module.exports = {
  getProduct,
};
