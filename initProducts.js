const postProduct = require("./src/controllers/product/postProduct");
const { allProducts } = require("./src/utilities/initAllProducts");

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
        console.log("Productos inicializados con éxito.");
    } catch (error) {
        console.error("Error al inicializar los Productos:", error.message);
    }
}

initializeProducts();
