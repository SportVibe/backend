const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "ShoppingCart",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};
