const { Op } = require("sequelize");
const { Product, Size, Stock, Image, Color } = require("../../db");

const search = async (req, res) => {
  try {
    const { product } = req.params;
    const products = await Product.findAll({
      where: {
        title: {
          [Op.iLike]: `%${product}%`,
        },
      },
      include: [
        {
          model: Stock,
          include: [
            {
              model: Size,
              attributes: ["name"],
            },
          ],
        },
        { model: Image, attributes: ["url"], through: { attributes: [] } },
        { model: Color, attributes: ["name"], through: { attributes: [] } },
      ],
    });

    if (products.length === 0) {
      return res.status(404).json({ error: "No se encontraron productos" });
    }

    // Modificar la estructura de los productos
    const modifiedProducts = products.map((product) => {
      const modifiedProduct = { ...product.toJSON() };

      modifiedProduct.Images = modifiedProduct.Images.map((image) => image.url);

      // Verificar si existe la propiedad Color antes de mapear
      if (modifiedProduct.Colors) {
        modifiedProduct.Colors = modifiedProduct.Colors.map(({ name }) => name);
      }

      modifiedProduct.Stocks = modifiedProduct.Stocks.map((stock) => ({
        [stock.Size.name]: stock.quantity,
      }));

      delete modifiedProduct.Size;

      return modifiedProduct;
    });

    res.status(200).json({
      data: modifiedProducts,
    });
  } catch (error) {
    console.error("Error en la búsqueda de producto:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = search;
