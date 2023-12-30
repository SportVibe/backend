const { ShoppingCart, Cart_Product } = require("../../db");
const { Op } = require("sequelize");

const deleteProducts = async (userId, productsToDelete, total) => {
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

    const removedProducts = [];

    for (let product of productsToDelete) {
      const cartProduct = await Cart_Product.findOne({
        where: {
          [Op.and]: [
            { ShoppingCartId: cartUser.id },
            { ProductId: product.id },
            { talle: product.talle }, // Consideración del talle
          ],
        },
      });

      if (cartProduct) {
        await Cart_Product.destroy({
          where: {
            [Op.and]: [
              { ShoppingCartId: cartUser.id },
              { ProductId: product.id },
              { talle: product.talle }, // Consideración del talle
            ],
          },
        });

        removedProducts.push(cartProduct);
      }
    }

    return { message: "Productos eliminados del carrito", removedProducts };
  } catch (error) {
    return { message: error.message };
  }
};

module.exports = deleteProducts;
