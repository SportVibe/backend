const { Op } = require("sequelize");
const { Product, Size, Stock, Image, Color } = require("../../db");

const search = async (search) => {
  try {
    const products = await Product.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.iLike]: `%${search}%` } },
          { description: { [Op.iLike]: `%${search}%` } },
          { category: { [Op.iLike]: `%${search}%` } },
          { subCategory: { [Op.iLike]: `%${search}%` } },
          { brand: { [Op.iLike]: `%${search}%` } },
          { gender: { [Op.iLike]: `%${search}%` } },
        ],
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

    if (products.length === 0) {
      return res.status(404).json({ error: "No se encontraron productos" });
    }

    return products;
  } catch (error) {
    console.error("Error en la búsqueda de producto:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = search;
