const { Op, Sequelize } = require("sequelize");

const { Product, Image, Stock, Size, Color, Reviews } = require("../../db");
const Paginado = require("../../utilities/Paginado");
const { quitarTildes } = require("../../utilities/removeSigns");

const getProduct = async (req, res) => {
  try {
    let { gender, discount, subCategory, brand, sport, category, minPrice, maxPrice, sort, typeSort, Sizes, id, search } = req.query;
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
      orderCriteria = [[`${sort}`, `${typeSort.toUpperCase()}`]];
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
        { title: { [Op.iLike]: `%${search.trim()}%` } },
        { description: { [Op.iLike]: `%${search.trim()}%` } },
        { brand: { [Op.iLike]: `%${search.trim()}%` } },
        { gender: { [Op.iLike]: `%${search.trim()}%` } },
        { category: { [Op.iLike]: `%${search.trim()}%` } },
        { subCategory: { [Op.iLike]: `%${search.trim()}%` } },
        { sport: { [Op.iLike]: `%${search.trim()}%` } },
      ];

      // si el usuario usa el search bar, se anulan los filtros por category y subCategory, porque es muy probable que hayan conflictos
      filterCriteria.subCategory = { [Op.not]: null };
      filterCriteria.category = { [Op.not]: null };
    }

    if (!search || Array.isArray(search)) {
      filterCriteria.subCategory = subCategory ? { [Op.iLike]: subCategory } : { [Op.not]: null };
      filterCriteria.category = category ? { [Op.iLike]: category } : { [Op.not]: null };
    }

    // si el usuario no usa el ni search ni los filtros, los filtros se anulan y se devuelven todos los productos de la BDD
    filterCriteria.gender = gender || { [Op.not]: null };
    filterCriteria.id = id || { [Op.not]: null };
    //filterCriteria.Sizes = Sizes || { [Op.not]: null };

    //filtros de deporte y marca
    filterCriteria.brand = brand ? { [Op.iLike]: brand } : { [Op.not]: null };
    filterCriteria.sport = sport ? { [Op.iLike]: sport } : { [Op.not]: null };

    if (minPrice && maxPrice && !isNaN(minPrice) && !isNaN(maxPrice)) {
      filterCriteria.price = {
        [Op.between]: [parseFloat(minPrice), parseFloat(maxPrice)],
      };
    }
    console.log(discount);

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


    // ESTADÍSTICAS PARA EL FILTRADO DINÁMICO:

    // Consulta para obtener la estadística de las marcas
    let brandStatistics = await Product.findAll({
      attributes: ["brand", [Sequelize.fn("COUNT", Sequelize.col("brand")), "productCount"]],
      where: { ...filterCriteria, available: true },
      group: ["brand"],
    });

    // Consulta para obtener la estadística de los sports
    let sportStatistics = await Product.findAll({
      attributes: ["sport", [Sequelize.fn("COUNT", Sequelize.col("sport")), "productCount"]],
      where: { ...filterCriteria, available: true },
      group: ["sport"],
    });

    // Consulta para obtener la estadística de los genders
    let genderStatistics = await Product.findAll({
      attributes: ["gender", [Sequelize.fn("COUNT", Sequelize.col("gender")), "productCount"]],
      where: { ...filterCriteria, available: true },
      group: ["gender"],
    });

    let filterStatics = {}
    if (brandStatistics && sportStatistics && genderStatistics) {
      filterStatics = {
        brandStatistics,
        sportStatistics,
        genderStatistics
      }
    }

    return res.status(200).json({
      totalCount: countProducts,
      totalFilteredCount: countFilterCriteria,
      currentPage,
      limitPage,
      previousPage,
      nextPage,
      filterStatics,
      data: modifiedProducts,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getProduct;
