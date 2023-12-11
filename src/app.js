const express = require("express");
const app = express();
const router = require("./routes/app.routes");
const morgan = require("morgan");
const cors = require("cors");

app.use(morgan("dev"));
app.use(cors()); // Configuración CORS simplificada
app.use(express.json());
app.use(router);

module.exports = app;
