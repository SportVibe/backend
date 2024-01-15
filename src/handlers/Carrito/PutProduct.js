const { Product } = require("../../db");

function stringArray(detalle) {
  // Dividir el string en segmentos de "Talle: " y "Cantidad: "
  const segmentos = detalle.split("Talle: ");

  // Filtrar los segmentos que contienen información de tamaño y cantidad
  const segmentosValidos = segmentos.filter((segmento) => segmento.includes("Cantidad: "));

  // Crear un array de arrays con la información de tamaño y cantidad
  const infoTallayCantidad = segmentosValidos.map((segmento) => {
    const [talle, cantidad] = segmento.split(", Cantidad: ");
    return [talle, parseInt(cantidad)];
  });

  return infoTallayCantidad;
}

async function moldeRespuesta(productId, detalle) {
  try {
    const listProducts = [];

    const tallesYcantidades = stringArray(detalle);

    const dateProduct = await Product.findOne({
      where: {
        id: productId,
      },
    });

    if (!dateProduct) {
      return { message: "No se encontro un producto con ese id en nuestra base de datos" };
    } else {
      for (let producto of tallesYcantidades) {
        const productInfo = {
          id: dateProduct.dataValues.id,
          title: dateProduct.dataValues.title,
          price: dateProduct.dataValues.price,
          size: producto[0],
          quantity: producto[1],
        };

        listProducts.push(productInfo);
      }
      return listProducts;
    }
  } catch (error) {
    return { message: error };
  }
}
function verificarExistencia(talla, cantidad, tallasEnCarrito) {
  const existeTalla = tallasEnCarrito.find((item) => {
    return item[0] === talla;
  });

  if (existeTalla) {
    // Talla encontrada, actualiza la cantidad
    existeTalla[1] = cantidad;
  } else {
    // Talla no encontrada, agrega una nueva entrada
    tallasEnCarrito.push([talla, cantidad]);
  }
  return tallasEnCarrito;
}

module.exports = {
  moldeRespuesta,
  stringArray,
  verificarExistencia,
};
