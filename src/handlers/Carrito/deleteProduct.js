const { ShoppingCart, Cart_Product } = require("../../db");
const { Op } = require("sequelize");

const deleteProduct = async (productId) => {
  try {
    const cartUser = await ShoppingCart.findOne({
      where: { UserId: req.userId }, 
    });

    if (!cartUser) {
      throw new Error("No se encontró el carrito para el usuario");
    }

    const deleted = await Cart_Product.destroy({
      where: {
        [Op.and]: [{ ShoppingCartId: cartUser.id }, { ProductId: productId }],
      },
    });

    if (deleted === 0) {
      return "Producto no encontrado en el carrito";
    }

    await updateCartOnProductDelete(cartUser.id, productId);

    return "Producto eliminado";
  } catch (error) {
    return error.message;
  }
};

const updateCartOnProductDelete = async (cartId, productId) => {
  try {
    const cartProducts = await Cart_Product.findAll({
      where: { ShoppingCartId: cartId },
    });

    const productInCart = cartProducts.find(
      (product) => product.ProductId === productId
    );

    if (!productInCart) {
      throw new Error("El producto no está en el carrito");
    }

    await Cart_Product.update(
      {
        cantidad: 0,
        subtotal: 0,
      },
      {
        where: {
          [Op.and]: [{ ShoppingCartId: cartId }, { ProductId: productId }],
        },
      }
    );
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = deleteProduct;
