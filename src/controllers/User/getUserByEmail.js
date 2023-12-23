const { User } = require('../../db');

const getUserByEmail = async (req, res) => {
    try {
        const { email, externalSignIn } = req.query;
        if (email && externalSignIn) {
            const user = await User.findOne({ where: { email, externalSignIn: externalSignIn } });
            if (user) {
                res.json({
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    image: user.image,
                    email: user.email,
                    address: user.address,
                    city: user.city,
                    country: user.country,
                    zipCode: user.zipCode,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    sendMailsActive: user.sendMailsActive,
                    externalSignIn: user.externalSignIn
                })
            }
            else res.status(404).json('el usuario no existe');
        }
        else {
            res.status(404).json('faltan datos para completar la solicitus')
        }

    } catch (error) {
        console.error("Error al obtener usuario:", error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = getUserByEmail;
