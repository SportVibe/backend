const { ShoppingCart, Cart_Product } = require("../../db");
const { Op, where } = require("sequelize");

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

    const carrito = products.map((producto) => {
      return {
        id: producto.id,
        size: producto.size,
        price: producto.price,
        quantity: producto.quantity,
      };
    });
    // Se crea un array donde van a estar los datos de cada producto
    const productsInShop = [];

    //En este bucle se recorre el carrito para calcular el subtotal de cada producto
    for (let producto of carrito) {
      //Se crea o se actualiza la relacion entre Productos y el carrito
      const [newItem, created] = await Cart_Product.findOrCreate({
        where: {
          [Op.and]: [{ ShoppingCartId: cartUser.id }, { ProductId: producto.id }],
        },
        defaults: {
          ShoppingCartId: cartUser.id,
          ProductId: producto.id,
          cantidad: producto.quantity,
          subtotal: producto.price * producto.quantity,
        },
      });

      if (!created) {
        await Cart_Product.update(
          {
            ShoppingCartId: cartUser.id,
            ProductId: producto.id,
            cantidad: producto.quantity,
            subtotal: producto.price * producto.quantity,
          },
          {
            where: {
              [Op.and]: [{ ShoppingCartId: cartUser.id }, { ProductId: producto.id }],
            },
          }
        );
      }
      //Se guarda en el array los datos del producto, juntos con los talles seleccionados
      productsInShop.push(newItem);
    }
    const subTotales = productsInShop.map((producto) => {
      return {
        subtotal: producto.dataValues.subtotal,
      };
    });
    const total = subTotales.reduce((acumulador, subtotal) => {
      const subtotalNumero = parseFloat(subtotal.subtotal);
      return acumulador + subtotalNumero;
    }, 0);
    await ShoppingCart.update(
      { total: total },
      {
        where: {
          id: cartUser.id,
        },
      }
    );
    return { message: "Carrito actualizado", ShoppingCart: productsInShop, total: total };
  } catch (error) {
    return { message: error.message };
  }
};

module.exports = addProduct;
