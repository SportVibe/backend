const { User } = require("../../db.js");
const updateUser = require("../../handlers/User/updateUser.js");

const putUserById = async (req, res) => {
  try {
    const { id } = req.params;
    // Se verifica que exista en la base de datos el Producto a editar.
    const existe = await User.findByPk(id);
    // Se responde que no existe si no se encuentra el Producto.
    if (!existe) {
      return res.status(404).json({ message: "El usuario no existe" });
    }

    const {
      active,
      sendMailsActive,
      firstName,
      lastName,
      phoneNumber,
      address,
      city,
      country,
      zipCode,
      email,
      password,
      rol,
      image,
      externalSignIn,
    } = req.body;

    const response = await updateUser({
      id,
      active,
      sendMailsActive,
      firstName,
      lastName,
      phoneNumber,
      address,
      city,
      country,
      zipCode,
      email,
      password,
      rol,
      image,
      externalSignIn,
    });

    return res.status(200).json({ message: response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Hubo un error al actualizar el Usuario." });
  }
};

module.exports = putUserById;
