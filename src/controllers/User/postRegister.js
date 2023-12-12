const createUser = require("../../handlers/User/createUser");

const postRegister = async (req, res) => {
  try {
    const newUser = await createUser(req, res);

    res.status(201).json({ message: `Usuario ${newUser.firstName} registrado exitosamente` });
  } catch (error) {
    console.error("Error en el registro:", error);
  }
};

module.exports = postRegister;
