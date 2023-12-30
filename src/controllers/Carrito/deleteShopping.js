const { ShoppingCart } = require("../../db");

const deleteShopping = async (req, res) => {
  try {
    const { ShoppingId } = req.query;

    const deletedShoppingCart = await ShoppingCart.destroy({
      where: { id: ShoppingId },
    });

    if (deletedShoppingCart === 0) {
      return res.status(404).json({ error: "No se encontró el carrito para eliminar" });
    }

    return res.status(200).json({ message: "Carrito eliminado exitosamente" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = deleteShopping;