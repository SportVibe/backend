const { findProductByPk } = require("../../handlers/Product/findProductByPk");

const getProductByPk = async (req, res) => {
  try {
    await findProductByPk(req, res);
  } catch (error) {
    console.error("Error al obtener el producto por PK:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = getProductByPk;
