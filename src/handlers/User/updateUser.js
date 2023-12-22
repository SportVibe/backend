const { User } = require("../../db");
const bcrypt = require("bcrypt");

const updateUser = async (user) => {
  try {
    let hashedPassword = null;
    const external = await User.findByPk(user.id);
    if (!external.externalSignIn) {
      hashedPassword = await bcrypt.hash(user.password, 10);
    }

    const userUpdated = await User.update(
      { ...user, password: hashedPassword },
      {
        where: {
          id: user.id,
        },
      }
    );

    return "el Usuario se actualizo correctamente";
  } catch (error) {
    console.log(error);
  }
};
module.exports = updateUser;
