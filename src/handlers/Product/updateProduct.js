const { Product, Image, Stock, Size, Color } = require("../../db");

const updateProduct = async (product) => {
  // console.log(product);
  try {
    await Product.update(product, {
      where: {
        id: product.id,
      },
    });

    productEdit = await Product.findByPk(product.id);

    if (product.images) {
      await productEdit.setImages([]);
      const createdImages = await Promise.all(product.images.map((img) => Image.create({ url: img })));
      await productEdit.addImages(createdImages);
    }

    if (product.color) {
      for (const colorName of product.color) {
        const [existingColor, colorCreated] = await Color.findOrCreate({
          where: { name: colorName.toUpperCase() },
        });
        await productEdit.addColor(existingColor);
      }
    }

    if (product.sizes) {
      for (const stockInfo of product.sizes) {
        const [size, created] = await Size.findOrCreate({
          where: { name: stockInfo.size },
        });

        const [stock, stockCreated] = await Stock.findOrCreate({
          where: {
            product_id: productEdit.id,
            size_id: size.id,
          },
          defaults: {
            quantity: stockInfo.stock,
          },
        });

        if (!stockCreated) {
          await stock.update({ quantity: stockInfo.stock });
        }
      }
    }
  } catch (error) {
    console.log(error);
  }

  // await productEdit.save();

  return "El Producto se actualizó correctamente";
};
module.exports = updateProduct;
