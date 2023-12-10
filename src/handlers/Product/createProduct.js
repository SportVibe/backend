const { Product, Image, Size, Stock, Color } = require("../../db");

const createProduct = async ({
  title,
  description,
  category,
  brand,
  color,
  subCategory,
  sizes,
  gender,
  price,
  discount,
  images,
}) => {
  try {
    if (title && description && price && category && sizes.length && images.length) {
      const currentProduct = await Product.create({
        title: title.toUpperCase(),
        description: description.toUpperCase(),
        brand: brand.toUpperCase(),
        category: category.toUpperCase(),
        subCategory: subCategory?.toUpperCase(),
        gender: gender.toUpperCase(),
        price,
        discount,
      });

      // Crear tallas y stocks asociados
      for (const sizeInfo of sizes) {
        const [size, created] = await Size.findOrCreate({
          where: { name: sizeInfo.size },
        });

        await Stock.create({
          product_id: currentProduct.id,
          size_id: size.id,
          quantity: sizeInfo.stock,
        });
      }

      // Procesar los colores
      for (const colorName of color) {
        // Buscar si el color ya existe en la tabla Color
        const [existingColor, colorCreated] = await Color.findOrCreate({
          where: { name: colorName.toUpperCase() },
        });

        // Asociar el color al producto
        await currentProduct.addColor(existingColor);
      }

      // Luego buscamos la tabla Image, solo las imágenes que mandó el front en el array "images", y vemos si ya existen.
      const isImagesCreated = await Image.findAll({ where: { url: images } });

      if (isImagesCreated.length === images.length) {
        // Si todas las imágenes ya existen, asociarlas al producto.
        await currentProduct.addImages(isImagesCreated);
        return "Producto creado e imágenes asociadas con éxito";
      } else {
        // Si al menos una imagen no existe, crear las imágenes que faltan.
        const newImages = images.filter((img) => !isImagesCreated.some((existingImage) => existingImage.url === img));
        const imagesPromises = newImages.map((img) => Image.create({ url: img }));
        const createdImages = await Promise.all(imagesPromises);
        await currentProduct.addImages(createdImages);

        return "Producto creado con sus nuevas imágenes";
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createProduct;
