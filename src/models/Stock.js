const { DataTypes } = require("sequelize");
const Size = require("./Size");
const Product = require("./Product");

module.exports = (sequelize) => {
  sequelize.define(
    "Stock",
    {
      ProductId: {
        type: DataTypes.INTEGER,
        references: {
          model: Product,
          key: "id",
        },
      },
      SizeId: {
        type: DataTypes.INTEGER,
        references: {
          model: Size,
          key: "id",
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
