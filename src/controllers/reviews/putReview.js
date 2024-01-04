const { Reviews } = require("../../db");

const putReview = async (req, res) => {
  try {
    const { id, status } = req.body;

    const existingReview = await Reviews.findOne({
      where: {
        id,
      },
    });

    if (!existingReview) {
      return res.status(400).json({ message: `No se encuentra la reseña id: ${id}.` });
    }

    await Reviews.update({ status: status }, { where: { id: id } });

    const review = await Reviews.findByPk(id);

    return res.status(201).json({
      message: "La actualización fue exitosa",
      data: review,
    });
  } catch (error) {
    console.error("Error al actualizar la reseña:", error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = putReview;
