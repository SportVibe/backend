const { ShoppingCart, Cart_Product } = require("../../db");
const { Op } = require("sequelize");
const { verificarExistencia, stringArray, moldeRespuesta } = require("../../handlers/Carrito/PutProduct");

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

    //Si no se encuentra un carrito asignado al usuario se da aviso
    if (cartUser === null) {
      return res.status(401).json({ error: "no se encontró carrito con ese UserId" });
    }
    const productInCart = await Cart_Product.findOne({
      where: {
        [Op.and]: [{ ShoppingCartId: cartUser.id }, { ProductId: products[0].id }],
      },
    });

    const modificacionDetalle = stringArray(productInCart.dataValues.detalle);

    verificarExistencia(products[0].size, products[0].quantity, modificacionDetalle);

    const cantidad = modificacionDetalle.reduce((acc, [_, cantidad]) => acc + cantidad, 0);

    const resultadoString = modificacionDetalle
      .map(([talle, cantidad]) => `Talle: ${talle}, Cantidad: ${cantidad}.`)
      .join(" ");

    await Cart_Product.update(
      {
        cantidad: cantidad,
        subtotal: products[0].price * cantidad,
        detalle: resultadoString,
      },
      {
        where: {
          [Op.and]: [{ ShoppingCartId: cartUser.id }, { ProductId: products[0].id }],
        },
      }
    );
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
    await ShoppingCart.update(
      { total: total },
      {
        where: {
          id: cartUser.id,
        },
      }
    );
    const productos = await Promise.all(carrito.map(({ ProductId, detalle }) => moldeRespuesta(ProductId, detalle)));

    const currentCart = productos.flat(Infinity);

    res.status(200).json({
      message: "Carrito actualizado",
      products: currentCart,
      total: total,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = putShopping;
