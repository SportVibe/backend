const deleteMultipleProducts = require("../../handlers/Carrito/deleteMultipleProducts");

const deleteMultipleProductsFromCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const { productIds } = req.body;

    if (!userId || !productIds || !Array.isArray(productIds) || productIds.length === 0) {
      return res.status(401).json({ error: "Falta ID del usuario o de los productos" });
    }

    const response = await deleteMultipleProducts(userId, productIds);

    if (response === "Productos eliminados") {
      return res.status(200).json({ message: "Productos eliminados del carrito" });
    } else {
      return res.status(404).json({ error: "Algunos productos no están en el carrito" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = deleteMultipleProductsFromCart;