const { ShoppingCart, Cart_Product } = require("../../db");
const { Op } = require("sequelize");

const deleteProduct = async (userId, carrito, total) => {
  try {
    const cartUser = await ShoppingCart.findOne({
      where: { UserId: userId },
    });

    if (!cartUser) {
      return { message: "No se encontró un carrito asociado a ese UserId" };
    }

    await ShoppingCart.update(
      { total: total },
      {
        where: {
          id: cartUser.id,
        },
      }
    );

    const productsInShop = [];

    for (let producto of carrito) {
      let stock = producto.quantity.reduce((resultado, talle) => {
        const unidades = Object.values(talle)[0];
        return resultado + unidades;
      }, 0);

      const cartProduct = await Cart_Product.findOne({
        where: {
          [Op.and]: [
            { ShoppingCartId: cartUser.id },
            { ProductId: producto.id },
          ],
        },
      });

      if (cartProduct) {
        await Cart_Product.destroy({
          where: {
            [Op.and]: [
              { ShoppingCartId: cartUser.id },
              { ProductId: producto.id },
            ],
          },
        });
      }

      productsInShop.push(cartProduct, ...producto.quantity);
    }

    return { message: "Producto eliminado del carrito", removedProducts: productsInShop };
  } catch (error) {
    return { message: error.message };
  }
};

module.exports = deleteProduct;
