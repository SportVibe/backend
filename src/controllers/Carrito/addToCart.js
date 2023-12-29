const addProduct = require("../../handlers/Carrito/addProduct");

const addToCart = async (req, res) => {
  try {
    const { userId, carrito, total } = req.body;
    if (!userId) {
      return res.status(401).json({ error: "Falta id del usuario" });
    }
    if (!total) {
      return res.status(401).json({ error: "El total del carrito no ha sido proporcionado" });
    }
    if (carrito.length === 0) {
      return res.status(401).json({ error: "El carrito esta vacio" });
    }

    const response = await addProduct(userId, carrito, total);
    if (response.message === "Carrito actualizado") {
      return res.status(200).json(response);
    } else {
      return res.status(401).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = addToCart;
