const { Router } = require("express");
const router = Router();
const postProduct = require("../controllers/product/postProduct");

const { getProduct } = require("../controllers/Product/getProduct");

const { deleteProductByPk } = require("../controllers/Product/deleteProductByPk");
const { getProductByPk } = require("../controllers/Product/getProductByPk");

router.post("/product", postProduct);
router.get("/product", getProduct);
router.get("/detail/:id", getProductByPk);
router.put("/updateProduct/:id", put);
router.delete("/deleteProduct/:id", deleteProductByPk);

module.exports = router;
