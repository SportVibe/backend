const { Router } = require("express");
const router = Router();
const postProduct = require("../controllers/product/postProduct");
const postProductByPk = require("../controllers/Product/deleteProductByPk");
const { getProduct } = require("../controllers/Product/getProduct");
const { getProductByPk } = require("../controllers/product/getProductByPk");

router.post("/product", postProduct);
router.get("/product", getProduct);
router.get("/detail/:id", getProductByPk);

router.delete("/product/:productId", postProductByPk);

module.exports = router;
