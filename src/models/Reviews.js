const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Review = sequelize.define(
    "Reviews",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { max: 5, min: 1 },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("pending", "accepted", "rejected"),
        defaultValue: "pending",
      },
    },
    {
      timestamps: false,
    }
  );
  Review.addHook("afterSave", "updateProductAverageScore", async (review) => {
    if (review.status === "accepted") {
      const product = await review.getProduct();
      const acceptedReviews = await product.getReviews({ where: { status: "accepted" } });

      const totalScore = acceptedReviews.reduce((sum, r) => sum + r.score, 0);
      const averageScore = totalScore / acceptedReviews.length;

      product.averageScore = averageScore;
      product.countReviews = acceptedReviews.length;
      await product.save();
    }
  });
};
