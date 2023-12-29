const { ShoppingCart, Cart_Product } = require("../../db");
const { Op } = require("sequelize");

const addProduct = async (userId, carrito, total) => {
  try {
    // Primero se busca el carrito que tenga asignado en Userid
    const cartUser = await ShoppingCart.findOne({
      where: { UserId: userId },
    });

    //Si no se encuentra un carrito asignado al usuario se da aviso
    if (!cartUser) {
      return { message: "no se encontro carrito con ese UserId" };
    }

    //Se actualiza el total del carrito con lo que se recibe desde el front
    //(recordar que los descuentos se manejan desde el front)
    await ShoppingCart.update(
      { total: total },
      {
        where: {
          id: cartUser.id,
        },
      }
    );

    // Se crea un array donde van a estar los datos de cada producto
    const productsInShop = [];

    //En este bucle se recorre el carrito para calcular el subtotal de cada producto
    for (let producto of carrito) {
      //Calculamos el stock sumando la cantidades ofrecidas por talle
      let stock = producto.quantity.reduce((resultado, talle) => {
        const unidades = Object.values(talle)[0];
        return resultado + unidades;
      }, 0);

      //Se crea o se actualiza la relacion entre Productos y el carrito
      const [newItem, created] = await Cart_Product.findOrCreate({
        where: {
          [Op.and]: [{ ShoppingCartId: cartUser.id }, { ProductId: producto.id }],
        },
        defaults: {
          ShoppingCartId: cartUser.id,
          ProductId: producto.id,
          cantidad: stock,
          subtotal: producto.price * stock,
        },
      });

      if (!created) {
        await Cart_Product.update(
          {
            ShoppingCartId: cartUser.id,
            ProductId: producto.id,
            cantidad: stock,
            subtotal: producto.price * stock,
          },
          {
            where: {
              [Op.and]: [{ ShoppingCartId: cartUser.id }, { ProductId: producto.id }],
            },
          }
        );
      }
      //Se guarda en el array los datos del producto, juntos con los talles seleccionados
      productsInShop.push(newItem, ...producto.quantity);
    }

    return { message: "Carrito actualizado", ShoppingCart: productsInShop };
  } catch (error) {
    return { message: error.message };
  }
};

module.exports = addProduct;
