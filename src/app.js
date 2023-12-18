const express = require("express");
const app = express();
const router = require("./routes/app.routes");
const morgan = require("morgan");
const cors = require("cors");

// Configuración de CORS más detallada
const corsOptions = {
  origin: "*", // Reemplaza con el dominio de tu cliente
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo salió mal!");
});

module.exports = app;
