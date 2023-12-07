const { Product } = require("../../db");
const createProduct = require("../../handlers/Product/createProduct");

const postProduct = async (req, res) => {
  try {
    const { title, description, mark, category, subCategory, sizes, gender, price, discount, images } = req.body;

    if (title && description && mark && price && category && sizes.length && images.length) {
      const isThisAlreadyCreated = await Product.findOne({
        where: {
          title: title.toUpperCase(),
          description: description.toUpperCase(),
          mark: mark.toUpperCase(),
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
          mark,
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
