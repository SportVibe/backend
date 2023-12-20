const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Purchase = sequelize.define('Purchase', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // Campos para representar los productos en el carrito
        productName: {
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
        brand: {
            type: DataTypes.STRING,
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
        // Información del carrito
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        // Estado del carrito
        status: {
            type: DataTypes.ENUM('in_progress', 'received'),
            defaultValue: 'in_progress',
        },
    }, { timestamps: true });

    return Purchase;
};
