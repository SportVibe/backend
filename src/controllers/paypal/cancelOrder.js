const cancelOrder = async (req, res) => {
  try {
    console.log(req.data);
    // hacer update de shopping cart available dejarlo en true
    res.send("¡Se canceló el pago!");
  } catch (error) {
    console.error("Error al cancelar el pago:", error);
    return res.status(500).json({ error: "Error Interno del Servidor" });
  }
};

module.exports = cancelOrder;
