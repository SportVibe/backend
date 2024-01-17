const { User_order } = require("../../db");

const getAllPurchases = async (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  try {
    const purchases = await User_order.findAll({
      where: { userId: id },
    });
    if (!purchases || !purchases.length) {
      return res.json([]);
      // return res.status(404).json({ message: "No se encontraron órdenes para el usuario proporcionado" });
    }
    const groupedPurchases = purchases.reduce((acc, purchase) => {
      const existingPurchase = acc.find((group) => group.orderIdPaypal === purchase.orderIdPaypal);

      if (existingPurchase) {
        existingPurchase.userProducts.push({
          productId: purchase.productId,
          userId: purchase.userId,
          quantity: purchase.quantity,
          title: purchase.title,
          price: purchase.price,
          subtotal: purchase.subTotal,
        });
      } else {
        acc.push({
          id: purchase.id,
          orderIdPaypal: purchase.orderIdPaypal,
          totalOrder: purchase.totalOrder,
          userProducts: [
            {
              productId: purchase.productId,
              userId: purchase.userId,
              quantity: purchase.quantity,
              title: purchase.title,
              price: purchase.price,
              subtotal: purchase.subTotal,
            },
          ],
        });
      }

      return acc;
    }, []);

    res.status(200).json(groupedPurchases);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = getAllPurchases;
