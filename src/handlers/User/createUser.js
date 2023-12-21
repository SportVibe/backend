const { User } = require("../../db");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, address, zipCode, email, password, image, city, country, externalSignIn } = req.body;
    const rol = req.body.rol || "client";
    let userImage = '';
    if (image) {
      userImage = image;
    }
    if (externalSignIn) { // si el externalSignIn es true, significa que un usuario quiere registrarse con terceros, por ejemplo Google.
      const [newUser, created] = await User.findOrCreate({
        where: { email: email, externalSignIn: true },
        defaults: {
          firstName: firstName && firstName.toUpperCase(),
          email: email,
          externalSignIn: true,
          image: userImage,
        }
      });
      return newUser;
    }
    else {
      if (!firstName || !email || !password) {
        throw Error("Campos obligatorios incompletos")
      }
      else {
        const existingUser = await User.findOne({ // verificamos el email ya está registrado localmente (externalSignIn en false).
          where: { email: email, externalSignIn: false },
        });
        if (existingUser) {
          throw Error("El correo electrónico ya está registrado");
        }
        else {
          console.log('tukis');
          const hashedPassword = await bcrypt.hash(password, 10);
          console.log(hashedPassword);
          const newUser = await User.create({
            firstName: firstName && firstName.toUpperCase(),
            lastName: lastName && lastName.toUpperCase(),
            phoneNumber,
            address: address && address.toUpperCase(),
            city: city && city.toUpperCase(),
            country: country && country.toUpperCase(),
            zipCode,
            email,
            password: hashedPassword,
            rol,
            image: userImage,
            externalSignIn: externalSignIn,
          });
          return newUser;
        }
      }
    }
  } catch (error) {
    console.error("Error en el handler createUser:", error.message);
    throw Error(error.message);
  }
};

module.exports = createUser;
