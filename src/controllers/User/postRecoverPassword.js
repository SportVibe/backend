const { sendMailChangeOfPassword } = require("../../email/mailer/mailer");

const PostRecoverPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const responsee = await sendMailChangeOfPassword(email);

    res.status(200).json("mail enviado");
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Hubo un error al verificar el email." });
  }
};

module.exports = PostRecoverPassword;
