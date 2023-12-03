const { Size } = require("../db");

const allSizes = [
  { name: "XS" },
  { name: "S" },
  { name: "M" },
  { name: "L" },
  { name: "XL" },
  { name: "XXL" },
  { name: "38" },
  { name: "40" },
  { name: "42" },
  { name: "44" },
  { name: "46" },
  { name: "48" },
  { name: "50" },
  { name: "52" },
  { name: "54" },
  { name: "54" },
  { name: "56" },
  { name: "58" },
  { name: "60" },
];

const initializeSizes = async () => {
  try {
    // Ajusta esto según tus necesidades
    const sizesNames = allSizes.map((size) => size.name); // extraemos solo los nombres de cada talla.
    const areTheyAlreadyCreated = await Size.findAll({ where: { name: sizesNames } });
    if (!areTheyAlreadyCreated.length) {
      await Size.bulkCreate(allSizes);
    }
    console.log("Tallas inicializadas con éxito.");
  } catch (error) {
    console.error("Error al inicializar las tallas:", error.message);
  }
};

module.exports = initializeSizes;
