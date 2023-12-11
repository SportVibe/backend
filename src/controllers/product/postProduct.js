const { Product } = require("../../db");
const createProduct = require("../../handlers/product/createProduct");

const postProduct = async (req, res) => {
  try {
    const { title, description, brand, color, category, subCategory, sizes, gender, price, discount, images } =
      req.body;

    if (title && description && brand && price && category && sizes.length && images.length) {
      const isThisAlreadyCreated = await Product.findOne({
        where: {
          title: title.toUpperCase(),
          description: description.toUpperCase(),
          brand: brand.toUpperCase(),
          category: category.toUpperCase(),
          subCategory: subCategory?.toUpperCase(),
          gender: gender.toUpperCase(),
          price,
          discount,
        },
      });

      // Si no se encuentra el producto en la base de datos, se crea la instancia.
      if (!isThisAlreadyCreated) {
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
        });

        return res.status(201).json(response);
      } else throw Error("El producto ya existe");
    } else throw Error("Faltan datos");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postProduct;
