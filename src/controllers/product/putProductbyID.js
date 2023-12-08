const { Product } = require("../../db");
const updateProduct = require("../../handlers/Product/updateProduct");

const putProductbyID = async (req, res) => {
  try {
    const { id } = req.params;
    // Se verifica que exista en la base de datos el Producto a editar.
    const existe = await Product.findByPk(id);
    // Se responde que no existe si no se encuentra el Producto.
    if (!existe) {
      return res.status(404).json({ message: "El producto no existe" });
    }

    const { title, description, mark, category, subCategory, sizes, gender, price, discount, images } = req.body;

    const response = await updateProduct({
      productId,
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

    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Hubo un error al actualizar el producto." });
  }
};
module.exports = putProductbyID;
