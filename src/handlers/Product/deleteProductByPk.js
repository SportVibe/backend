const { Product } = require("../../db");

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const product = await Product.findByPk(id);

  if (!product || !product.available) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  product.available = false;
  await product.save();

  return res.status(200).json({
    message: "producto eliminado",
  });
};

module.exports = { deleteProduct };
