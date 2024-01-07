
const { Product, Stock, Image, Color, Size, Reviews } = require("../../db");
const { Op } = require("sequelize");

const getProductOrderby = async (req, res) => {
  try {
    const order = req.query.order ? req.query.order : "id";
    const type = req.query.type ? req.query.type : "desc";
    const limit = req.query.limit ? parseInt(req.query.limit) : 12;
    const products = await Product.findAll({
      include: [
        { model: Size, attributes: ["name"], through: { model: Stock } },
        { model: Image, attributes: ["url"], through: { attributes: [] } },
        { model: Color, attributes: ["name"], through: { attributes: [] } },
         {
          model: Reviews,
          attributes: ["id", "description", "score", "UserId"],
          where: { status: "accepted" },
          required: false,
        }
      ],
      order: [
        [`${order}`, `${type}`], // Ordena por la propiedad 'id' en orden descendente de creación en la base de datos (de mas nuevo a mas antiguo).
      ],
      limit: limit,
    });
    if (!products) {
      return res.status(404).json({ mensaje: "No se encontraron productos." });
    }

    const modifiedProducts = products.map((product) => {
      // Crear un nuevo objeto para cada producto
      const modifiedProduct = { ...product.toJSON() };
      // Modificar el array de imágenes

      modifiedProduct.Images = modifiedProduct.Images?.map((image) => image.url);
      // modifiedProduct.Sizes = modifiedProduct.Sizes.map((Size) => Size.name);

      // Verificar si existe la propiedad Color antes de mapear
      if (modifiedProduct.Colors) {
        modifiedProduct.Colors = modifiedProduct.Colors.map(({ name }) => name);
      }

      // Modificar el array de tallas y cantidades (stock)
      modifiedProduct.Stocks = modifiedProduct.Sizes.map((size) => ({
        [size.name]: size.Stock.quantity, // Acceder a la cantidad de stock desde la relación con Size
      }));

      // Eliminar la propiedad 'Size' si no es necesaria en este punto
      delete modifiedProduct.Size;


      return modifiedProduct;
    });

    return res.status(200).json(modifiedProducts);
  } catch (error) {
    console.error({ error: error.message });
    res.status(500).json({ error: error.message });
  }
};

module.exports = getProductOrderBy;
