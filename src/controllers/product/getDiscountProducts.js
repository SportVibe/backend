const { Product, Stock, Image, Color, Size, Reviews } = require("../../db");
const { Op } = require("sequelize");

const getDiscountProducts = async (req, res) => {
  try {
    const limit = req.query.limit ? req.query.limit : 12;
    const products = await Product.findAll({
      where: {
        discount: {
          [Op.gt]: 0,
        },
      },
      include: [
        {
          model: Stock,
          include: [{ model: Size, attributes: ["name"] }],
        },
        {
          model: Image,
          attributes: ["url"],
          through: { attributes: [] },
        },
        {
          model: Color,
          attributes: ["name"],
          through: { attributes: [] },
        },
        {
          model: Reviews,
          attributes: ["id", "description", "score", "UserId"],
          where: { status: "accepted" },
          required: false,
        },
      ],
      order: [
        ["discount", "DESC"], // Ordena por la propiedad 'discount' en orden descendente (de mayor a menor)
      ],
      limit: limit,
    });
    if (products && products.length) {
      res.json(products);
    } else {
      res.status(404).json("no hay productos con descuentos");
    }
  } catch (error) {
    console.error({ error: error.message });
    res.status(500).json({ error: error.message });
  }
};

module.exports = getDiscountProducts;
