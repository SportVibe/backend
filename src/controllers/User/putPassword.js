const { User } = require("../../db");
const bcrypt = require("bcrypt");
const updatePassword = require("../../handlers/User/updatePassword");

const putPassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { newPassword, currentPassword } = req.body;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "El usuario no existe" });
    }
    if (user.externalSignIn) {
      return res.status(404).json({ message: "El usuario no puede modificar su password" });
    }

    const passwordMatch = await bcrypt.compare(currentPassword, user.password);
    if (!passwordMatch) {
      return res.status(404).json({ message: "El password actual no coincide" });
    }
    const response = await updatePassword(id, newPassword);

    res.status(200).json({ message: response });
  } catch (error) {
    console.log({ error });
  }
};

module.exports = putPassword;
