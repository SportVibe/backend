const { sendMailChangeOfPassword } = require("../../email/mailer/mailer");

const PostRecoverPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const response = await sendMailChangeOfPassword(email);

    res.status(200).json({
      data: response,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Hubo un error al verificar el email." });
  }
};

module.exports = PostRecoverPassword;
