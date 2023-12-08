const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Subcategory = sequelize.define('Subcategory', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, { timestamps: true });

    return Subcategory;
}
