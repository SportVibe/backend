const { Cart_Product, ShoppingCart, User, Product } = require("../../db");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");
const { log } = require("console");

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
  const emailContent = emailHTML.replace("{{userFirstName}}", newUser.user.firstName);

  transporter.sendMail({
    from: '"SportVibe" <sportvibe07@gmail.com>',
    to: newUser.user.email,
    subject: "Registro en SportVibe",
    text: `Bienvenido ${newUser.firstName}!!, desde SportVibe te agradecemos tu confianza`,
    html: emailContent,
  });
}
function sendWelcomeEmailExternal(newUser) {
  const emailTemplatePath = path.resolve(__dirname, "../welcome.hbs");
  const emailHTML = fs.readFileSync(emailTemplatePath, "utf8");
  const emailContent = emailHTML.replace("{{userFirstName}}", newUser.dataValues.firstName);
  transporter.sendMail({
    from: '"SportVibe" <sportvibe07@gmail.com>',
    to: newUser.dataValues.email,
    subject: "Registro en SportVibe",
    text: `Bienvenido ${newUser.dataValues.firstName}!!, desde SportVibe te agradecemos tu confianza`,
    html: emailContent,
  });
}

async function sendOrderConfirmationEmail(ShoppingCartId) {
  const carrito = await Cart_Product.findAll({
    where: { ShoppingCartId: ShoppingCartId },
  });
  const productos = carrito.map(({ ProductId, cantidad, detalle }) => ({ ProductId, cantidad, detalle }));

  const detalleProducto = [];
  for (let producto of productos) {
    const nombreProducto = await Product.findOne({
      where: { id: producto.ProductId },
    });
    detalleProducto.push({
      product: nombreProducto.dataValues.title,
      quantity: producto.cantidad,
      detalle: producto.detalle,
      price: nombreProducto.dataValues.price,
      total: nombreProducto.dataValues.price * producto.cantidad,
    });
  }
  console.log(detalleProducto);
  const totalDeCarrito = await ShoppingCart.findByPk(ShoppingCartId);

  const idUser = totalDeCarrito.dataValues.UserId;

  const user = await User.findByPk(idUser);

  const userEmail = user.dataValues.email;

  const userName = user.dataValues.firstName;

  const emailTemplatePath = path.resolve(__dirname, "../orders.hbs");
  const emailHTML = fs.readFileSync(emailTemplatePath, "utf8");
  const emailContent = {
    orderId: totalDeCarrito.dataValues.orderIdPaypal,
    Name: userName,
    total: totalDeCarrito.dataValues.total,
    products: detalleProducto,
  };

  /*  handlebars.registerHelper("multiply", function (a, b) {
    return a * b;
  });
 */
  const renderedContent = handlebars.compile(emailHTML)(emailContent);

  transporter.sendMail({
    from: '"SportVibe" <sportvibe07@gmail.com>',
    to: userEmail,
    subject: "Confirmación de compra en SportVibe",
    html: renderedContent,
  });
}

module.exports = {
  sendWelcomeEmail,
  sendOrderConfirmationEmail,
  sendWelcomeEmailExternal,
};
