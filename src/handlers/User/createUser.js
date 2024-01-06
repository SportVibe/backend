const { User, ShoppingCart } = require("../../db");
const { serialize } = require("cookie");
const jwt = require("jsonwebtoken");
const { SECRETKEY } = require("../../../config");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phoneNumber,
      address,
      zipCode,
      email,
      password,
      image,
      city,
      country,
      externalSignIn,
    } = req.body;
    const rol = req.body.rol || "client";
    let userImage = "";
    if (image) {
      userImage = image;
    }
    if (externalSignIn) {
      // si el externalSignIn es true, significa que un usuario quiere registrarse con terceros, por ejemplo Google.
      let [newUser, created] = await User.findOrCreate({
        where: { email: email, externalSignIn: true },
        defaults: {
          firstName: firstName && firstName.toUpperCase(),
          email: email,
          externalSignIn: true,
          image: userImage,
        },
      });
      // Vemos si el usuario tiene carrito de compras.
      const userCart = await ShoppingCart.findOne({
        where: { UserId: newUser.id, available: true },
      });
      let cartToken = null;
      if (userCart) {
        cartToken = jwt.sign(
          {
            id: userCart.id,
            total: userCart.total,
            available: userCart.available,
            UserId: newUser.id,
            type: userCart.type
          },
          SECRETKEY,
          { expiresIn: "1h" }
        );
        const cartTokenCookieOptions = {
          httpOnly: true,
          maxAge: 3600000,
        };
        const cartTokenCookie = serialize("cartToken", cartToken, cartTokenCookieOptions);
        res.setHeader("Set-CartCookie", cartTokenCookie);
      }
      newUser = {
        message: `Login exitoso, bienvenido ${newUser.firstName}!`,
        token: null,
        cartToken,
        user: {
          id: newUser.id,
          cartId: userCart ? userCart.id : null,
          active: newUser.active,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          image: newUser.image,
          email: newUser.email,
          address: newUser.address,
          city: newUser.city,
          zipCode: newUser.zipCode,
          phoneNumber: newUser.phoneNumber,
          sendMailsActive: newUser.sendMailsActive,
          rol: newUser.rol,
          externalSignIn: newUser.externalSignIn
        }
      }
      return newUser;
    } else {
      if (!firstName || !email || !password) {
        throw Error("Campos obligatorios incompletos");
      } else {
        const existingUser = await User.findOne({
          // verificamos el email ya está registrado localmente (externalSignIn en false).
          where: { email: email, externalSignIn: false },
        });
        if (existingUser) {
          throw Error("El correo electrónico ya está registrado");
        } else {
          const hashedPassword = await bcrypt.hash(password, 10);
          let newUser = await User.create({
            firstName: firstName && firstName.toUpperCase(),
            lastName: lastName ? lastName.toUpperCase() : null,
            phoneNumber: phoneNumber ? phoneNumber : null,
            address: address ? address.toUpperCase() : null,
            city: city ? city.toUpperCase() : null,
            country: country ? country.toUpperCase() : null,
            zipCode: zipCode ? zipCode : null,
            email: email ? email : null,
            password: hashedPassword,
            rol,
            image: userImage,
            externalSignIn: externalSignIn,
          });
          newUser = {
            message: `Login exitoso, bienvenido ${newUser.firstName}!`,
            token: null,
            cartToken: null,
            user: {
              id: newUser.id,
              cartId: null,
              active: newUser.active,
              firstName: newUser.firstName,
              lastName: newUser.lastName,
              image: newUser.image,
              email: newUser.email,
              address: newUser.address,
              city: newUser.city,
              zipCode: newUser.zipCode,
              phoneNumber: newUser.phoneNumber,
              sendMailsActive: newUser.sendMailsActive,
              rol: newUser.rol,
              externalSignIn: newUser.externalSignIn
            }
          }
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
