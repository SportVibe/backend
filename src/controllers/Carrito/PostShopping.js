const { ShoppingCart, User } = require("../../db");

const postShopping = async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(401).json({ error: "Falta id del usuario" });
    }

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(401).json({ error: "No existe el Usuario en la BD" });
    }

    const [newCart, created] = await ShoppingCart.findOrCreate({
      where: { UserId: id },
    });

    return res.status(200).json(newCart);
  } catch (error) {
    console.error({ error: error.message });
    res.status(400).json({ error: error.message });
  }
};

module.exports = postShopping;
