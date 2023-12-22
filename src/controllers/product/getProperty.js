const { Product, Stock, Image, Color, Size } = require("../../db");

const getPropery = async (req, res) => {
    try {
        let { property } = req.query;
        if (typeof property === 'string') {
            // Si es un string, lo convertimos en un array de una sola propiedad
            property = [property];
        }
        const queryOptions = {
            attributes: [],
            group: [],
            raw: true,
        };
        property.forEach(property => {
            queryOptions.attributes.push(property);
            queryOptions.group.push(property);
        });
        const result = await Product.findAll(queryOptions);
        if (result.length) {
            res.json(result);
        }
    } catch (error) {
        console.error({ error: error.message });
        res.status(500).json({ error: error.message });
    }
};

module.exports = getPropery;
