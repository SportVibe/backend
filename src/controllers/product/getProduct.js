const { Op } = require("sequelize");
const { Product, Image, Stock, Size, Comment } = require("../../db");
const Paginado = require("../../utilities/Paginado");

const getProduct = async (req, res) => {
  try {
    const { page, limit, gender, subCategory, category, minPrice, maxPrice, Sizes, id, search } = req.query;


    //cantidad de productos en la db
    const countProducts = await Product.count({
      where: { available: true },
    });

    //se destructura limite de paginas, pagina actual,  siguiente y anterior pagina
    const { limitPage, currentPage, nextPage, previousPage, offset } = Paginado(page, limit, countProducts);

    // filtros

    const filterCriteria = {};
    filterCriteria.gender = gender || { [Op.not]: null };
    filterCriteria.subCategory = subCategory || { [Op.not]: null };
    filterCriteria.category = category || { [Op.not]: null };
    filterCriteria.id = id || { [Op.not]: null };
    //filterCriteria.Sizes = Sizes || { [Op.not]: null };
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

    // cantidad de productos filtrados
    const countFilterCriteria = await Product.count({
      where: { ...filterCriteria, available: true },
    });

    //busca todos los productos de la db
    const products = await Product.findAll({
      where: { ...filterCriteria, available: true },
      limit,
      offset,
      include: [
        {
          model: Stock,
          include: [{ model: Size, attributes: ["name"] }],
        },
        { model: Image, attributes: ["url"], through: { attributes: [] } },
      ],
    });

    if (!products || products.length === 0) {
      return res.status(404).json({ mensaje: "No se encontraron productos." });
    }

    const modifiedProducts = products.map((product) => {
      // Crear un nuevo objeto para cada producto
      const modifiedProduct = { ...product.toJSON() };

      // Modificar el array de imágenes
      modifiedProduct.Images = modifiedProduct.Images.map((image) => image.url);

      // Modificar el array de tallas y cantidades (stock)
      modifiedProduct.Stocks = modifiedProduct.Stocks.map((stock) => ({
        [stock.Size.name]: stock.quantity,
      }));

      // Eliminar la propiedad 'Size' si no es necesaria en este punto
      delete modifiedProduct.Size;

      return modifiedProduct;
    });

    return res.status(200).json({
      totalCount: countProducts,
      totalFilteredCount: countFilterCriteria,
      currentPage,
      limitPage,
      previousPage,
      nextPage,
      data: modifiedProducts,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensaje: "Hubo un error al recuperar los productos." });
  }
};

module.exports = getProduct;
