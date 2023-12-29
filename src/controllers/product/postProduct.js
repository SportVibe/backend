const { Product, Brand, Sport } = require("../../db");
const createProduct = require("../../handlers/Product/createProduct");
const { allProducts } = require("../../utilities/initAllProducts");

const postProduct = async (req, res) => {
  try {
    const { title, description, brand, color, category, subCategory, sizes, gender, price, discount, images, sport } =
      req.body;
    const sport_test = req.body.sport_test ? req.body.sport_test.toUpperCase() : '';
    const brand_test = req.body.brand_test ? req.body.brand_test.toUpperCase() : '';
    if (title && description && brand && price && category && sizes.length && images.length) {
      const isThisAlreadyCreated = await Product.findOne({
        where: {
          title: title.toUpperCase(),
          description: description.toUpperCase(),
          brand: brand.toUpperCase(),
          category: category.toUpperCase(),
          subCategory: subCategory?.toUpperCase(),
          gender: gender.toUpperCase(),
          sport: sport.toUpperCase(),
          price,
          discount,
        },
      });

      // Si no se encuentra el producto en la base de datos, se crea la instancia.
      if (!isThisAlreadyCreated) {
        const findSport = await Sport.findOne({ where: { name: sport_test }, raw: true });
        const findBrand = await Brand.findOne({ where: { name: brand_test }, raw: true });
        const response = await createProduct({
          title,
          description,
          category,
          subCategory,
          brand,
          color,
          sizes,
          price,
          discount,
          images,
          gender,
          sport,
          sport_id: findSport ? findSport.id : null,
          brand_id: findBrand ? findBrand.id : null,
        });

        return res.status(201).json(response);
      } else throw Error("El producto ya existe");
    } else throw Error("Faltan datos");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// async function initializeProducts() {
//   try {
//     const resultados = [];
//     for (const productData of allProducts) {
//       const req = { body: productData };
//       const res = {
//         status: (code) => ({
//           json: (data) => {
//             resultados.push({ code, data });
//           },
//         }),
//       };

//       await postProduct(req, res);
//     }
//     console.log("Productos inicializados con éxito.");
//   } catch (error) {
//     console.error("Error al inicializar los Productos:", error.message);
//   }
// }

module.exports = postProduct;
// initializeProducts();
