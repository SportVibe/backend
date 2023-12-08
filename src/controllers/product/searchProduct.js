const search = require("../../handlers/Product/searchProduct");

const searchProduct = (req, res) => {
  search(req, res);
};

module.exports = searchProduct;
