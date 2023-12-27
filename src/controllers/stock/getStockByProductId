const { Stock, Size } = require("../../db");

const getStock = async (req, res) => {
  try {
    const { productId } = req.params;
    // console.log(productId);
    const response = await Stock.findAll({
      where: {
        product_id: productId,
      },
      include: [{ model: Size, attributes: ["name"] }],
    });

    const formattedResponse = response.reduce((acc, stock) => {
      acc[stock.Size.name] = stock.quantity;
      return acc;
    }, {});

    res.status(200).json(formattedResponse);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

module.exports = getStock;
