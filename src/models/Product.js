const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      discount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subCategory: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      // stock: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },
      available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: true }
  );
};
