const { ShoppingCart, Cart_Product } = require("../../db");
const { Op } = require("sequelize");

const updateProductQuantity = async (userId, productId, quantity) => {
  try {
    const cartUser = await ShoppingCart.findOne({
      where: { UserId: userId },
    });

    if (!cartUser) {
      throw new Error("No se encontró el carrito para el usuario");
    }

    const updated = await Cart_Product.update(
      { cantidad: quantity },
      {
        where: {
          [Op.and]: [{ ShoppingCartId: cartUser.id }, { ProductId: productId }],
        },
      }
    );

    if (updated[0] === 0) {
      return "El producto no está en el carrito";
    }

    return "Cantidad actualizada";
  } catch (error) {
    return error.message;
  }
};

module.exports = updateProductQuantity;