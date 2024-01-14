require("dotenv").config();

const { sequelize } = require("./src/db");
const app = require("./src/app");
const PORT = process.env.PORT || 3005;

sequelize

  .sync({ force: false })

  .then(() => {
    app.listen(PORT, () => {
      console.log(`server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error.message));

/* user paypal: sb-43wquc28899558@personal.example.com
pass paypal: os;c(4Z& */
