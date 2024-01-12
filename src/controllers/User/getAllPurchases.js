const { ShoppingCart, Order, Cart_Product, Product } = require("../../db");

const getAllPurchases = async (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  try {
    const shoppingCart = await Order.findAll({
      where: { userId: id, status: "accepted" },
    });
    // console.log(shoppingCart);
    if (!shoppingCart) {
      return res.status(404).json({ message: "Carrito no encontrado para el usuario proporcionado" });
    }
    const allOrders = await Promise.all(shoppingCart.map(async (order) => {
      const { ShoppingCartId } = order;

      if (!ShoppingCartId) {
        return res.status(404).json({ message: "Id de Carrito no encontrado" });
      }

      const carrito = await Cart_Product.findAll({
        where: { ShoppingCartId: ShoppingCartId },
      });

      const productos = carrito.map(({ ProductId, cantidad }) => ({ ProductId, cantidad }));

      const detalleProducto = await Promise.all(
        productos.map(async (producto) => {
          const nombreProducto = await Product.findOne({
            where: { id: producto.ProductId },
          });

          return {
            productId: nombreProducto.dataValues.id,
            product: nombreProducto.dataValues.title,
            quantity: producto.cantidad,
            price: nombreProducto.dataValues.price,
            total: nombreProducto.dataValues.price * producto.cantidad,
          };
        })
      );

      const fecha = new Date(order.createdAt);
      fecha.setHours(fecha.getHours() - 3);
      const fechaFormateada = fecha.toISOString().split("T")[0];
      const horaFormateada = fecha.toISOString().split("T")[1].split(".")[0];

      return {
        purchases: detalleProducto,
        totalPaid: order.total,
        date: fechaFormateada,
        time: horaFormateada,
        orderId: order.orderIdPaypal,
      };
    }));
    // console.log(allOrders);
    res.json(allOrders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = getAllPurchases;
