const { Order } = require("../../db");

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

    res.json({
      success: false,
      message: "¡Pago cancelado!",
      orderId,
    });
  } catch (error) {
    console.error("Error al cancelar el pago:", error);
    return res.status(500).json({ error: "Error Interno del Servidor" });
  }
};

module.exports = cancelOrder;
