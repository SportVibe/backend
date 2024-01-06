const createUser = require("../../handlers/User/createUser");

const postRegister = async (req, res) => {
  try {
    const newUser = await createUser(req, res);

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: `Error en el registro:, ${error.message}` });
  }
};

module.exports = postRegister;
