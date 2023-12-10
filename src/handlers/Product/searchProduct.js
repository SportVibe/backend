const { Op } = require("sequelize");
const { Product, Size, Stock, Image, Color } = require("../../db");

const search = async ({ search, gender, subCategory, category, minPrice, maxPrice, price, Sizes, id }) => {
  try {
    const filterCriteria = {};
    const whereClause = [];

    // search
    if (search || gender || subCategory || category || id || maxPrice || minPrice) {
      whereClause.push({
        [Op.or]: [
          { [Op.or]: [{ title: { [Op.iLike]: `%${search}%` } }, { title: { [Op.iLike]: `%${title}%` } }] },
          {
            [Op.or]: [
              { description: { [Op.iLike]: `%${search}%` } },
              { description: { [Op.iLike]: `%${description}%` } },
            ],
          },
          { [Op.or]: [{ category: { [Op.iLike]: `%${search}%` } }, { category: { [Op.iLike]: `%${category}%` } }] },
          {
            [Op.or]: [
              { subCategory: { [Op.iLike]: `%${search}%` } },
              { subCategory: { [Op.iLike]: `%${subCategory}%` } },
            ],
          },
          { [Op.or]: [{ brand: { [Op.iLike]: `%${search}%` } }, { brand: { [Op.iLike]: `%${brand}%` } }] },
          { [Op.or]: [{ gender: { [Op.iLike]: `%${search}%` } }, { gender: { [Op.iLike]: `%${gender}%` } }] },
          { [Op.or]: [{ price: { [Op.iLike]: `%${search}%` } }, { price: { [Op.iLike]: `%${price}%` } }] },
        ],
      });

      if (minPrice && maxPrice && !isNaN(minPrice) && !isNaN(maxPrice)) {
        filterCriteria.price = {
          [Op.between]: [parseFloat(minPrice), parseFloat(maxPrice)],
        };
      }
    }

    const products = await Product.findAll({
      where: {
        [Op.and]: whereClause, // Combining multiple conditions with AND
        ...filterCriteria, // Adding additional filter criteria
      },
      include: [
        {
          model: Stock,
          include: [
            {
              model: Size,
              attributes: ["name"],
            },
          ],
        },
        { model: Image, attributes: ["url"], through: { attributes: [] } },
        { model: Color, attributes: ["name"], through: { attributes: [] } },
      ],
    });
    return products;
  } catch (error) {
    console.error("Error en la búsqueda de producto:", error);
    return { error: error.message }; // Return the error message
  }
};

module.exports = search;
