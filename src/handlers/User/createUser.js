const { User } = require("../../db");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, address, zipCode, email, password, image, city, country } = req.body;
    const existingUser = await User.findOne({
      where: { email: email },
    });

    if (existingUser) {
      return res.status(400).json({ error: "El correo electrónico ya está registrado" });
    }

    let userImage =
      "https://static.vecteezy.com/system/resources/previews/013/042/571/non_2x/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg";

    if (image) {
      userImage = image;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      address: address,
      city: city,
      country: country,
      zipCode: zipCode,
      email: email,
      password: hashedPassword,
      image: userImage,
    });
    return newUser;
  } catch (error) {
    console.error("Error en el handler createUser:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = createUser;
