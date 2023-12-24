const { PAYPAL_URL, PAYPAL_CLIENT, PAYPAL_SECRET_KEY } = require("../../../config");
const axios = require("axios");

const captureOrder = async (req, res) => {
  const { token } = req.query;

  const response = await axios.post(
    `${PAYPAL_URL}/v2/checkout/orders/${token}/capture`,
    {},
    {
      auth: {
        username: PAYPAL_CLIENT,
        password: PAYPAL_SECRET_KEY,
      },
    }
  );

  console.log(response.data);

  return res.send("pagado!");
};

module.exports = captureOrder;
