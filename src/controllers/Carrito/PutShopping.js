const { ShoppingCart } = require("../../db");
const putShopping = async (req, res) => {
  try {
    const { ShoppingId } = req.query;

    const ShoppingCarrito = await ShoppingCart.findByPk(ShoppingId);

    if (!ShoppingCarrito) {
      return res.status(401).json({ error: "No existe el Carrito en la BD" });
    } else {
      // Actualizar el carrito con los datos proporcionados
      await ShoppingCarrito.update({ available: false });

      return res.status(200).json({
        message: "Carrito actualizado exitosamente",
        Shopping: ShoppingCarrito,
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = putShopping;
