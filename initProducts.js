const postProduct = require("./src/controllers/product/postProduct");
const { allProducts } = require("./src/utilities/initAllProducts");
const { Brand, Sport } = require("./src/db");
const allBrands = require("./src/utilities/brands");
const allSports = require("./src/utilities/sports");

async function initializeProducts() {
  try {
    const resultados = [];
    for (const productData of allProducts) {
      const req = { body: productData };
      const res = {
        status: (code) => ({
          json: (data) => {
            resultados.push({ code, data });
          },
        }),
      };

      await postProduct(req, res);
    }
    if (allBrands && allBrands.length) {
      await Brand.bulkCreate(allBrands);
    }
    if (allSports && allSports.length) {
      await Sport.bulkCreate(allSports);
    }
    console.log("Productos inicializados con éxito.");
  } catch (error) {
    console.error("Error al inicializar los productos o reviews", error.message);
  }
}

initializeProducts();
