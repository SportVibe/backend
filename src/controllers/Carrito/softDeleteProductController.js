const softDeleteProductController = require("../../handlers/Carrito/softDeleteProduct");

const softDeleteProduct = async (req, res) => {
  try {
    const { userId } = req.params;
    const { productId } = req.body;

    const response = await softDeleteProductController(userId, productId);

    if (response === "Producto eliminado") {
      return res.status(200).json({ message: "Producto eliminado lógicamente del carrito exitosamente" });
    } else {
      return res.status(404).json({ error: "Producto no encontrado en el carrito" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = softDeleteProduct;
