const { Router } = require("express");
const router = Router();
const postProduct = require("../controllers/product/postProduct");
const getProductByPk = require("../controllers/product/getProductByPk");
const getProduct = require("../controllers/product/getProduct");
const deleteProductByPk = require("../controllers/product/deleteProductByPk");
const putProductbyID = require("../controllers/product/putProductbyID");
const searchProduct = require("../controllers/product/searchProduct");

router.post("/product", postProduct);

router.get("/product", getProduct);

router.get("/search/:product", searchProduct);

router.get("/detail/:id", getProductByPk);

router.delete("/deleteProduct/:id", deleteProductByPk);

router.put("/product/:id", putProductbyID);

module.exports = router;
