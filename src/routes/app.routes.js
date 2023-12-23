const { Router } = require("express");
const router = Router();
const postProduct = require("../controllers/product/postProduct");
const getProductByPk = require("../controllers/product/getProductByPk");
const getProduct = require("../controllers/product/getProduct");
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

const putUserById = require("../controllers/User/putUserById");
const getPropery = require("../controllers/product/getProperty");
const getDiscountProducts = require("../controllers/product/getDiscountProducts");
const getUserByEmail = require("../controllers/User/getUserByEmail");


// Rutas de Productos
router.get("/product", getProduct);
router.get("/search/:product", searchProduct);
router.get("/detail/:id", getProductByPk);
router.get("/admin", getProductAdmin);
router.get("/property", getPropery);
router.get("/product/discount", getDiscountProducts);

router.post("/product", postProduct);

router.delete("/deleteProduct/:id", deleteProductByPk);

router.put("/product/:id", putProductbyID);

// Rutas de Usuarios
router.post("/userRegister", postRegister);
router.post("/google", PostRegisterGoogle);
router.post("/login", postLogin);

router.put("/user/:id", putUserById);

router.get("/user/:id", getUser);
router.get("/user", getUserByEmail);
router.get("/users", getAllUsers);

// Rutas de Carrito

router.post("/shoppingCart", postShopping);

module.exports = router;
