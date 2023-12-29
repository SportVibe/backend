const updateProductQuantity = require("../../handlers/Carrito/PutProduct");

const modifyProductQuantity = async (req, res) => {
  try {
    const { userId, productId } = req.params;
    const { quantity } = req.body;

    if (!userId || !productId || !quantity || isNaN(quantity)) {
      return res.status(401).json({ error: "Faltan datos o los datos son inválidos" });
    }

    const response = await updateProductQuantity(userId, productId, quantity);
    if (response === "Cantidad actualizada") {
      return res.status(200).json({ message: "Cantidad del producto actualizada en el carrito" });
    } else {
      return res.status(404).json({ error: "El producto no está en el carrito" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = modifyProductQuantity;