const { ShoppingCart, Cart_Product } = require("../../db");
const { Op } = require("sequelize");

const deleteProduct = async (shoppingId, productId, talle) => {
  try {
    const cart = await ShoppingCart.findByPk(shoppingId);

    if (!cart) {
      return { message: "Carrito no encontrado" };
    }

    const deletedProduct = await Cart_Product.findOne({
      where: {
        [Op.and]: [
          { ShoppingCartId: shoppingId },
          { ProductId: productId },
          { talle }, // Incluimos el campo de talle en la búsqueda
        ],
      },
    });

    if (!deletedProduct) {
      return { message: "Producto con esa talla no encontrado en el carrito" };
    }

    await Cart_Product.destroy({
      where: {
        [Op.and]: [
          { ShoppingCartId: shoppingId },
          { ProductId: productId },
          { talle },
        ],
      },
    });

    const productsInCart = await Cart_Product.findAll({
      where: { ShoppingCartId: shoppingId },
    });

    let total = 0;
    const productsInShop = [];

    for (let product of productsInCart) {
      let stock = 0;
      for (let quantity of product.quantity) {
        if (quantity.talle === talle) { // Filtramos por la talla específica
          stock += Object.values(quantity)[0];
        }
      }
      product.cantidad = stock;
      product.subtotal = product.price * stock;
      await product.save();
      total += product.subtotal;
      productsInShop.push(product);
    }

    await ShoppingCart.update({ total: total }, { where: { id: shoppingId } });

    return { message: "Producto eliminado del carrito con esa talla", updatedCart: { total, products: productsInShop } };
  } catch (error) {
    return { message: error.message };
  }
};

module.exports = deleteProduct;
