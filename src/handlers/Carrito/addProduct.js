const { ShoppingCart, Cart_Product } = require("../../db");
const { Op } = require("sequelize");
const { moldeRespuesta } = require("../../handlers/Carrito/PutProduct");

const addProduct = async (idUser, products) => {
  try {
    // Primero se busca el carrito que tenga asignado en Userid

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

    if (existsInTheCart) {
      return { message: "Este producto ya existe en el carrito, recuerde usar la ruta Put" };
    } else {
      await Cart_Product.create({
        ShoppingCartId: cartUser.id,
        ProductId: products[0].id,
        cantidad: products[0].quantity,
        subtotal: products[0].price * products[0].quantity,
        detalle: `Talle: ${products[0].size}, Cantidad: ${products[0].quantity}.`,
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
    console.log(productos);
    const currentCart = productos.flat(Infinity);

    return {
      message: "Carrito actualizado",
      products: currentCart,
      total: total,
    };
  } catch (error) {
    return { message: error.message };
  }
};

module.exports = addProduct;
