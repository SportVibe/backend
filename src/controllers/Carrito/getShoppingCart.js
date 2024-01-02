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
    if (!shoppingCart) {
      return res.status(404).json({ message: "Carrito no encontrado para el ID ofrecido" });
    }

    const carrito = await Cart_Product.findAll({
      where: { ShoppingCartId: id },
    });
    console.log(carrito);
    const productos = carrito.map(({ ProductId, cantidad, detalle }) => ({ ProductId, cantidad, detalle }));
    console.log(productos);
    const detalleProducto = [];
    for (let producto of productos) {
      const regex = /Cantidad: (\d+)/g;
      let totalStock = 0;
      while ((match = regex.exec(producto.detalle)) !== null) {
        const cantidad = parseInt(match[1], 10);
        totalStock += cantidad;
      }
      const nombreProducto = await Product.findOne({
        where: { id: producto.ProductId },
      });
      detalleProducto.push({
        id: producto.ProductId,
        product: nombreProducto.dataValues.title,
        quantity: totalStock,
        price: nombreProducto.dataValues.price,
        discount:
          nombreProducto.dataValues.discount !== 0
            ? nombreProducto.dataValues.discount
            : "Este producto no tiene descuento",
        detalle: producto.detalle,
      });
    }
    res.status(200).json({
      productos: detalleProducto,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = getShoppingCart;
