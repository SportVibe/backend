const PORT = process.env.PORT;
const { config } = require("dotenv");
config();
// const LOCALHOST = process.env.LOCALHOST;

// Host local
//  const HOST = "http://localhost:3005";
//  const HOST_FRONT = "http://localhost:5173";

// Host Railway
const HOST = "https://back-sportvibe.up.railway.app";
const HOST_FRONT = "https://frontend-black-eta-64.vercel.app/";

const URL_FONT = "";
const SECRETKEY = "sportvibe";

//PayPal
const PAYPAL_CLIENT = process.env.PAYPAL_CLIENT;
const PAYPAL_SECRET_KEY = process.env.PAYPAL_SECRET_KEY;
const PAYPAL_URL = process.env.PAYPAL_URL;

//DB
const DB_USER = process.env.DB_USER || "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD || "admin";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_NAME = process.env.DB_NAME || "ecommerce";
const DB_PORT = process.env.DB_PORT || 5432;
const DB_URL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
// const DB_URL = "postgresql://postgres:a-3E4B4-3F-eEgF3Bd-cbfeDf1AE526a@monorail.proxy.rlwy.net:52992/railway";

module.exports = {
  SECRETKEY,
  URL_FONT,
  PORT,
  DB_URL,
  PAYPAL_URL,
  PAYPAL_CLIENT,
  PAYPAL_SECRET_KEY,
  HOST,
  HOST_FRONT,
};
