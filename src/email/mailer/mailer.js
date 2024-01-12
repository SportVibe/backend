const {Cart_Product, ShoppingCart, User} = require("../../db")
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

async function sendOrderConfirmationEmail(ShoppingCartId) {
  const tukis = await Cart_Product.findAll({
    where: {
      ShoppingCartId: ShoppingCartId,
    },
  });

 
  const carrito = await ShoppingCart.findByPk(ShoppingCartId);
  
  const idUser = carrito.dataValues.UserId
  

  const user = await User.findByPk(idUser);

  const userName = user.dataValues.firstName

  const emailTemplatePath = path.resolve(__dirname, "../orders.hbs");
  const emailHTML = fs.readFileSync(emailTemplatePath, "utf8");
  const emailContent = {
    orderId: carrito.dataValues.orderIdPaypal,
    Name: userName,
    total: carrito.dataValues.total,
    products: tukis,
  };
  
 /*  handlebars.registerHelper("multiply", function (a, b) {
    return a * b;
  });
 */
  console.log(products);
  const renderedContent = handlebars.compile(emailHTML)(emailContent);

  transporter.sendMail({
    from: '"SportVibe" <sportvibe07@gmail.com>',
    to: "danijcdm.com@gmail.com",
    subject: "Confirmación de compra en SportVibe",
    html: renderedContent,
  });
}

module.exports = {
  sendWelcomeEmail,
  sendOrderConfirmationEmail,
};