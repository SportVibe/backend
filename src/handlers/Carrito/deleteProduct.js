const { ShoppingCart, Cart_Product } = require("../../db");
const { Op } = require("sequelize");

const deleteProduct = async (shoppingId, productId) => {
  try {
    const cart = await ShoppingCart.findByPk(shoppingId);

    if (!cart) {
      return { message: "Carrito no encontrado" };
    }

    const deletedProduct = await Cart_Product.findOne({
      where: {
        ShoppingCartId: shoppingId,
        ProductId: productId,
      },
    });

    if (!deletedProduct) {
      return { message: "Producto no encontrado en el carrito" };
    }

    await Cart_Product.destroy({
      where: {
        ShoppingCartId: shoppingId,
        ProductId: productId,
      },
    });

    const productsInCart = await Cart_Product.findAll({
      where: { ShoppingCartId: shoppingId },
    });

    let total = 0;
    const productsInShop = [];

    for (let product of productsInCart) {
      product.subtotal = product.price * product.cantidad;
      total += product.subtotal;
      productsInShop.push(product);
    }

    await ShoppingCart.update({ total: total }, { where: { id: shoppingId } });

    return { message: "Producto eliminado del carrito", updatedCart: { total, products: productsInShop } };
  } catch (error) {
    return { message: error.message };
  }
};

module.exports = deleteProduct;
