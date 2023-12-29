const deleteProducts = require("../../handlers/Carrito/deleteProducts");

const deleteProductsController = async (req, res) => {
  try {
    const { productIds } = req.params;

    if (!productIds || !Array.isArray(productIds) || productIds.length === 0) {
      return res.status(401).json({ error: "Falta ID de los productos" });
    }

    const userId = req.userId; 

    const response = await deleteProducts(userId, productIds.split(',')); // Convertir los IDs a un array

    if (response === "Productos eliminados") {
      return res.status(200).json({ message: "Productos eliminados del carrito" });
    } else {
      return res.status(404).json({ error: "Algunos productos no están en el carrito" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = deleteProductsController;
