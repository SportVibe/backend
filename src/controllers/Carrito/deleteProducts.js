const deleteProductsHandler = require("../../handlers/Carrito/deleteProducts");

const deleteProducts = async (req, res) => {
  try {
    const { userId, productsToDelete, total } = req.body;

    const result = await deleteProductsHandler(userId, productsToDelete, total);

    if (result.message === "No se encontró un carrito asociado a ese UserId") {
      return res.status(404).json({ error: "No se encontró un carrito para este usuario" });
    }

    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar productos del carrito" });
  }
};

module.exports = deleteProducts;