const { deleteProduct } = require("../../handlers/Product/deleteProductByPk");

const deleteProductByPk = async (req, res) => {
  try {
    await deleteProduct(req, res);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteProductByPk;
