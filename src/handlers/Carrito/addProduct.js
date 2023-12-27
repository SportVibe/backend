const { ShoppingCart, Cart_Product } = require("../../db");
const { Op } = require("sequelize");

const addProduct = async (userId, carrito, total) => {
  try {
    const cartUser = await ShoppingCart.findOne({
      where: { UserId: userId },
    });

    await ShoppingCart.update(
      { total: total },
      {
        where: {
          id: cartUser.id,
        },
      }
    );
    for (let producto of carrito) {
      const [newItem, created] = await Cart_Product.findOrCreate({
        where: {
          [Op.and]: [{ ShoppingCartId: cartUser.id }, { ProductId: producto.id }],
        },
        defaults: {
          ShoppingCartId: cartUser.id,
          ProductId: producto.id,
          cantidad: producto.cantidad,
          subtotal: producto.price * producto.cantidad,
        },
      });
      if (!created) {
        await Cart_Product.update(
          {
            ShoppingCartId: cartUser.id,
            ProductId: producto.id,
            cantidad: producto.cantidad,
            subtotal: producto.price * producto.cantidad,
          },
          {
            where: {
              [Op.and]: [{ ShoppingCartId: cartUser.id }, { ProductId: producto.id }],
            },
          }
        );
      }
    }
    return "Carrito actualizado";
  } catch (error) {
    return error;
  }
};

module.exports = addProduct;
