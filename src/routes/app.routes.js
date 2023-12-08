const { Router } = require("express");
const router = Router();

const postProduct = require("../controllers/Product/postProduct");
const getProductByPk = require("../controllers/Product/deleteProductByPk");
const getProduct = require("../controllers/Product/getProduct");
const searchProduct = require("../controllers/product/searchProduct");

const deleteProductByPk = require("../controllers/Product/deleteProductByPk");

router.post("/product", postProduct);
router.get("/product", getProduct);
router.get("/detail/:id", getProductByPk);
router.get("/search/:product", searchProduct);

router.delete("/deleteProduct/:id", deleteProductByPk);

module.exports = router;
