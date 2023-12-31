const axios = require("axios");
const { Order, ShoppingCart, Stock, Size } = require("../../db");
const { PAYPAL_URL, PAYPAL_CLIENT, PAYPAL_SECRET_KEY } = require("../../../config");

const captureOrder = async (req, res) => {
  try {
    const { token } = req.query;

    const response = await axios.post(
      `${PAYPAL_URL}/v2/checkout/orders/${token}/capture`,
      {},
      {
        auth: {
          username: PAYPAL_CLIENT,
          password: PAYPAL_SECRET_KEY,
        },
      }
    );
    console.log(response.data);
    const orderTotal = response.data.purchase_units.payments;
    const { id, status } = response.data;

    if (status === "COMPLETED") {
      await Order.update(
        { status: "accepted" },
        {
          where: {
            orderIdPaypal: response.data.id,
          },
        }
      );
      await ShoppingCart.update(
        { available: false },
        {
          where: {
            orderIdPaypal: token,
          },
        }
      );

      return res.json({
        success: true,
        message: "¡Pago aceptado!",
        orderId: id,
        total: orderTotal,
      });
    }
  } catch (error) {
    console.error("Error al capturar la orden:", error);
    return res.status(500).json({ error: "Error Interno del Servidor" });
  }
};
module.exports = captureOrder;
