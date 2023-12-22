const { User } = require("../../db");

const updateUser = async (user) => {
  try {
    const userUpdated = await User.update(
      { ...user },
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
