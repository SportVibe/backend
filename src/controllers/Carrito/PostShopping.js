const { ShoppingCart, User } = require("../../db");

const postShopping = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(401).json({ error: "Falta id del usuario" });
    }

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(401).json({ error: "No existe el Usuario en la BD" });
    }

    const [newCart, created] = await ShoppingCart.findOrCreate({
      where: { UserId: userId },
      defaults: {
        total: 0,
      },
    });

    return res.status(200).json(newCart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postShopping;
