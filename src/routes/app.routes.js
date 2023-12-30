const { Router } = require("express");
const router = Router();
const postProduct = require("../controllers/product/postProduct");
const getProductByPk = require("../controllers/product/getProductByPk");
const getProduct = require("../controllers/product/getProduct");
const getProductOrderby = require("../controllers/product/getProductOrderBy");
const deleteProductByPk = require("../controllers/product/deleteProductByPk");
const putProductbyID = require("../controllers/product/putProductbyID");
const searchProduct = require("../controllers/product/searchProduct");
const postRegister = require("../controllers/User/postRegister");

const postLogin = require("../controllers/User/postLogin");
const PostRegisterGoogle = require("../controllers/User/postRegisterGoogle");
const getUser = require("../controllers/User/getUser");
const getProductAdmin = require("../controllers/product/getProductAdmin");
const getAllUsers = require("../controllers/User/getAllUser");

const postShopping = require("../controllers/Carrito/PostShopping");
const putShopping = require("../controllers/Carrito/PutShopping");

const putUserById = require("../controllers/User/putUserById");

const getProperty = require("../controllers/product/getProperty");

const getDiscountProducts = require("../controllers/product/getDiscountProducts");
const getUserByEmail = require("../controllers/User/getUserByEmail");

const putPassword = require("../controllers/User/putPassword");
const captureOrder = require("../controllers/paypal/captureOrder");
const createOrder = require("../controllers/paypal/createOrder");
const cancelOrder = require("../controllers/paypal/cancelOrder");
const getBrands = require("../controllers/product/getBrands");
const getSports = require("../controllers/product/getSports");

const getStock = require("../controllers/stock/getStockByProductId");
const getAllPurchases = require("../controllers/User/getAllPurchases");

// Rutas de Productos
router.get("/product", getProduct);
router.get("/search/:product", searchProduct);
router.get("/detail/:id", getProductByPk);
router.get("/admin", getProductAdmin);
router.get("/property", getProperty);
router.get("/product/discount", getDiscountProducts);
router.get("/product/orderBy", getProductOrderby);
router.get("/product/brands", getBrands);
router.get("/product/sports", getSports);

router.post("/product", postProduct);

router.delete("/deleteProduct/:id", deleteProductByPk);

router.put("/product/:id", putProductbyID);

// Rutas de Usuarios
router.post("/userRegister", postRegister);
router.post("/google", PostRegisterGoogle);
router.post("/login", postLogin);

router.put("/user/:id", putUserById);
router.put("/user/:id/password", putPassword);

router.get("/user/:id", getUser);
router.get("/user", getUserByEmail);
router.get("/users", getAllUsers);
router.get("/purchases/:id", getAllPurchases);

// Rutas de Carrito
router.post("/shoppingCart", postShopping);
router.put("/shopping", putShopping);

// Rutas PayPal
router.post("/create-order", createOrder);
router.get("/capture-order", captureOrder);
router.get("/cancel-order", cancelOrder);

//Rutas Stock
router.get("/stock/:productId", getStock);

module.exports = router;
