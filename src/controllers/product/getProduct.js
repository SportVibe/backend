const { Op } = require("sequelize");

const { Product, Image, Stock, Size, Color, Reviews } = require("../../db");
const Paginado = require("../../utilities/Paginado");
const { quitarTildes } = require("../../utilities/removeSigns");

const getProduct = async (req, res) => {
  try {
    let { gender, discount, subCategory, category, minPrice, maxPrice, sort, typeSort, Sizes, id, search } = req.query;
    let { page, limit } = req.query;
    search = search ? quitarTildes(search) : "";

    // nos aseguramos de que el page y limit sean números
    if (isNaN(page) || !page) {
      page = 1;
    }
    if (isNaN(limit) || !limit) {
      limit = 12;
    }

    let orderCriteria = [];
    // ordenamientos, no puede ser mas de un ordenamiento a la vez
    if (sort && typeSort && !Array.isArray(sort) && !Array.isArray(typeSort)) {
      orderCriteria = [[`${sort.toLowerCase()}`, `${typeSort.toUpperCase()}`]];
    }
    //cantidad de productos en la db
    const countProducts = await Product.count({
      where: { available: true },
    });

    //se desestructura limite de paginas, pagina actual,  siguiente y anterior pagina
    const { limitPage, currentPage, nextPage, previousPage, offset } = Paginado(page, limit, countProducts);

    // filtros

    const filterCriteria = {};

    // la prioridad es lo que se busca por el search bar
    if (search && !Array.isArray(search)) {
      filterCriteria[Op.or] = [
        { title: { [Op.iLike]: `%${search}%` } },
        { description: { [Op.iLike]: `%${search}%` } },
        { brand: { [Op.iLike]: `%${search}%` } },
        { gender: { [Op.iLike]: `%${search}%` } },
        { category: { [Op.iLike]: `%${search}%` } },
        { subCategory: { [Op.iLike]: `%${search}%` } },
        { sport: { [Op.iLike]: `%${search}%` } },
      ];

      // si el usuario usa el search bar, se anulan los filtros por category y subCategory, porque es muy probable que hayan conflictos
      filterCriteria.subCategory = { [Op.not]: null };
      filterCriteria.category = { [Op.not]: null };
    }

    if (!search || Array.isArray(search)) {
      filterCriteria.subCategory = subCategory || { [Op.not]: null };
      filterCriteria.category = category || { [Op.not]: null };
    }

    // si el usuario no usa el ni search ni los filtros, los filtros se anulan y se devuelven todos los productos de la BDD
    filterCriteria.gender = gender || { [Op.not]: null };
    filterCriteria.id = id || { [Op.not]: null };
    //filterCriteria.Sizes = Sizes || { [Op.not]: null };

    if (minPrice && maxPrice && !isNaN(minPrice) && !isNaN(maxPrice)) {
      filterCriteria.price = {
        [Op.between]: [parseFloat(minPrice), parseFloat(maxPrice)],
      };
    }

    if (discount && !isNaN(discount)) {
      filterCriteria.discount = {
        [Op.gte]: discount,
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

      order: orderCriteria,
      include: [
        { model: Size, attributes: ["name"], through: { model: Stock } },
        { model: Image, attributes: ["url"], through: { attributes: [] } },
        { model: Color, attributes: ["name"], through: { attributes: [] } },
   
        {
          model: Reviews,
          attributes: ["id", "description", "score", "UserId"],
          where: { status: "accepted" },
          required: false,
        },

      ],
    });

    if (!products) {
      return res.status(404).json({ mensaje: "No se encontraron productos." });
    }

    const modifiedProducts = products.map((product) => {
      // Crear un nuevo objeto para cada producto
      const modifiedProduct = { ...product.toJSON() };
      // Modificar el array de imágenes

      modifiedProduct.Images = modifiedProduct.Images?.map((image) => image.url);
      // modifiedProduct.Sizes = modifiedProduct.Sizes.map((Size) => Size.name);

      // Verificar si existe la propiedad Color antes de mapear
      if (modifiedProduct.Colors) {
        modifiedProduct.Colors = modifiedProduct.Colors.map(({ name }) => name);
      }

      // Modificar el array de tallas y cantidades (stock)
      modifiedProduct.Stocks = modifiedProduct.Sizes.map((size) => ({
        [size.name]: size.Stock.quantity, // Acceder a la cantidad de stock desde la relación con Size
      }));

      // Eliminar la propiedad 'Size' si no es necesaria en este punto
      delete modifiedProduct.Sizes;

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
