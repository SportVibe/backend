const deleteProduct = require("../../handlers/Carrito/deleteProduct");

const removeProductFromCart = async (req, res) => {
  try {
    const { productId } = req.params;

    if (!productId) {
      return res.status(401).json({ error: "Falta el ID del producto" });
    }

    const userId = req.userId;

    const response = await deleteProduct(userId, productId);
    if (response === "Producto eliminado") {
      return res.status(200).json({ message: "Producto eliminado del carrito" });
    } else {
      return res.status(404).json({ error: "El producto no está en el carrito" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = removeProductFromCart;
