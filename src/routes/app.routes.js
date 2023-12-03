const { Router } = require("express");
const router = Router();
const postProduct = require("../controllers/product/postProduct");
const postProductByPk = require("../controllers/deleteProductByPk");
const { getProduct } = require("../controllers/product/getProduct");

router.post("/product", postProduct);
router.get("/product", getProduct);

router.delete("/product/:productId", postProductByPk);

module.exports = router;
