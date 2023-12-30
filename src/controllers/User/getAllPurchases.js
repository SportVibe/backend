const { ShoppingCart, Cart_Product, Product } = require("../../db");

const getAllPurchases = async (req, res) => {
  const userId = req.params.userId;

  try {
    const shoppingCart = await ShoppingCart.findOne({
      where: { userId, available: false },
      include: [
        {
          model: Cart_Product,
          as: "cartProducts",
          include: [
            {
              model: Product,
              as: "product",
            },
          ],
        },
      ],
    });

    if (!shoppingCart) {
      return res.status(404).json({ message: "Carrito no encontrado para el usuario proporcionado" });
    }

    // Devolver los productos encontrados en el carrito
    const productsInCart = shoppingCart.cartProducts.map((cartProduct) => ({
      productId: cartProduct.productId,
      quantity: cartProduct.quantity,
      productName: cartProduct.product.title,
    }));

    res.json({ productsInCart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = getAllPurchases;
