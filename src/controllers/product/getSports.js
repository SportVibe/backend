const { Product, Sport } = require("../../db");

const getSports = async (req, res) => {
    try {
        const result = await Sport.findAll();
        if (result) {
            return res.json(result);
        }
    } catch (error) {
        console.error({ error: error.message });
        res.status(500).json({ error: error.message });
    }
};

module.exports = getSports;
