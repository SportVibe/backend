const { Router } = require("express");
const router = Router();
const postProduct = require("../controllers/Product/postProduct");
const postProductByPk = require("../controllers/Product/deleteProductByPk");
const { getProduct } = require("../controllers/Product/getProduct");
const { deleteProductByPk } = require("../controllers/Product/deleteProductByPk");

router.post("/product", postProduct);
router.get("/product", getProduct);

router.delete("/deleteProduct/:id", deleteProductByPk);

module.exports = router;
