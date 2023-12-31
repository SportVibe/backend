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

    const {
      title,
      description,
      brand,
      category,
      subCategory,
      sizes,
      color,
      gender,
      images,
      available,
    } = req.body;
    let price = Number(req.body.price);
    let discount = Number(req.body.discount);

    // El precio debe quedar registrado en la BDD con el descuento aplicado.
    if (discount > 0 && discount <= 100) { 
      price = parseInt(((price * (100 - discount)) / 100));
    }

    const response = await updateProduct({
      id,
      title,
      description,
      category,
      subCategory,
      brand,
      sizes,
      price,
      color,
      discount,
      images,
      gender,
      available,
    });

    return res.status(200).json({ message: response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Hubo un error al actualizar el producto." });
  }
};
module.exports = putProductbyID;
