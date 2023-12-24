const { User } = require("../../db.js");
const updateUser = require("../../handlers/User/updateUser.js");

const putUserById = async (req, res) => {
  try {
    const { id } = req.params;
    // Se verifica que exista en la base de datos el Usuario a editar.
    const existe = await User.findByPk(id);
    // Se responde que no existe si no se encuentra el Usuario.
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
      rol,
      image,
      externalSignIn,
    } = req.body;

    const response = await updateUser({
      id,
      active,
      sendMailsActive,
      firstName: firstName ? firstName.toUpperCase() : firstName,
      lastName: lastName ? lastName.toUpperCase() : lastName,
      phoneNumber,
      address: address ? address.toUpperCase() : address,
      city: city ? city.toUpperCase() : city,
      country: country ? country.toUpperCase() : country,
      zipCode,
      email: email ? email.toUpperCase() : email,
      rol: rol ? rol.toUpperCase() : rol,
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
