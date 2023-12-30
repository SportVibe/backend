const { ShoppingCart, Cart_Product } = require("../../db");
const { Op } = require("sequelize");

const putShopping = async (req, res) => {
  try {
    const { userId, carrito, total } = req.body;

    if (!userId) {
      return res.status(401).json({ error: "Falta id del usuario" });
    }
    if (!total) {
      return res.status(401).json({ error: "El total del carrito no ha sido proporcionado" });
    }
    if (carrito.length === 0) {
      return res.status(401).json({ error: "El carrito esta vacío" });
    }
    // Primero se busca el carrito que tenga asignado en UserId
    const cartUser = await ShoppingCart.findOne({
      where: { UserId: userId },
    });
    console.log(cartUser);
    //Si no se encuentra un carrito asignado al usuario se da aviso
    if (cartUser === null) {
      return { message: "no se encontró carrito con ese UserId" };
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

      await Cart_Product.update(
        {
          cantidad: stock,
          subtotal: producto.price * stock,
        },
        {
          where: {
            [Op.and]: [{ ShoppingCartId: cartUser.id }, { ProductId: producto.id }],
          },
        }
      );
      //Se crea o se actualiza la relación entre Productos y el carrito
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

      //Se guarda en el array los datos del producto, juntos con los talles seleccionados
      productsInShop.push(newItem, ...producto.quantity);
    }

    res.status(200).json({ message: "Carrito actualizado", ShoppingCart: productsInShop });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = putShopping;
