const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Color = sequelize.define(
        "Brand",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        { timestamps: true }
    );

    return Color;
};
