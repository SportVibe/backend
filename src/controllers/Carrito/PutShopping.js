const { ShoppingCart, Cart_Product } = require("../../db");
const { Op } = require("sequelize");

const putShopping = async (req, res) => {
  try {
    const { idUser, products } = req.body;

    if (!idUser) {
      return res.status(401).json({ error: "Falta id del usuario" });
    }

    if (products.length === 0) {
      return res.status(401).json({ error: "El carrito esta vacío" });
    }
    // Primero se busca el carrito que tenga asignado en UserId
    const cartUser = await ShoppingCart.findOne({
      where: { UserId: idUser },
    });
    console.log(cartUser);
    //Si no se encuentra un carrito asignado al usuario se da aviso
    if (cartUser === null) {
      return res.status(401).json({ error: "no se encontró carrito con ese UserId" });
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
      await Cart_Product.update(
        {
          cantidad: producto.quantity,
          subtotal: producto.price * producto.quantity,
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
          cantidad: producto.quantity,
          subtotal: producto.price * producto.quantity,
        },
      });

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
    res.status(200).json({
      message: "Carrito actualizado",
      ShoppingCart: productsInShop,
      total,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = putShopping;
