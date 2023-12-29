const getUserByID = require("../../handlers/User/getUserByID");

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserByID(id);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.json({
      id: user.id,
      active: user.active,
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
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = getUser;
