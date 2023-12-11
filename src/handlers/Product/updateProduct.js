const { Product, Image, Stock, Size } = require("../../db");

const updateProduct = async ({
  id,
  title,
  description,
  category,
  subCategory,
  brand,
  sizes,
  price,
  discount,
  images,
  gender,
  color,
  available,
}) => {
  try {
    const productEdit = await Product.findByPk(id);

    productEdit.title = title;
    productEdit.description = description;
    productEdit.category = category;
    productEdit.subCategory = subCategory;
    productEdit.brand = brand;
    productEdit.price = price;
    productEdit.discount = discount;
    productEdit.available = available;
    productEdit.gender = gender;

    await productEdit.save();
    return "El Producto se actualizo correctamente";
  } catch (error) {
    return error;
  }
};
module.exports = updateProduct;
