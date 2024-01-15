const { ShoppingCart, Cart_Product } = require("../../db");
const { moldeRespuesta } = require("../../handlers/Carrito/PutProduct");
const { Op } = require("sequelize");

const deleteProduct = async (idUser, products) => {
  try {
    const cartUser = await ShoppingCart.findOne({
      where: { UserId: idUser },
    });
    //Si no se encuentra un carrito asignado al usuario se da aviso
    if (!cartUser) {
      return { message: "no se encontro carrito con ese UserId" };
    }

    const existsInTheCart = await Cart_Product.findOne({
      where: {
        [Op.and]: [{ ShoppingCartId: cartUser.id }, { ProductId: products[0].id }],
      },
    });

    if (!existsInTheCart) {
      return { message: "Producto no encontrado en el carrito" };
    } else {
      await Cart_Product.destroy({
        where: {
          ShoppingCartId: shoppingId,
          ProductId: productId,
        },
      });
    }

    const carrito = await Cart_Product.findAll({
      where: {
        ShoppingCartId: cartUser.id,
      },
    });
    const totalBruto = carrito.map((producto) => {
      return {
        subtotal: producto.dataValues.subtotal,
      };
    });

    const total = totalBruto.reduce((acumulador, subtotal) => {
      const subtotalNumero = parseFloat(subtotal.subtotal);
      return acumulador + subtotalNumero;
    }, 0);

    await ShoppingCart.update(
      { total: total },
      {
        where: { UserId: idUser },
      }
    );
    const productos = await Promise.all(carrito.map(({ ProductId, detalle }) => moldeRespuesta(ProductId, detalle)));

    const currentCart = productos.flat(Infinity);

    return {
      message: "Producto eliminado del carrito",
      total: total,
      products: currentCart,
    };
  } catch (error) {
    return { message: error.message };
  }
};

module.exports = deleteProduct;
