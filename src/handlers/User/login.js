const bcrypt = require("bcrypt");
const { User } = require("../../db");

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      if (!user.active) {
        console.error("Cuenta bloqueada");
        return res.status(403).json({ error: "Cuenta bloqueada" });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        return res.status(200).json({
          message: `Login exitoso, bienvenido ${user.firstName}!`,
        });
      } else {
        console.error("Contraseña incorrecta");
        return res.status(401).json({ error: "Contraseña incorrecta" });
      }
    } else {
      console.error("Usuario no encontrado");
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = login;
