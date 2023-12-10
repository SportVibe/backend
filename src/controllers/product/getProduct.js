const { Op } = require("sequelize");
const { Product, Image, Stock, Size, Color, Comment } = require("../../db");
const Paginado = require("../../utilities/Paginado");
const filterProduct = require("../../handlers/Product/filterProduct");
const searchProduct = require("../../handlers/Product/searchProduct");

const getProduct = async (req, res) => {
  try {
    const { page, limit, gender, subCategory, category, minPrice, maxPrice, search, price, Sizes, id } = req.query;
    let orderCriteria = [];
    // ordenamiento por price
    if (price) {
      if (price === "asc") {
        orderCriteria = [["price", "ASC"]];
      } else if (price === "desc") {
        orderCriteria = [["price", "DESC"]];
      }
    }
    //cantidad de productos en la db
    const countProducts = await Product.count({
      where: { available: true },
    });

    //se desestructura limite de paginas, pagina actual,  siguiente y anterior pagina
    const { limitPage, currentPage, nextPage, previousPage, offset } = Paginado(page, limit, countProducts);

    // filtros

    const filterCriteria = {};
    // filterCriteria.gender = gender || { [Op.not]: null };
    // filterCriteria.subCategory = subCategory || { [Op.not]: null };
    // filterCriteria.category = category || { [Op.not]: null };
    // filterCriteria.id = id || { [Op.not]: null };
    // //filterCriteria.Sizes = Sizes || { [Op.not]: null };
    // if (minPrice && maxPrice && !isNaN(minPrice) && !isNaN(maxPrice)) {
    //   filterCriteria.price = {
    //     [Op.between]: [parseFloat(minPrice), parseFloat(maxPrice)],
    //   };
    // }
    if (search) {
      filterCriteria.search = await searchProduct(search);
    }
    filterCriteria.filtrados = filterProduct({ gender, subCategory, category, minPrice, maxPrice, price, Sizes, id });

    // cantidad de productos filtrados
    const countFilterCriteria = await Product.count({
      where: { ...filterCriteria, available: true },
    });

    //busca todos los productos de la db
    const products = await Product.findAll({
      where: { ...filterCriteria, available: true },
      limit,
      offset,
      order: orderCriteria, //-----> criterio del ordenamiento
      include: [
        {
          model: Stock,
          include: [{ model: Size, attributes: ["name"] }],
        },
        { model: Image, attributes: ["url"], through: { attributes: [] } },
        { model: Color, attributes: ["name"], through: { attributes: [] } },
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

      // Verificar si existe la propiedad Color antes de mapear
      if (modifiedProduct.Colors) {
        modifiedProduct.Colors = modifiedProduct.Colors.map(({ name }) => name);
      }

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
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getProduct;
