const { ShoppingCart, Cart_Product } = require("../../db");
const { Op } = require("sequelize");

const addProduct = async (idUser, products) => {
  try {
    console.log(idUser);
    console.log(products);
    // Primero se busca el carrito que tenga asignado en Userid
    const cartUser = await ShoppingCart.findOne({
      where: { UserId: idUser },
    });
    //Si no se encuentra un carrito asignado al usuario se da aviso
    if (!cartUser) {
      return { message: "no se encontro carrito con ese UserId" };
    }
    const sumasPorId = {};

    // Iterar sobre cada producto y sumar la quantity correspondiente al id
    products.forEach((producto) => {
      const { id, quantity } = producto;
      sumasPorId[id] = (sumasPorId[id] || 0) + quantity;
    });

    // Crear un array con objetos que contienen id y totalQuantity
    const cantidadPorId = Object.keys(sumasPorId).map((id) => ({
      id: parseInt(id),
      totalQuantity: sumasPorId[id],
    }));

    const mapeoInicial = products.map((producto) => {
      const cantidadTotal = cantidadPorId.find((item) => item.id === producto.id)?.totalQuantity || 0;

      return {
        id: producto.id,
        size: producto.size,
        price: producto.price,
        quantity: cantidadTotal,
        tallas: `Talle: ${producto.size}, Cantidad: ${producto.quantity}.`,
      };
    });
    const carrito = mapeoInicial.reduce((acc, producto) => {
      const existingProduct = acc.find((p) => p.id === producto.id);

      if (existingProduct) {
        // Si ya existe un producto con el mismo id, actualizar sus tallas
        existingProduct.tallas += producto.tallas;
      } else {
        // Si no existe, agregar el producto al array
        acc.push(producto);
      }

      return acc;
    }, []);

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
          detalle: producto.tallas,
        },
      });
      if (!created) {
        await Cart_Product.update(
          {
            ShoppingCartId: cartUser.id,
            ProductId: producto.id,
            cantidad: producto.quantity,
            subtotal: producto.price * producto.quantity,
            detalle: producto.tallas,
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
    return {
      message: "Carrito actualizado",
      ShoppingCart: productsInShop,
      total: total,
    };
  } catch (error) {
    return { message: error.message };
  }
};

module.exports = addProduct;
