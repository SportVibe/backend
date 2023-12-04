const postProduct = require("../controllers/product/postProduct");

const allProducts = [
  {
    title: "CHOMBA DE ENTRENAMIENTO RIVER PLATE CONDIVO 22",
    description: "UNA CHOMBA CÓMODA PARA HINCHAS DE RIVER PLATE HECHA PARCIALMENTE CON MATERIAL RECICLADO",
    price: 34,
    discount: 0,
    // available: true,
    gender: "hombre",
    category: "camisetas",
    subCategory: "camisetas de futbol",
    stock: 10,
    sizes: [
      {
        size: "S",
        stock: 10,
      },
      {
        size: "M",
        stock: 15,
      },
      {
        size: "L",
        stock: 20,
      },
    ],
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/60657f9926824f42a4beafd2017beadd_9366/Chomba_de_Entrenamiento_River_Plate_Condivo_22_Verde_HC1039_01_laydown.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5dce803bbf624d429b1cafd2017bee03_9366/Chomba_de_Entrenamiento_River_Plate_Condivo_22_Verde_HC1039_02_laydown_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/64f394c056294f6e95a7afd2017bf08e_9366/Chomba_de_Entrenamiento_River_Plate_Condivo_22_Verde_HC1039_41_detail.jpg",
    ],
  },
  {
    title: "ZAPATILLAS ADIZERO PRIME X 2.0 STRUNG",
    description: "ZAPATILLAS DE COMPETICIÓN CARGADAS DE ELEMENTOS ORIENTADOS AL RENDIMIENTO.",
    price: 245,
    discount: 0,
    // available: true,
    gender: "hombre",
    category: "calzado",
    subCategory: "zapatillas",
    stock: 10,
    sizes: [
      {
        size: "S",
        stock: 10,
      },
      {
        size: "M",
        stock: 15,
      },
      {
        size: "L",
        stock: 20,
      },
    ],
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a02d4f03dc7945159ef2c04f49841aca_9366/Zapatillas_Adizero_Prime_X_2.0_STRUNG_Blanco_HP9709_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/99c4b1b2114c47d590403f69073cb7fc_9366/Zapatillas_Adizero_Prime_X_2.0_STRUNG_Blanco_HP9709_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a9058d5db6204eb5b7d6df819a1cdacf_9366/Zapatillas_Adizero_Prime_X_2.0_STRUNG_Blanco_HP9709_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7cd02696c3404d4bbe39bfdc296ef1b4_9366/Zapatillas_Adizero_Prime_X_2.0_STRUNG_Blanco_HP9709_HM3_hover.jpg",
    ],
  },
  {
    title: "MINI BOLSO AIRLINER",
    description: "UN MINI BOLSO AIRLINER DE LUJO QUE ES EL COMPAÑERO PERFECTO PARA EXPLORAR LA CIUDAD.",
    price: 31,
    discount: 0,
    // available: true,
    gender: "mujer",
    category: "accesorios",
    subCategory: "bolso",
    stock: 10,
    sizes: [
      {
        size: "S",
        stock: 10,
      },
      {
        size: "M",
        stock: 15,
      },
      {
        size: "L",
        stock: 20,
      },
    ],
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b2fb8a61000c4574a8d9aef50102aa75_9366/Mini_Bolso_Airliner_Blanco_IC2151_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/60f22e07e1eb43a19814aef50102b237_9366/Mini_Bolso_Airliner_Blanco_IC2151_02_standard.jpg",
    ],
  },
  {
    title: "ZAPATILLAS RUNNING SWITCH RUN",
    description: "ZAPATILLAS DE RUNNING LIVIANAS CON EXTERIOR DE MALLA Y AMARRE CON CORDONES.",
    price: 76,
    discount: 0,
    // available: true,
    gender: "mujer",
    category: "calzado",
    subCategory: "zapatillas",
    stock: 10,
    sizes: [
      {
        size: "S",
        stock: 10,
      },
      {
        size: "M",
        stock: 15,
      },
      {
        size: "L",
        stock: 20,
      },
    ],
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5c6d4962fd0948ef8dd6f7a9398000e0_9366/Zapatillas_Running_Switch_Run_Blanco_IF5734_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a7f3667002ce424b860d8be2d73b9292_9366/Zapatillas_Running_Switch_Run_Blanco_IF5734_HM3_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8e5613cb0e784bc38da8d493525d6fd0_9366/Zapatillas_Running_Switch_Run_Blanco_IF5734_HM4.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d77bf575dc314ddf9408ab3f1f8d4165_9366/Zapatillas_Running_Switch_Run_Blanco_IF5734_HM5.jpg",
    ],
  },
  {
    title: "Liverpool FC Strike",
    description: "Pelota de Futbol Unisex",
    price: 37,
    discount: 0,
    // available: true,
    gender: "unisex",
    category: "accesorios",
    subCategory: "pelotas",
    stock: 10,
    sizes: [
      {
        size: "S",
        stock: 10,
      },
      {
        size: "M",
        stock: 15,
      },
      {
        size: "L",
        stock: 20,
      },
    ],
    images: [
      "https://nikearprod.vtexassets.com/arquivos/ids/156493-1200-1200?v=638086292695870000&width=1200&height=1200&aspect=true",
      "https://nikearprod.vtexassets.com/arquivos/ids/160495-1200-1200?v=638086355359800000&width=1200&height=1200&aspect=true",
    ],
  },
  {
    title: "ZAPATILLAS RUNNING SWITCH RUN",
    description: "ZAPATILLAS DE RUNNING LIVIANAS CON EXTERIOR DE MALLA Y AMARRE CON CORDONES.",
    price: 76,
    discount: 0,
    // available: true,
    gender: "mujer",
    category: "calzado",
    subCategory: "zapatillas",
    stock: 10,
    sizes: [
      {
        size: "S",
        stock: 10,
      },
      {
        size: "M",
        stock: 15,
      },
      {
        size: "L",
        stock: 20,
      },
    ],
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5c6d4962fd0948ef8dd6f7a9398000e0_9366/Zapatillas_Running_Switch_Run_Blanco_IF5734_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a7f3667002ce424b860d8be2d73b9292_9366/Zapatillas_Running_Switch_Run_Blanco_IF5734_HM3_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8e5613cb0e784bc38da8d493525d6fd0_9366/Zapatillas_Running_Switch_Run_Blanco_IF5734_HM4.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d77bf575dc314ddf9408ab3f1f8d4165_9366/Zapatillas_Running_Switch_Run_Blanco_IF5734_HM5.jpg",
    ],
  },
  {
    title: "ZAPATILLAS RUNNING SWITCH RUN",
    description: "ZAPATILLAS DE RUNNING LIVIANAS CON EXTERIOR DE MALLA Y AMARRE CON CORDONES.",
    price: 76,
    discount: 0,
    // available: true,
    gender: "mujer",
    category: "calzado",
    subCategory: "zapatillas",
    stock: 10,
    sizes: [
      {
        size: "S",
        stock: 10,
      },
      {
        size: "M",
        stock: 15,
      },
      {
        size: "L",
        stock: 20,
      },
    ],
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5c6d4962fd0948ef8dd6f7a9398000e0_9366/Zapatillas_Running_Switch_Run_Blanco_IF5734_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a7f3667002ce424b860d8be2d73b9292_9366/Zapatillas_Running_Switch_Run_Blanco_IF5734_HM3_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8e5613cb0e784bc38da8d493525d6fd0_9366/Zapatillas_Running_Switch_Run_Blanco_IF5734_HM4.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d77bf575dc314ddf9408ab3f1f8d4165_9366/Zapatillas_Running_Switch_Run_Blanco_IF5734_HM5.jpg",
    ],
  },
  {
    title: "ZAPATILLAS RUNNING SWITCH RUN",
    description: "ZAPATILLAS DE RUNNING LIVIANAS CON EXTERIOR DE MALLA Y AMARRE CON CORDONES.",
    price: 76,
    discount: 0,
    // available: true,
    gender: "mujer",

    category: "calzado",
    subCategory: "zapatillas",
    stock: 10,
    sizes: [
      {
        size: "38",
        stock: 10,
      },
      {
        size: "37",
        stock: 15,
      },
      {
        size: "39",
        stock: 20,
      },
    ],
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5c6d4962fd0948ef8dd6f7a9398000e0_9366/Zapatillas_Running_Switch_Run_Blanco_IF5734_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a7f3667002ce424b860d8be2d73b9292_9366/Zapatillas_Running_Switch_Run_Blanco_IF5734_HM3_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8e5613cb0e784bc38da8d493525d6fd0_9366/Zapatillas_Running_Switch_Run_Blanco_IF5734_HM4.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d77bf575dc314ddf9408ab3f1f8d4165_9366/Zapatillas_Running_Switch_Run_Blanco_IF5734_HM5.jpg",
    ],
  },
];

async function initializeProducts() {
  try {
    const resultados = [];
    for (const productData of allProducts) {
      const req = { body: productData };
      const res = {
        status: (code) => ({
          json: (data) => {
            resultados.push({ code, data });
          },
        }),
      };
      // console.log(productData);

      await postProduct(req, res);
    }
    console.log("Productos inicializados con éxito.");
  } catch (error) {
    console.error("Error al inicializar los Productos:", error.message);
  }
}
module.exports = {
  initializeProducts,
};
