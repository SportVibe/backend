const { Router } = require("express");
const router = Router();
const postProduct = require("../controllers/Product/postProduct");
const postProductByPk = require("../controllers/Product/deleteProductByPk");
const { getProduct } = require("../controllers/Product/getProduct");

router.post("/product", postProduct);
router.get("/product", getProduct);

router.delete("/product/:productId", postProductByPk);

module.exports = router;
