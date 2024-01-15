const deleteProductHandler = require("../../handlers/Carrito/deleteProduct");

const deleteProduct = async (req, res) => {
  try {
    const { idUser, products } = req.body;

    if (!idUser) {
      return res.status(401).json({ error: "Falta id del usuario." });
    }

    if (products.length === 0) {
      return res.status(401).json({ error: "El carrito esta vacio." });
    }

    if (products[0].quantity > 1) {
      return res.status(401).json({ error: "Recuerde que el metodo delete se utiliza solo en el ultimo producto." });
    }

    const result = await deleteProductHandler(idUser, products);

    if (result.message === "Producto eliminado del carrito") {
      return res.status(200).json(result);
    } else {
      return res.status(401).json(result);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteProduct;
