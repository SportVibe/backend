const deleteProduct = require("../../handlers/Carrito/deleteProduct");

const deleteProductFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.params;

    if (!userId || !productId) {
      return res.status(401).json({ error: "Falta id del usuario o del producto" });
    }

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

module.exports = deleteProductFromCart;
