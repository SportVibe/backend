const { Order } = require("../../db");
const { HOST_FRONT } = require("../../../config");

const cancelOrder = async (req, res) => {
  try {
    const orderId = req.query.token;

    const updatedOrder = await Order.update(
      { status: "cancelled" },
      {
        where: {
          orderIdPaypal: orderId,
        },
      }
    );

    if (!updatedOrder) {
      return res.status(404).json({
        success: false,
        message: "Orden no encontrada",
        orderId,
      });
    }

    const redirectUrl = `${HOST_FRONT}/payment-status?orderId=${orderId}&status=Cancelled`;

    return res.redirect(redirectUrl);
  } catch (error) {
    console.error("Error al cancelar el pago:", error);
    return res.status(500).json({ error: "Error Interno del Servidor" });
  }
};

module.exports = cancelOrder;
