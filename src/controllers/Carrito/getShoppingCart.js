const { ShoppingCart, Order, Cart_Product, Product } = require("../../db");

const getShoppingCart = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(404).json({ message: "Id de Carrito no encontrado " });
    }

    const shoppingCart = await ShoppingCart.findOne({
      where: { id: id },
    });
    // console.log(shoppingCart);
    if (!shoppingCart) {
      return res.status(404).json({ message: "Carrito no encontrado para el ID ofrecido" });
    }

    const carrito = await Cart_Product.findAll({
      where: { ShoppingCartId: id },
    });
    console.log(carrito);
    const productos = carrito.map(({ ProductId, cantidad }) => ({ ProductId, cantidad }));

    const detalleProducto = [];
    for (let producto of productos) {
      const nombreProducto = await Product.findOne({
        where: { id: producto.ProductId },
      });
      detalleProducto.push({
        product: nombreProducto.dataValues.title,
        quantity: producto.cantidad,
        price: nombreProducto.dataValues.price,
        discount:
          nombreProducto.dataValues.discount !== 0
            ? nombreProducto.dataValues.discount
            : "Este producto no tiene descuento",
      });
    }
    res.json({
      productos: detalleProducto,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = getShoppingCart;
