const { Reviews } = require("../../db");

const getReview = async (req, res) => {
  try {
    const { status, productId } = req.query;

    if (!status && !productId) {
      const reviews = await Reviews.findAll();

      return res.status(200).json({
        message: "OK",
        data: reviews,
      });
    }

    if (status && !productId) {
      const reviews = await Reviews.findAll({
        where: {
          status: status,
        },
      });

      if (!reviews.length) {
        return res.status(400).json({ message: `No se encuentran reseñas con status: ${status}.` });
      }
      return res.status(200).json({
        message: "OK",
        data: reviews,
      });
    }

    if (!status && productId) {
      const reviews = await Reviews.findAll({
        where: {
          ProductId: productId,
        },
      });

      if (!reviews.length) {
        return res.status(400).json({ message: `No se encuentran reseñas con ID: ${productId}.` });
      }
      return res.status(200).json({
        message: "OK",
        data: reviews,
      });
    }
  } catch (error) {
    console.error("Error al intentar encontrar reseñas:", error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getReview;
