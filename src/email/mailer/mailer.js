const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,

 // aca deberíamos crear variables de entorno en Railway
  auth: {
    user: "sportvibe07@gmail.com",
    pass: "xavv zswa wcyr dsye",
    // ===================================
  },
});

function sendWelcomeEmail(newUser) {
  const emailTemplatePath = path.resolve(__dirname, "../welcome.hbs");
  const emailHTML = fs.readFileSync(emailTemplatePath, "utf8");
  const emailContent = emailHTML.replace(
    "{{userFirstName}}",
    newUser.user.firstName
  );
  
  transporter.sendMail({
    from: '"SportVibe" <sportvibe07@gmail.com>',
    to: newUser.user.email,
    subject: "Registro en SportVibe",
    text: `Bienvenido ${newUser.firstName}!!, desde SportVibe te agradecemos tu confianza`,
    html: emailContent,
  });
}

function sendOrderConfirmationEmail(order, user, cart) {
  const emailTemplatePath = path.resolve(__dirname, "../orders.hbs");
  const emailHTML = fs.readFileSync(emailTemplatePath, "utf8");
  const emailContent = {
    orderId: order.id,
    Name: user.firstName,
    total: order.total,
    products: cart,
  };

  handlebars.registerHelper("multiply", function (a, b) {
    return a * b;
  });

  const renderedContent = handlebars.compile(emailHTML)(emailContent);

  transporter.sendMail({
    from: '"SportVibe" <sportvibe07@gmail.com>',
    to: user.email,
    subject: "Confirmación de compra en SportVibe",
    html: renderedContent,
  });
}

module.exports = {
  sendWelcomeEmail,
  sendOrderConfirmationEmail,
};