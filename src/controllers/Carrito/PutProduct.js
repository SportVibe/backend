const updateProductHandler = require("../../handlers/Carrito/PutProduct");

const updateProduct= async (req, res) => {
  try {
    const { userId, productId, newTotal } = req.body; // Se espera el userId, productId y el nuevo total para actualizar el producto

    const result = await updateProductHandler(userId, productId, newTotal); // Llamada a la función updateProduct

    // Manejo de posibles respuestas según el resultado de updateProduct
    if (result.message === "No se encontró un carrito asociado a ese UserId") {
      return res.status(404).json({ error: "No se encontró un carrito para este usuario" });
    } else if (result.message === "El producto no está en el carrito") {
      return res.status(404).json({ error: "El producto no está en el carrito" });
    }

    return res.status(200).json(result); // Respuesta exitosa
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el producto del carrito" }); // Manejo de error
  }
};

module.exports = updateProduct;