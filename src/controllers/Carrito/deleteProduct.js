const deleteProductHandler = require("../../handlers/Carrito/deleteProduct");


const deleteProduct = require('../handlers/deleteProduct');

const deleteProduct = async (req, res) => {
  try {
    const { userId, productId, total } = req.body; // Se espera el userId, productId y total del producto a eliminar

    const result = await deleteProductHandler (userId, productId, total); // Llamada a la función deleteProduct

    // Manejo de posibles respuestas según el resultado de deleteProduct
    if (result.message === "No se encontró un carrito asociado a ese UserId") {
      return res.status(404).json({ error: "No se encontró un carrito para este usuario" });
    } else if (result.message === "El producto no está en el carrito") {
      return res.status(404).json({ error: "El producto no está en el carrito" });
    }

    return res.status(200).json(result); // Respuesta exitosa
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el producto del carrito" }); // Manejo de error
  }
};

module.exports = deleteProduct;