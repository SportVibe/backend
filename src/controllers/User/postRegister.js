const createUser = require("../../handlers/User/createUser");

const postRegister = async (req, res) => {
  try {
    const newUser = await createUser(req, res);

    res.status(201).json({
      message: `Usuario ${newUser.firstName} registrado exitosamente`,
      user: {
        id: newUser.id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        image: newUser.image,
        email: newUser.email,
        address: newUser.address,
        city: newUser.city,
        country: newUser.country,
        zipCode: newUser.zipCode,
        email: newUser.email,
        phoneNumber: newUser.phoneNumber,
        sendMailsActive: newUser.sendMailsActive,
        externalSignIn: newUser.externalSignIn
      }
    });
  } catch (error) {
    res.status(500).json({ error: `Error en el registro:, ${error.message}` });
  }
};

module.exports = postRegister;
