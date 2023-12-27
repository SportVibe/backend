const { Cart_Product } = require("../../db");
const { Op } = require("sequelize");

const softDeleteProduct = async (userId, productId) => {
  try {
    const deletedProduct = await Cart_Product.update(
      { deleted: true },
      {
        where: {
          [Op.and]: [{ ShoppingCartId: userId }, { ProductId: productId }],
        },
      }
    );

    if (deletedProduct[0]) {
      return "Producto eliminado";
    } else {
      throw new Error("Producto no encontrado en el carrito");
    }
  } catch (error) {
    throw error;
  }
};

module.exports = softDeleteProduct;
