const { ShoppingCart, Order, Cart_Product, Product } = require("../../db");

const getAllPurchases = async (req, res) => {
  const { id } = req.params;
  try {
    const shoppingCart = await Order.findOne({
      where: { userId: id, status: "accepted" },
    });
    // console.log(shoppingCart);
    if (!shoppingCart) {
      return res.status(404).json({ message: "Carrito no encontrado para el usuario proporcionado" });
    }
    const { ShoppingCartId } = shoppingCart;
    // console.log(ShoppingCartId);
    if (!ShoppingCartId) {
      return res.status(404).json({ message: "Id de Carrito no encontrado " });
    }
    const carrito = await Cart_Product.findAll({
      where: { ShoppingCartId: ShoppingCartId },
    });
    const productos = carrito.map(({ ProductId, cantidad }) => ({ ProductId, cantidad }));
    // console.log(productos);

    const detalleProducto = [];
    for (let producto of productos) {
      const nombreProducto = await Product.findOne({
        where: { id: producto.ProductId },
      });
      detalleProducto.push({
        product: nombreProducto.dataValues.title,
        quantity: producto.cantidad,
        price: nombreProducto.dataValues.price,
        total: nombreProducto.dataValues.price * producto.cantidad,
      });
    }

    const fecha = new Date(shoppingCart.createdAt);
    // Restar 3 horas a la hora actual
    fecha.setHours(fecha.getHours() - 3);

    const fechaFormateada = fecha.toISOString().split("T")[0];
    const horaFormateada = fecha.toISOString().split("T")[1].split(".")[0];
    res.json({
      purchases: detalleProducto,
      totalPaid: shoppingCart.total,
      date: fechaFormateada,
      time: horaFormateada,
      orderId: shoppingCart.orderIdPaypal,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = getAllPurchases;
