const bcrypt = require("bcrypt");
const { User } = require("../../db");
const { serialize } = require("cookie");
const jwt = require("jsonwebtoken");
const { SECRETKEY } = require("../../../config");
const getUserByID = require("./getUserByID");

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email, externalSignIn: false } });
  if (user) {
    if (!user.active) {
      console.error("Cuenta bloqueada");
      return res.status(403).json({ error: "Cuenta bloqueada" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = jwt.sign(
        {
          userId: user.id,
          email: user.email,
          name: user.firstName,
          rol: user.rol,
        },
        SECRETKEY,
        { expiresIn: "1h" }
      );

      const cookieOptions = {
        httpOnly: true,
        maxAge: 3600000,
      };
      const tokenCookie = serialize("token", token, cookieOptions);

      res.setHeader("Set-Cookie", tokenCookie);

      return res.status(200).json({
        message: `Login exitoso, bienvenido ${user.firstName}!`,
        token,
        user: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          image: user.image,
          email: user.email,
          rol: user.rol,
          externalSignIn: user.externalSignIn
        }
      });
    } else {
      console.error("Contraseña incorrecta");
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }
  } else {
    console.error("Usuario no encontrado");
    return res.status(404).json({ error: "Usuario no encontrado" });
  }
};

module.exports = login;
