const { Product, Image, Stock, Size, Color } = require("../../db");

const findProductByPk = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByPk(id, {
    include: [
      {
        model: Stock,
        include: [{ model: Size, attributes: ["name"] }],
      },
      { model: Image, attributes: ["url"], through: { attributes: [] } },
      { model: Color, attributes: ["name"], through: { attributes: [] } },
    ],
  });

  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  // Crear un nuevo objeto para el producto
  const modifiedProduct = { ...product.toJSON() };

  // Modificar el array de imágenes
  modifiedProduct.Images = modifiedProduct.Images.map((image) => image.url);

  // Verificar si existe la propiedad Color antes de mapear
  if (modifiedProduct.Colors) {
    modifiedProduct.Colors = modifiedProduct.Colors.map(({ name }) => name);
  }

  // Modificar el array de tallas y cantidades (stock)
  modifiedProduct.Stocks = modifiedProduct.Stocks.map((stock) => ({
    [stock.Size.name]: stock.quantity,
  }));

  // Eliminar la propiedad 'Size' si no es necesaria en este punto
  delete modifiedProduct.Size;

  return res.status(200).json({
    data: modifiedProduct,
  });
};

module.exports = { findProductByPk };
