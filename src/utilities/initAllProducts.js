const postProduct = require("../controllers/Product/postProduct");

const allProducts = [
  {
    title: "CHOMBA DE ENTRENAMIENTO RIVER PLATE CONDIVO 22",
    description: "UNA CHOMBA CÓMODA PARA HINCHAS DE RIVER PLATE HECHA PARCIALMENTE CON MATERIAL RECICLADO",
    price: 34,
    discount: 0,
    mark: "ADIDAS",
    gender: "hombre",
    category: "camisetas",
    subCategory: "camisetas de futbol",
    color: ["ROJO", "BLANCO"],
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
    title: "CAMISETA TITULAR RIVER PLATE 23/24",
    description: "LA NUEVA CAMISETA DE RIVER PLATE MANTIENE EL CLÁSICO PALADAR DEL HINCHA RIVERPLATENSE.",
    price: 52,
    discount: 0,
    mark: "ADIDAS",
    gender: "hombre",
    category: "camisetas",
    subCategory: "camisetas de futbol",
    color: ["ROJO", "BLANCO"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/401778e50ef4449d9656d40e9346b8af_9366/Camiseta_Titular_River_Plate_23-24_Blanco_HT3679_01_laydown.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2a415812f2fc4f75baab1b63640e0e55_9366/Camiseta_Titular_River_Plate_23-24_Blanco_HT3679_02_laydown_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b9a36927213c4739b1b61cabf35e0024_9366/Camiseta_Titular_River_Plate_23-24_Blanco_HT3679_41_detail.jpg",
    ],
  },
  {
    title: "CAMISETA TITULAR OFICIAL ARGENTINA 3 ESTRELLAS 2022",
    description: "CELEBRÁ LA VICTORIA CON ESTA CAMISETA HECHA CON UNA MEZCLA DE MATERIALES RECICLADOS Y RENOVABLES.",
    price: 89,
    discount: 0,
    mark: "ADIDAS",
    gender: "hombre",
    category: "camisetas",
    subCategory: "camisetas de futbol",
    color: ["CELESTE", "BLANCO"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e71e00b27c824e2eab737a04afd5acaf_9366/Camiseta_Titular_Oficial_Argentina_3_estrellas_2022_Blanco_GC4397_01_laydown.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/08897180a1a7405b9cb62d26ebe9b2a5_9366/Camiseta_Titular_Oficial_Argentina_3_estrellas_2022_Blanco_GC4397_02_laydown_hover.jpg",
    ],
  },
  {
    title: "ZAPATILLAS ADIZERO PRIME X 2.0 STRUNG",
    description: "ZAPATILLAS DE COMPETICIÓN CARGADAS DE ELEMENTOS ORIENTADOS AL RENDIMIENTO.",
    price: 245,
    discount: 0,
    mark: "ADIDAS",
    gender: "hombre",
    category: "calzado",
    subCategory: "zapatillas",
    color: ["BLANCO"],
    sizes: [
      {
        size: "39",
        stock: 10,
      },
      {
        size: "40",
        stock: 15,
      },
      {
        size: "41",
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
    mark: "ADIDAS",
    gender: "mujer",
    category: "accesorios",
    subCategory: "bolso",
    color: ["GRIS"],
    sizes: [
      {
        size: "U",
        stock: 10,
      },
    ],
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b2fb8a61000c4574a8d9aef50102aa75_9366/Mini_Bolso_Airliner_Blanco_IC2151_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/60f22e07e1eb43a19814aef50102b237_9366/Mini_Bolso_Airliner_Blanco_IC2151_02_standard.jpg",
    ],
  },

  {
    title: "Liverpool FC Strike",
    description: "Pelota de Futbol Unisex",
    price: 37,
    discount: 0,
    mark: "ADIDAS",
    gender: "unisex",
    category: "accesorios",
    subCategory: "pelotas",
    color: ["ROJO"],
    sizes: [
      {
        size: "U",
        stock: 10,
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
    mark: "ADIDAS",
    gender: "mujer",
    category: "calzado",
    subCategory: "zapatillas",
    color: ["VERDE", "BLANCO"],
    sizes: [
      {
        size: "38",
        stock: 10,
      },
      {
        size: "39",
        stock: 15,
      },
      {
        size: "40",
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
    title: "REMERA CORTA TIRO COLORBLOCK",
    description: "UNA REMERA CORTA HECHA CON MATERIALES RECICLADOS.",
    price: "46",
    discount: 0,
    mark: "ADIDAS",
    gender: "MUJER",
    category: "ROPA",
    subCategory: "REMERAS",
    color: ["VERDE", "BLANCO"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2ebf8f673ccf498cb3bb6e580c430d90_9366/Remera_Corta_Tiro_Colorblock_Verde_IM4997_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/43535fb4394e4eb2acb3222c4ed4c913_9366/Remera_Corta_Tiro_Colorblock_Verde_IM4997_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f4ddf17d9e7d44caadffa53e6cad621c_9366/Remera_Corta_Tiro_Colorblock_Verde_IM4997_25_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1609bf733f404b7eb45fd9c4e14763c8_9366/Remera_Corta_Tiro_Colorblock_Verde_IM4997_01_laydown.jpg",
    ],
  },
  {
    title: "CAMPERA TIRO TEJIDA",
    description: "UNA CAMPERA EN COLORES VIVOS HECHA DE MATERIALES RECICLADOS.",
    price: "71",
    discount: 0,
    mark: "ADIDAS",
    gender: "MUJER",
    category: "ROPA",
    subCategory: "CAMPERAS",
    color: ["azul", "celeste", "lila"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a08c4ecc88f641b19042af3200d27486_9366/Campera_Tiro_Tejida_Azul_HS7482_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/24deffeb12774164a578af3200d27d7a_9366/Campera_Tiro_Tejida_Azul_HS7482_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3387dd41da744197a6c3af3200d28703_9366/Campera_Tiro_Tejida_Azul_HS7482_25_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b709e0d58b2b49c499a7af3200d2af0b_9366/Campera_Tiro_Tejida_Azul_HS7482_01_laydown.jpg",
    ],
  },
  {
    title: "TRAJE DE NATACIÓN ADICOLOR 3 TIRAS",
    description: "UN TRAJE DE NATACIÓN CLÁSICO HECHO PARCIALMENTE CON MATERIALES RECICLADOS.",
    price: "67",
    discount: 0,
    mark: "ADIDAS",
    gender: "MUJER",
    category: "NATACIÓN",
    subCategory: "TRAJES",
    color: ["NEGRO"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/014a296466d14f729b3caefc00ba09f3_9366/Traje_de_Natacion_Adicolor_3_Tiras_Negro_HS5391_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/63b38c61dda44cc782bcaefc00ba1264_9366/Traje_de_Natacion_Adicolor_3_Tiras_Negro_HS5391_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/949bb1b952ea4d84b2f8aefc00ba1a05_9366/Traje_de_Natacion_Adicolor_3_Tiras_Negro_HS5391_25_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a0826699e3d240e48a97aefc00ba3c02_9366/Traje_de_Natacion_Adicolor_3_Tiras_Negro_HS5391_01_laydown.jpg",
    ],
  },
  {
    title: "TRAJE DE NATACIÓN POSITIVISEA 3 TIRAS",
    description: "UN TRAJE DE NATACIÓN DEPORTIVO HECHO PARCIALMENTE CON MATERIALES RECICLADOS",
    price: "35",
    discount: 0,
    mark: "ADIDAS",
    gender: "MUJER",
    category: "NATACIÓN",
    subCategory: "TRAJES",
    color: ["BLANCO", "AMARILLO", "ROSA"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ad9baae60d2e4629b75eae3f014b21c5_9366/Traje_de_Natacion_Positivisea_3_Tiras_Verde_HI1115_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3612074c4b0a4da3b4faae3f014b2c80_9366/Traje_de_Natacion_Positivisea_3_Tiras_Verde_HI1115_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/47250509d99040c5b793ae3f014b3701_9366/Traje_de_Natacion_Positivisea_3_Tiras_Verde_HI1115_25_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6e06a28ac1e947f299cbae3f014b64a2_9366/Traje_de_Natacion_Positivisea_3_Tiras_Verde_HI1115_01_laydown.jpg",
    ],
  },
  {
    title: "CALZAS CORTAS ADIDAS X FARM RIO TIRO ALTO",
    description: "CALZAS CORTAS DE ENTRENAMIENTO ADIDAS X FARM RIO HECHAS PARCIALMENTE CON MATERIALES RECICLADOS",
    price: "45",
    discount: 0,
    mark: "ADIDAS",
    gender: "MUJER",
    category: "ROPA",
    subCategory: "CALZAS",
    color: "",
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/26305c2a8ee44ec88a68af460124e5c6_9366/Calzas_Cortas_adidas_x_FARM_Rio_Tiro_Alto_Negro_HS1185_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c522ec46e2564402bf96af460124edc6_9366/Calzas_Cortas_adidas_x_FARM_Rio_Tiro_Alto_Negro_HS1185_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6e37529246ae45f28f5aaf460124f687_9366/Calzas_Cortas_adidas_x_FARM_Rio_Tiro_Alto_Negro_HS1185_25_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/08ce3fb099b54a939b4faf4800a6a226_9366/Calzas_Cortas_adidas_x_FARM_Rio_Tiro_Alto_Negro_HS1185_01_laydown.jpg",
    ],
  },
  {
    title: "CONJUNTO TEAMSPORT",
    description: "UN CONJUNTO MODERNO HECHO DE MATERIALES RECICLADOS.",
    price: "85",
    discount: 0,
    mark: "ADIDAS",
    gender: "MUJER",
    category: "ROPA",
    subCategory: "CONJUNTOS",
    color: ["NEGRO"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/16817833851e4266bb91af02010ee47e_9366/Conjunto_Teamsport_Negro_IC0390_21_model.jpg",
      "https://assets.adidas.com/videos/ar_1,w_480,c_fill,q_auto,f_auto/4c63911698004f74a7beaf0700b62bc5_d98c/Conjunto_Teamsport_Negro_IC0390_video.mp4",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/dc16a31bfaff48f18d9daf02010eeeaa_9366/Conjunto_Teamsport_Negro_IC0390_22_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/072bcdced719465ab6dfaf02010ef698_9366/Conjunto_Teamsport_Negro_IC0390_23_hover_model.jpg",
    ],
  },
  {
    title: "PANTALÓN DEPORTIVO ADIDAS X FARM RIO",
    description: "UN PANTALÓN DEPORTIVO LLENO DE ESTILO VERANIEGO HECHO CON MATERIALES RECICLADOS.",
    price: "73",
    discount: 0,
    mark: "ADIDAS",
    gender: "MUJER",
    category: "ROPA",
    subCategory: "PANTALONES",
    color: ["MULTICOLOR"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/039a244c406a4ab8843eaf5c00ecb434_9366/Pantalon_Deportivo_adidas_x_FARM_Rio_Negro_HS1181_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9fc73aeddf8e428db3faaf5c00ecbb0d_9366/Pantalon_Deportivo_adidas_x_FARM_Rio_Negro_HS1181_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4b85266192014b348963af5c00ecc4cf_9366/Pantalon_Deportivo_adidas_x_FARM_Rio_Negro_HS1181_25_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5dcdf374b8c84c65ace4af5c00ecf0fc_9366/Pantalon_Deportivo_adidas_x_FARM_Rio_Negro_HS1181_01_laydown.jpg",
    ],
  },
  {
    title: "ROMPEVIENTOS DE RUNNING CON CAPUCHA OWN THE RUN",
    description: "UN ROMPEVIENTOS DE RUNNING PLEGABLE PARA TUS SALIDAS A CORRER DIARIAS.",
    price: "70",
    discount: 0,
    mark: "ADIDAS",
    gender: "MUJER",
    category: "ROPA",
    subCategory: "CAMPERAS",
    color: ["NEGRO"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/12fcf0acd0e84711b5a3094edde6b02b_9366/Rompevientos_de_Running_con_Capucha_Own_the_Run_Negro_H59271_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/604ddca83d1543dcbe361627698a3567_9366/Rompevientos_de_Running_con_Capucha_Own_the_Run_Negro_H59271_HM3_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bbb695e1d31a4693a152b8602a15f14a_9366/Rompevientos_de_Running_con_Capucha_Own_the_Run_Negro_H59271_HM4.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/aa939267005648a59a5dbcb72aa85822_9366/Rompevientos_de_Running_con_Capucha_Own_the_Run_Negro_H59271_HM5.jpg",
    ],
  },
  {
    title: "CAMISETA TITULAR RIVER PLATE 23/24 (MUJER)",
    description: "LA NUEVA CAMISETA DE RIVER PLATE MANTIENE EL CLÁSICO PALADAR DEL HINCHA RIVERPLATENSE.",
    price: "46",
    discount: 0,
    mark: "ADIDAS",
    gender: "MUJER",
    category: "ROPA",
    subCategory: "CAMISETAS DE FUTBOL",
    color: ["BLANCO"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e4807116506d42bfaafa1001aa5da1d0_9366/Camiseta_Titular_River_Plate_23-24_Mujer_Blanco_HY3209_01_laydown.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cf72a7b9ba3546dfa4a8b516868c8422_9366/Camiseta_Titular_River_Plate_23-24_Mujer_Blanco_HY3209_02_laydown_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7b79b21cb02843d5bc202517d67ccb72_9366/Camiseta_Titular_River_Plate_23-24_Mujer_Blanco_HY3209_41_detail.jpg",
    ],
  },
  {
    title: "POLLERA ADIDAS X FARM RIO",
    description: "UNA POLLERA SUAVE CON UNA ONDA TROPICAL HECHA CON MATERIALES RECICLADOS.",
    price: "51",
    discount: 0,
    mark: "ADIDAS",
    gender: "MUJER",
    category: "ROPA",
    subCategory: "POLLERAS",
    color: ["MULTICOLOR"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7551fe7ba0c34fce997daf0f00c3bdf9_9366/Pollera_adidas_x_FARM_Rio_Dorado_HS1184_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/205965a80b89468e95c4af0f00c3c5a4_9366/Pollera_adidas_x_FARM_Rio_Dorado_HS1184_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9f4988c6ed1c4e46937baf0f00c3ce79_9366/Pollera_adidas_x_FARM_Rio_Dorado_HS1184_25_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c95e03d57a434f0c8e16af0900b70807_9366/Pollera_adidas_x_FARM_Rio_Dorado_HS1184_01_laydown.jpg",
    ],
  },
  {
    title: "SHORTS ADICOLOR ESSENTIALS FELPA FRANCESA",
    description: "SHORTS SUAVES Y CÓMODOS CON UN ESTILO DISTINTIVO",
    price: "35",
    discount: 0,
    mark: "ADIDAS",
    gender: "MUJER",
    category: "ROPA",
    subCategory: "SHORTS",
    color: ["NEGRO"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/052d7f6a2a244e53b40caefc00e34304_9366/Shorts_Adicolor_Essentials_Felpa_Francesa_Negro_IA6451_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e9f7670eff544de28a34aefc00e34a54_9366/Shorts_Adicolor_Essentials_Felpa_Francesa_Negro_IA6451_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4760d43514164bb38e74aefc00e376fc_9366/Shorts_Adicolor_Essentials_Felpa_Francesa_Negro_IA6451_01_laydown.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/77f30ff015aa459f9d2caefc00e351ad_9366/Shorts_Adicolor_Essentials_Felpa_Francesa_Negro_IA6451_25_outfit.jpg",
    ],
  },
  {
    title: "CONJUNTO ESSENTIALS 3 TIRAS",
    description: "UN CONJUNTO DE DOS PIEZAS CON MUCHOS BOLSILLOS",
    price: "73",
    discount: 0,
    mark: "ADIDAS",
    gender: "MUJER",
    category: "ROPA",
    subCategory: "CONJUNTOS",
    color: ["ROJO"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6cbb6f38a43b4d8d961baef501126042_9366/Conjunto_Essentials_3_Tiras_Azul_HR4911_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a58058f545c54c7c92e5aef501126815_9366/Conjunto_Essentials_3_Tiras_Azul_HR4911_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c56c1ec59f5e4da8b06baef5011270a0_9366/Conjunto_Essentials_3_Tiras_Azul_HR4911_25_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ba53488fce2443469e45aef50112983a_9366/Conjunto_Essentials_3_Tiras_Azul_HR4911_01_laydown.jpg",
    ],
  },
  {
    title: "CONJUNTO LINEAR",
    description: "UN CONJUNTO CÓMODO HECHA CON MATERIALES RECICLADOS.",
    price: "90",
    discount: 0,
    mark: "ADIDAS",
    gender: "MUJER",
    category: "ROPA",
    subCategory: "CONJUNTOS",
    color: ["NEGRO"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/07653e65e40c49f2a26aaf9d00f1038f_9366/Conjunto_Linear_Negro_IC3428_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3f2abbcabf5548f3a105af9d00f10ac4_9366/Conjunto_Linear_Negro_IC3428_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6d167d130e93479ba9deaf9d00f11297_9366/Conjunto_Linear_Negro_IC3428_25_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/730b9a0be8f249ef906faf9b00fa4495_9366/Conjunto_Linear_Negro_IC3428_01_laydown.jpg",
    ],
  },
  {
    title: "CALZAS CORTAS DE ENTRENAMIENTO TAILORED HIIT 45 SEGUNDOS TIRO ALTO",
    description: "CALZAS ADIDAS PARA ENTRENAMIENTOS INTENSOS, HECHAS PARCIALMENTE CON MATERIALES RECICLADOS.",
    price: "75",
    discount: 0,
    mark: "ADIDAS",
    gender: "MUJER",
    category: "ROPA",
    subCategory: "CALZAS",
    color: ["VERDE"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/801637787a854fa09ef2ae9700cb1d14_9366/Calzas_Cortas_de_Entrenamiento_Tailored_HIIT_45_segundos_Tiro_Alto_Verde_HN9456_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c29871e79fda4865a563ae9700cb2663_9366/Calzas_Cortas_de_Entrenamiento_Tailored_HIIT_45_segundos_Tiro_Alto_Verde_HN9456_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/21292ce5a30e48988ef9ae9700cb2e39_9366/Calzas_Cortas_de_Entrenamiento_Tailored_HIIT_45_segundos_Tiro_Alto_Verde_HN9456_25_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0c1c7b40a118436db43bae9800b2e28b_9366/Calzas_Cortas_de_Entrenamiento_Tailored_HIIT_45_segundos_Tiro_Alto_Verde_HN9456_01_laydown.jpg",
    ],
  },
  {
    title: "CALZAS LARGAS FAST IMPACT X-CITY REFLECT AT NIGHT",
    description: "La colección X-City Reflect At Night se ha diseñado para tu próxima carrera.",
    price: "110",
    discount: 0,
    mark: "ADIDAS",
    gender: "MUJER",
    category: "ROPA",
    subCategory: "CALZAS",
    color: ["NEGRO"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/130549ee9918469facf4af1100100867_faec/Calzas_largas_Fast_Impact_X-City_Reflect_At_Night_Negro_HS5442_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5dc4e337415a4f24a517af9b01045a2c_9366/Calzas_largas_Fast_Impact_X-City_Reflect_At_Night_Negro_HS5442_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ee8520b0d9e84ea9be95af100172ffc9_faec/Calzas_largas_Fast_Impact_X-City_Reflect_At_Night_Negro_HS5442_HM3_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/767c9182fdf240f69fa9af10016e0d93_faec/Calzas_largas_Fast_Impact_X-City_Reflect_At_Night_Negro_HS5442_HM4.jpg",
    ],
  },
  {
    title: "ZAPATILLAS ADIDAS GRAND COURT CLOUDFOAM COMFORT",
    description: "ZAPATILLAS CLÁSICAS ATEMPORALES HECHAS PARCIALMENTE CON MATERIALES RECICLADOS",
    price: "68",
    discount: 0,
    mark: "ADIDAS",
    gender: "MUJER",
    category: "CALZADO",
    subCategory: "ZAPATILLAS",
    color: ["OLIVO SOMBRÍO"],
    sizes: [
      {
        size: "35",
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/865058f1e1034bcb9c91f73b77fd9363_9366/Zapatillas_adidas_Grand_Court_Cloudfoam_Comfort_Gris_ID4468_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e4d675fae46441e68b16f9be7d752bc8_9366/Zapatillas_adidas_Grand_Court_Cloudfoam_Comfort_Gris_ID4468_02_standard_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b946c3a62c61458689e9bf9c614b7f9e_9366/Zapatillas_adidas_Grand_Court_Cloudfoam_Comfort_Gris_ID4468_03_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9ba59b634dff4fb1a26b859788bd7404_9366/Zapatillas_adidas_Grand_Court_Cloudfoam_Comfort_Gris_ID4468_04_standard.jpg",
    ],
  },
  {
    title: "ZAPATILLAS NMD_V3",
    description: "ZAPATILLAS VERSÁTILES HECHAS PARCIALMENTE CON PARLEY OCEAN PLASTIC.",
    price: "67",
    discount: 0,
    mark: "ADIDAS",
    gender: "UNISEX",
    category: "CALZADO",
    subCategory: "ZAPATILLAS",
    color: ["AZUL"],
    sizes: [
      {
        size: "40",
        stock: 10,
      },
      {
        size: "41",
        stock: 15,
      },
      {
        size: "42",
        stock: 20,
      },
    ],
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/00593f21e5d449b1b5c6af8e013f6f97_9366/Zapatillas_NMD_V3_Turquesa_FZ6498_01_standard.jpg",
      "https://assets.adidas.com/videos/ar_1,w_720,c_fill,q_auto,f_auto/ba20a63b471e4c94ae38afb600c5acfe_d98c/Zapatillas_NMD_V3_Turquesa_FZ6498_video.mp4",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e295b79cae6043f7b74eaf8e013f80e5_9366/Zapatillas_NMD_V3_Turquesa_FZ6498_02_standard_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/38bcc88d450f411fb11aaf8e013f8959_9366/Zapatillas_NMD_V3_Turquesa_FZ6498_03_standard.jpg",
    ],
  },
  {
    title: "ZAPATILLAS ADIDAS COURT FUNK",
    description: "ZAPATILLAS PARA USO DIARIO CON UN LOOK CLÁSICO, HECHAS EN PARTE CON MATERIALES RECICLADOS",
    price: "81",
    discount: 0,
    mark: "ADIDAS",
    gender: "MUJER",
    category: "CALZADO",
    subCategory: "ZAPATILLAS",
    color: ["BLANCO"],
    sizes: [
      {
        size: "40",
        stock: 10,
      },
      {
        size: "41",
        stock: 15,
      },
      {
        size: "42",
        stock: 20,
      },
    ],
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cae47460380e4002887376b67ffb0e27_9366/Zapatillas_adidas_Court_Funk_Blanco_IF2820_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ccf0c32879d3492b8223a4b1876865fe_9366/Zapatillas_adidas_Court_Funk_Blanco_IF2820_02_standard_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0b14d8668d1045298885994896ce9947_9366/Zapatillas_adidas_Court_Funk_Blanco_IF2820_03_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e48b1b0ad6624b329fb7a4729a71b8ea_9366/Zapatillas_adidas_Court_Funk_Blanco_IF2820_04_standard.jpg",
    ],
  },
  {
    title: "SANDALIAS ADILETTE COMFORT",
    description: "SANDALIAS DEPORTIVAS CLÁSICAS MUY LIVIANAS",
    price: "50",
    discount: 0,
    mark: "ADIDAS",
    gender: "UNISEX",
    category: "CALZADO",
    subCategory: "SANDALIAS",
    color: ["NEGRO", "BLANCO"],
    sizes: [
      {
        size: "40",
        stock: 10,
      },
      {
        size: "41",
        stock: 15,
      },
      {
        size: "42",
        stock: 20,
      },
    ],
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5967f14abc4b4a5cbde6acb800c2fa91_9366/Sandalias_Adilette_Comfort_Blanco_GV9737_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5f767563c0c045adbcfdacb800c307d5_9366/Sandalias_Adilette_Comfort_Blanco_GV9737_02_standard_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9ca3645a41dd4708a441acb800c30e86_9366/Sandalias_Adilette_Comfort_Blanco_GV9737_03_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c3915ee65134ae5b7e4acb800c31582_9366/Sandalias_Adilette_Comfort_Blanco_GV9737_04_standard.jpg",
    ],
  },
  {
    title: "BOTINES X SPEEDPORTAL.3 TERRENO FIRME",
    description:
      "DESCUBRÍ EL SIGNIFICADO DE LA VELOCIDAD CON ESTOS BOTINES HECHOS PARCIALMENTE CON MATERIALES RECICLADOS.",
    price: "80",
    discount: 0,
    mark: "ADIDAS",
    gender: "UNISEX",
    category: "CALZADO",
    subCategory: "BOTINES",
    color: ["NARANJA"],
    sizes: [
      {
        size: "40",
        stock: 10,
      },
      {
        size: "41",
        stock: 15,
      },
      {
        size: "42",
        stock: 20,
      },
    ],
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc962094edf145aeb505afa900ef5390_9366/Botines_X_Speedportal.3_Terreno_Firme_Dorado_GZ5077_22_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/17e53c6490f049d29319afa900d76f84_9366/Botines_X_Speedportal.3_Terreno_Firme_Dorado_GZ5077_01_standard_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6e24cedfb17840a2a62bafa900d78ccd_9366/Botines_X_Speedportal.3_Terreno_Firme_Dorado_GZ5077_02_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d22834cef38941eaa851afa900d799c6_9366/Botines_X_Speedportal.3_Terreno_Firme_Dorado_GZ5077_03_standard.jpg",
    ],
  },
  {
    title: "CAMISETA TITULAR BOCA JUNIORS 23/24",
    description:
      "LA NUEVA CAMISETA OFICIAL IRRADIA LA PASIÓN BOQUENSE Y LA CONEXIÓN CON EL BARRIO. BOCA ES PUEBLO Y CARNAVAL",
    price: "52",
    discount: 0,
    mark: "ADIDAS",
    gender: "HOMBRE",
    category: "ROPA",
    subCategory: "CAMISETAS DE FUTBOL",
    color: ["AZUL", "AMARILLO"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/43b3d5dca79c4970ba7d510045536008_9366/Camiseta_Titular_Boca_Juniors_23-24_Azul_IV1922_01_laydown.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e588d86bf33a4983acc969068fd75d46_9366/Camiseta_Titular_Boca_Juniors_23-24_Azul_IV1922_02_laydown_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9f89697229654818a347ba061f0c83aa_9366/Camiseta_Titular_Boca_Juniors_23-24_Azul_IV1922_41_detail.jpg",
    ],
  },
  {
    title: "CAMISETA ALTERNATIVA MESSI 10 INTER MIAMI CF 22/23",
    description:
      "MOSTRÁ TU APOYO CON ESTA CAMISETA MESSI 10 INTER MIAMI CF CREADA PARA LOS AFICIONADOS Y HECHA CON MATERIALES RECICLADOS.",
    price: "60",
    discount: 0,
    mark: "ADIDAS",
    gender: "HOMBRE",
    category: "ROPA",
    subCategory: "CAMISETAS DE FUTBOL",
    color: ["NEGRO"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2902e5aff0bf47ffa4ddc16754bc93d4_9366/Camiseta_Alternativa_Messi_10_Inter_Miami_CF_22-23_Negro_JE9704_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a652d99ca67e4ec8ba1af32e6e441231_9366/Camiseta_Alternativa_Messi_10_Inter_Miami_CF_22-23_Negro_JE9704_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5c4e5c19d1a145ba894a65e877e8aa23_9366/Camiseta_Alternativa_Messi_10_Inter_Miami_CF_22-23_Negro_JE9704_25_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/efd02f78eb3147e3b13b9f7a7b2a00a1_9366/Camiseta_Alternativa_Messi_10_Inter_Miami_CF_22-23_Negro_JE9704_01_laydown.jpg",
    ],
  },
  {
    title: "M DOODLE F T",
    description:
      "M Doodle F T es un nuevo producto para Hombre de adidas. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. ",
    price: "30",
    discount: 0,
    mark: "ADIDAS",
    gender: "HOMBRE",
    category: "ROPA",
    subCategory: "REMERAS",
    color: ["BLANCO"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/00ab5baa955f4323817b7aa9bb65aedb_9366/M_DOODLE_F_T_Blanco_IN7974_01_laydown.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3c8f352b4db144e59b3f17e894606899_9366/M_DOODLE_F_T_Blanco_IN7974_02_laydown_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d3ae77035abd471986bd9dd620d24e0c_9366/M_DOODLE_F_T_Blanco_IN7974_41_detail.jpg",
    ],
  },
  {
    title: "M DOODLE F T",
    description:
      "M Doodle F T es un nuevo producto para Hombre de adidas. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. ",
    price: "30",
    discount: 0,
    mark: "ADIDAS",
    gender: "HOMBRE",
    category: "ROPA",
    subCategory: "REMERAS",
    color: ["NEGRO"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/70492ed8665a4142bd7b59b377c8031b_9366/M_DOODLE_F_T_Negro_IN7975_01_laydown.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5d5f95f4ecd149c0b1ea51384c3311fd_9366/M_DOODLE_F_T_Negro_IN7975_02_laydown_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b39e90293fb74f729869f03537b4a8d7_9366/M_DOODLE_F_T_Negro_IN7975_41_detail.jpg",
    ],
  },
  {
    title: "CAMPERA DEPORTIVA ADICOLOR CLASSICS PRIMEBLUE SST",
    description: "UNA DE LAS DOS PIEZAS DEL CLÁSICO CONJUNTO CON TODA LA COMODIDAD",
    price: "102",
    discount: 0,
    mark: "ADIDAS",
    gender: "HOMBRE",
    category: "ROPA",
    subCategory: "CAMPERAS",
    color: ["GRIS"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/919d0a361d4544878088ac840090f133_9366/Campera_Deportiva_Adicolor_Classics_Primeblue_SST_Azul_GN3516_01_laydown.jpg",
    ],
  },
  {
    title: "REMERA AEROREADY DESIGNED 2 MOVE FEELREADY",
    description: "UNA REMERA CON ESPALDA ALARGADA PARA UNA MAYOR COBERTURA MIENTRAS ENTRENÁS",
    price: "30",
    discount: 0,
    mark: "ADIDAS",
    gender: "HOMBRE",
    category: "ROPA",
    subCategory: "REMERAS",
    color: ["NEGRO"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/adc4e9e046aa4d6596cdace001449777_9366/Remera_AEROREADY_Designed_2_Move_Feelready_Negro_GT3109_01_laydown.jpg",
    ],
  },
  {
    title: "SHORTS FORTORE 23",
    description: "SHORTS INSPIRADOS EN LOS AÑOS 90, IDEALES PARA EQUIPOS AMATEUR, HECHOS CON MATERIALES RECICLADOS",
    price: "25",
    discount: 0,
    mark: "ADIDAS",
    gender: "HOMBRE",
    category: "ROPA",
    subCategory: "SHORTS",
    color: ["AZUL"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/26fc2b2f1e7b4515b4bfafc8010e3228_9366/Shorts_Fortore_23_Azul_IK5729_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e406905843b64a7b912fafc8010e3d79_9366/Shorts_Fortore_23_Azul_IK5729_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7f5fa288fdf9427d85c1afc8010e499d_9366/Shorts_Fortore_23_Azul_IK5729_25_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3637741684cf4a5a8992afc8010e7711_9366/Shorts_Fortore_23_Azul_IK5729_01_laydown.jpg",
    ],
  },
  {
    title: "PANTALÓN TEJIDO",
    description: "UN PANTALÓN DEPORTIVO CLÁSICO CON CINTURA CON CORDÓN PARA UN AJUSTE CÓMODO Y HOLGADO.",
    price: "80",
    discount: 0,
    mark: "ADIDAS",
    gender: "HOMBRE",
    category: "ROPA",
    subCategory: "PANTALONES",
    color: ["NEGRO"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/39344a7d14c14bd4bfe8af18018067f7_9366/Pantalon_Tejido_Azul_IC5541_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4256c8347460442fbb34af180180ac7f_9366/Pantalon_Tejido_Azul_IC5541_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6f11f37605fb4f61874daf180181cff3_9366/Pantalon_Tejido_Azul_IC5541_25_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3a2e93cd515d48c7a58baf18002222cc_9366/Pantalon_Tejido_Azul_IC5541_01_laydown.jpg",
    ],
  },
  {
    title: "CAMISETA TEAM ICON 23",
    description:
      "UNA CAMISETA CON TECNOLOGÍA DE ABSORCIÓN CON EL ADN DEL FÚTBOL DE LOS 80, HECHA PARCIALMENTE CON MATERIALES RECICLADOS",
    price: "30",
    discount: 0,
    mark: "ADIDAS",
    gender: "HOMBRE",
    category: "ROPA",
    subCategory: "CAMISETAS DE FUTBOL",
    color: ["AZUL"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/77337b7950fd4737b3adaf1c00fc5486_9366/Camiseta_Team_Icon_23_Azul_HR2632_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/88fa83a2c0fe4d739dfbaf1c00fc5cea_9366/Camiseta_Team_Icon_23_Azul_HR2632_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/473fb1de3d7a43c5a22daf1c00fc6692_9366/Camiseta_Team_Icon_23_Azul_HR2632_25_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5abc939c07d943b39c08af1f00e99483_9366/Camiseta_Team_Icon_23_Azul_HR2632_01_laydown.jpg",
    ],
  },
  {
    title: "CAMISETA FORTORE 23",
    description: "UNA CAMISETA INSPIRADA EN LOS 90, IDEAL PARA EQUIPOS AMATEUR, HECHA CON MATERIALES RECICLADOS",
    price: "32",
    discount: 0,
    mark: "ADIDAS",
    gender: "HOMBRE",
    category: "ROPA",
    subCategory: "CAMISETAS DE FUTBOL",
    color: ["BLANCO"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/85d767d29f00498aa674afc8012ee067_9366/Camiseta_Fortore_23_Blanco_IK5745_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1d8a09e51aaa4d259e27afc8012ee9dc_9366/Camiseta_Fortore_23_Blanco_IK5745_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/45ceb89acd1a42448c2cafc8012ef41a_9366/Camiseta_Fortore_23_Blanco_IK5745_25_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/94026efd92db4ead9852afc8012f1f51_9366/Camiseta_Fortore_23_Blanco_IK5745_01_laydown.jpg",
    ],
  },
  {
    title: "PANTALÓN AEROREADY DESIGNED 2 MOVE SPORT",
    description: "PANTALÓN DEPORTIVO CON BOLSILLOS LATERALES",
    price: "41",
    discount: 0,
    mark: "ADIDAS",
    gender: "HOMBRE",
    category: "ROPA",
    subCategory: "PANTALONES",
    color: ["NEGRO"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cda5dc103c11453287e7adfa012a2ce3_9366/Pantalon_Aeroready_Designed_2_Move_Sport_Azul_HF7187_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3ff4220348d74f8da989adfa012a367b_9366/Pantalon_Aeroready_Designed_2_Move_Sport_Azul_HF7187_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6911dad7375a4dd180d1adfa012a4112_9366/Pantalon_Aeroready_Designed_2_Move_Sport_Azul_HF7187_25_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6eabb5659b9548dbae6fade5010d4198_9366/Pantalon_Aeroready_Designed_2_Move_Sport_Azul_HF7187_01_laydown.jpg",
    ],
  },
  {
    title: "REMERA BZRP",
    description: "UNA REMERA CON ESTILO PARA VIVIR EL BZRP LIVE TOUR",
    price: "38",
    discount: 0,
    mark: "ADIDAS",
    gender: "HOMBRE",
    category: "ROPA",
    subCategory: "REMERAS",
    color: ["BLANCO"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a38b9be61b2d45b78a85ee970e6cbfc8_9366/Remera_BZRP_Blanco_IR5032_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ae760f9db4834230bcd724c31f19bbb3_9366/Remera_BZRP_Blanco_IR5032_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/891f5a0ac4e54b1f90292323ee0367e0_9366/Remera_BZRP_Blanco_IR5032_25_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/84c3ff3090d54bfa95135ff3cbc8f52a_9366/Remera_BZRP_Blanco_IR5032_01_laydown.jpg",
    ],
  },
  {
    title: "REMERA MESSI N&N",
    description: "UNA REMERA QUE CELEBRA AL MEJOR FUTBOLISTA DE TODOS LOS TIEMPOS",
    price: "32",
    discount: 0,
    mark: "ADIDAS",
    gender: "HOMBRE",
    category: "ROPA",
    subCategory: "REMERAS",
    color: ["BLANCO"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/38328f655de7437c96bdf4bcc58c6723_9366/Remera_Messi_NandN_Blanco_IV1058_01_laydown.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/db2ef206d66d4e91bddc519b3a438af6_9366/Remera_Messi_NandN_Blanco_IV1058_02_laydown_hover.jpg",
    ],
  },
  {
    title: "REMERA GRAPHIC FOIL",
    description: "UNA REMERA CON LÍNEAS DEFINIDAS Y UN TOQUE DE BRILLO",
    price: "30",
    discount: 0,
    mark: "ADIDAS",
    gender: "HOMBRE",
    category: "ROPA",
    subCategory: "REMERAS",
    color: ["GRIS"],
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fa31bf4f0f7c4c5a8b45677421b6e3cd_9366/Remera_Graphic_Foil_Gris_HR5748_01_laydown.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a8747cb043c04ea7b4920adde5aa04db_9366/Remera_Graphic_Foil_Gris_HR5748_02_laydown_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d87cf6be928640e486b78de655f7dc25_9366/Remera_Graphic_Foil_Gris_HR5748_41_detail.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0f26f49baf4a4a759434ec6c460af8c9_9366/Remera_Graphic_Foil_Gris_HR5748_42_detail.jpg",
    ],
  },
  {
    title: "PELOTA AL HILM PRO",
    description: "LA PELOTA SIN COSTURAS QUE SERÁ PROTAGONISTA EN LA FINAL DE QATAR.",
    price: "110",
    discount: 0,
    mark: "ADIDAS",
    gender: "UNISEX",
    category: "ACCESORIOS",
    subCategory: "PELOTAS",
    color: ["BLANCO", "ROJO"],
    sizes: [
      {
        size: "U",
        stock: 10,
      },
    ],
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ae4874fa8d2b40d483f5ae88012a2af4_9366/Pelota_Al_Hilm_Pro_Dorado_HC0437_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/078ff3f59e4b4614812eae88012a32c9_9366/Pelota_Al_Hilm_Pro_Dorado_HC0437_02_standard_hover.jpg",
    ],
  },
  {
    title: "PELOTA ARGENTUM 22 PRO",
    description: "UNA PELOTA DE PRIMERA CALIDAD PARA PARTIDOS, INSPIRADA EN UN ÍCONO ARGENTINO",
    price: "105",
    discount: 0,
    mark: "ADIDAS",
    gender: "UNISEX",
    category: "ACCESORIOS",
    subCategory: "PELOTAS",
    color: ["BLANCO"],
    sizes: [
      {
        size: "U",
        stock: 10,
      },
    ],
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/26ac42be45734d419903ae7a00bbb000_9366/Pelota_Argentum_22_Pro_Blanco_HE3788_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/26ac42be45734d419903ae7a00bbb000_9366/Pelota_Argentum_22_Pro_Blanco_HE3788_01_standard.jpg",
    ],
  },
  {
    title: "MOCHILA PARA ENTRENAMIENTO LINEAR (UNISEX)",
    description:
      "PERFECTA PARA TU DÍA A DÍA Escapate de fin de semana o acude al gimnasio. Esta resistente mochila para entrenamiento presenta un diseño espacioso con bolsillos que se adapta a tu ajetreado ritmo de vida.",
    price: "16",
    discount: 0,
    mark: "ADIDAS",
    gender: "UNISEX",
    category: "ACCESORIOS",
    subCategory: "BOLSOS",
    color: ["NEGRO"],
    sizes: [
      {
        size: "U",
        stock: 10,
      },
    ],
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6d212d664df94a4ea36faae200f5f1c9_9366/Mochila_para_entrenamiento_Linear_UNISEX_Negro_FL3651_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/139ca3157874455c9c9faae200f5fd91_9366/Mochila_para_entrenamiento_Linear_UNISEX_Negro_FL3651_02_standard.jpg",
    ],
  },
  {
    title: "MEDIAS ACOLCHADAS DIP-DYED 3 TIRAS LARGO CLÁSICO 3 PARES",
    description: "UN PAQUETE DE TRES PARES DE MEDIAS ACOLCHADAS HECHAS CON MATERIAL RECICLADO",
    price: "18",
    discount: 0,
    mark: "ADIDAS",
    gender: "UNISEX",
    category: "ACCESORIOS",
    subCategory: "MEDIAS",
    color: ["AMARILLO", "CELESTE", "ROSA"],
    sizes: [
      {
        size: "U",
        stock: 10,
      },
    ],
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/80f665b8a1514a6788ebae6300ea4ca0_9366/Medias_Acolchadas_Dip-Dyed_3_Tiras_Largo_Clasico_3_Pares_Blanco_HN6095_03_standard.jpg",
    ],
  },
  {
    title: "GORRO PESCADOR ADICOLOR CLASSIC WINTER",
    description: "UN GORRO PESCADOR SUAVE EN FELPA CÓMODA HECHO PARCIALMENTE CON MATERIALES RECICLADOS",
    price: "28",
    discount: 0,
    mark: "ADIDAS",
    gender: "UNISEX",
    category: "ACCESORIOS",
    subCategory: "GORRAS",
    color: ["NEGRO"],
    sizes: [
      {
        size: "U",
        stock: 10,
      },
    ],
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1a5f742dac264166bb66ae9000dce6fd_9366/Gorro_Pescador_Adicolor_Classic_Winter_Negro_HM1685_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2420405cb1e14dc5bdc6ae9000dced88_9366/Gorro_Pescador_Adicolor_Classic_Winter_Negro_HM1685_02_standard_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/536ac7287cbf42beaaf6ae9000dcf734_9366/Gorro_Pescador_Adicolor_Classic_Winter_Negro_HM1685_41_detail.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3ce097a9891e4696830eae9000dd0482_9366/Gorro_Pescador_Adicolor_Classic_Winter_Negro_HM1685_42_detail.jpg",
    ],
  },
  {
    title: "MINI PELOTA STARLANCER",
    description: "UNA MINI PELOTA DE FÚTBOL PARA JUGAR EN TODO MOMENTO Y LUGAR",
    price: "20",
    discount: 0,
    mark: "ADIDAS",
    gender: "UNISEX",
    category: "ACCESORIOS",
    subCategory: "PELOTAS",
    color: ["BLANCO"],
    sizes: [
      {
        size: "U",
        stock: 10,
      },
    ],
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4cd020df11734fb49ff8ad12002232df_9366/Mini_Pelota_Starlancer_Blanco_GU0244_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c186da350a674e3f8034ad120022378a_9366/Mini_Pelota_Starlancer_Blanco_GU0244_02_standard_hover.jpg",
    ],
  },
  {
    title: "GORRA SHMOO (UNISEX)",
    description: "UNA GORRA CLÁSICA CON EL FAMOSO SHMOO DE MARK GONZALES",
    price: "8",
    discount: 0,
    mark: "ADIDAS",
    gender: "UNISEX",
    category: "ACCESORIOS",
    subCategory: "GORRAS",
    color: ["AMARILLO"],
    sizes: [
      {
        size: "U",
        stock: 10,
      },
    ],
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/12154bbec3f0458b969baaa301043bc1_9366/Gorra_Shmoo_UNISEX_Amarillo_FM1598_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c63b42646be54e50a94caaa30102ac85_9366/Gorra_Shmoo_UNISEX_Amarillo_FM1598_02_standard_hover.jpg",
    ],
  },
  {
    title: "GORRA ESPAÑA INCLUSIÓN",
    description: "UNA GORRA DE VISERA CURVA PARA LOS HINCHAS DE ESPAÑA, HECHA PARCIALMENTE CON MATERIALES RECICLADOS",
    price: "23",
    discount: 0,
    mark: "ADIDAS",
    gender: "UNISEX",
    category: "ACCESORIOS",
    subCategory: "GORRAS",
    color: ["AZUL"],
    sizes: [
      {
        size: "U",
        stock: 10,
      },
    ],
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/aab037bf37434d4eb098ae8600f87432_9366/Gorra_Espana_Inclusion_Azul_HM2291_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/293d0c804b004fbf8ebdae8600f87b14_9366/Gorra_Espana_Inclusion_Azul_HM2291_02_standard_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/21e54f592d1d4ca8a797ae8600f88694_9366/Gorra_Espana_Inclusion_Azul_HM2291_41_detail.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/62efe97cf6cb45aaa73fae8600f88fdd_9366/Gorra_Espana_Inclusion_Azul_HM2291_42_detail.jpg",
    ],
  },
  {
    title: "MEDIAS ADI 23",
    description: "MEDIAS DE FÚTBOL CON HORMA ESPECÍFICA A CADA PIE, HECHAS PARCIALMENTE CON MATERIALES RECICLADOS",
    price: "8",
    discount: 0,
    mark: "ADIDAS",
    gender: "UNISEX",
    category: "ACCESORIOS",
    subCategory: "MEDIAS",
    color: ["BORDO"],
    sizes: [
      {
        size: "U",
        stock: 10,
      },
    ],
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2abc90e4a4ac4e41b149ae620132c2f4_9366/Medias_adi_23_Rojo_HT5033_03_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fc214a815e69477bb4acae620132ced0_9366/Medias_adi_23_Rojo_HT5033_41_detail_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c86f9938d1944e4f859fae620132d938_9366/Medias_adi_23_Rojo_HT5033_42_detail.jpg",
    ],
  },
  {
    title: "MEDIAS ADIDAS RUNNING X SUPERNOVA PERFORMANCE MEDIA PANTORRILLA",
    description: "MEDIAS DE RUNNING VENTILADAS, HECHAS PARCIALMENTE CON PARLEY OCEAN PLASTIC",
    price: "7",
    discount: 0,
    mark: "ADIDAS",
    gender: "UNISEX",
    category: "ACCESORIOS",
    subCategory: "MEDIAS",
    color: ["ROSA"],
    sizes: [
      {
        size: "U",
        stock: 10,
      },
    ],
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/aa21beaa0b9140d48a2bae7601367f12_9366/Medias_adidas_Running_x_Supernova_Performance_Media_Pantorrilla_Rosa_HM3915_03_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1ed980c32e45401795d0ae7601368aa5_9366/Medias_adidas_Running_x_Supernova_Performance_Media_Pantorrilla_Rosa_HM3915_41_detail_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c7e1f6868cc544c7926bae760136936b_9366/Medias_adidas_Running_x_Supernova_Performance_Media_Pantorrilla_Rosa_HM3915_42_detail.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/94421206cfc04ef48ee2ae7601369d67_9366/Medias_adidas_Running_x_Supernova_Performance_Media_Pantorrilla_Rosa_HM3915_43_detail.jpg",
    ],
  },
  {
    title: "MEDIAS ADI 21",
    description: "MEDIAS PARA EL CAMPO DE FÚTBOL",
    price: "8",
    discount: 0,
    mark: "ADIDAS",
    gender: "UNISEX",
    category: "ACCESORIOS",
    subCategory: "MEDIAS",
    color: ["ROJO"],
    sizes: [
      {
        size: "U",
        stock: 10,
      },
    ],
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/df1f43810c284e89be1dad1600f88883_9366/Medias_Adi_21_Rojo_H18874_03_standard.jpg",
    ],
  },
  {
    title: "CANILLERAS MESSI CLUB",
    description: "CANILLERAS LIVIANAS PARA LOS 10 PERFECTOS",
    price: "3",
    discount: 0,
    mark: "ADIDAS",
    gender: "UNISEX",
    category: "ACCESORIOS",
    subCategory: "CANILLERAS",
    color: ["AZUL"],
    sizes: [
      {
        size: "U",
        stock: 10,
      },
    ],
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/23b860f8e1334a119baaad81011b7bdc_9366/Canilleras_Messi_Club_Rosa_H50876_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8e67425e29a743e08446ad81011b8156_9366/Canilleras_Messi_Club_Rosa_H50876_41_detail_hover.jpg",
    ],
  },
  {
    title: "BUZO CON CAPUCHA LE COQ SPORTIF TECH AZUL",
    description: "Buzo con capucha Algodón/Poliéster Buen ajuste, agradable y suave de llevar, aspecto efecto piqué",
    price: "55",
    discount: 0,
    mark: "LECOQSPORTIF",
    gender: "HOMBRE",
    category: "ROPA",
    subCategory: "BUZOS",
    color: ["AZUL"],
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
      "https://lecoqsportif.com.ar/wp-content/uploads/2023/10/MiConv.com__thumbnail-27.jpg",
      "https://lecoqsportif.com.ar/wp-content/uploads/2023/10/MiConv.com__803fed39-d1d4-4b76-a3a0-1bc276e06870-400x400.jpg",
      "https://lecoqsportif.com.ar/wp-content/uploads/2023/10/MiConv.com__a6f45a1d-92e6-41fd-82a5-9717282cb009-400x400.jpg",
      "https://lecoqsportif.com.ar/wp-content/uploads/2023/10/MiConv.com__thumbnail-26-400x400.jpg",
      "https://lecoqsportif.com.ar/wp-content/uploads/2023/10/MiConv.com__thumbnail-17.jpg",
      "https://lecoqsportif.com.ar/wp-content/uploads/2023/10/MiConv.com__thumbnail-18-400x400.jpg",
    ],
  },
  {
    title: "MUSCULOSA LE COQ SPORTIF PERFORMANCE N°1 HOMBRE AZUL",
    description: "Musculosa de entrenamiento para hombre",
    price: "26",
    discount: 0,
    mark: "LECOQSPORTIF",
    gender: "HOMBRE",
    category: "ROPA",
    subCategory: "MUSCULOSA",
    color: ["AZUL"],
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
      "https://lecoqsportif.com.ar/wp-content/uploads/2023/10/MiConv.com__b16a2436-769a-45b2-a1fe-a700cb748403.jpg",
      "https://lecoqsportif.com.ar/wp-content/uploads/2023/10/MiConv.com__d4b8398e-1053-4299-b04e-498e38d34aa8.jpg",
      "https://lecoqsportif.com.ar/wp-content/uploads/2023/10/MiConv.com__thumbnail-3-400x400.jpg",
      "https://lecoqsportif.com.ar/wp-content/uploads/2023/10/MiConv.com__247fd17a-6f30-493e-93bf-35cdd2e5bc37-400x400.jpg",
      "https://lecoqsportif.com.ar/wp-content/uploads/2023/10/MiConv.com__87ebf5fc-3427-44f6-857e-f10e686be9d6-400x400.jpg",
      "https://lecoqsportif.com.ar/wp-content/uploads/2023/10/MiConv.com__2afc1776-e7d6-4eff-b0b3-f1f64c7d9d37-400x400.jpg",
    ],
  },
  {
    title: "MUSCULOSA LE COQ SPORTIF PERFORMANCE N°1 HOMBRE ROJA",
    description: "Musculosa de entrenamiento para hombre",
    price: "26",
    discount: 0,
    mark: "LECOQSPORTIF",
    gender: "HOMBRE",
    category: "ROPA",
    subCategory: "MUSCULOSAS",
    color: ["ROJO"],
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
      "https://lecoqsportif.com.ar/wp-content/uploads/2023/10/63f36673374fa-2110908_1-1024x1024.webp",
      "https://lecoqsportif.com.ar/wp-content/uploads/2023/10/63f36685e9cc4-2110908_3-1024x1024.webp",
    ],
  },
  {
    title: "REMERA LE COQ SPORTIF PERFORMANCE HOMBRE N°1 AZUL ELÉCTRICO",
    description: "Camiseta de entrenamiento de manga corta de Hombre",
    price: "27",
    discount: 0,
    mark: "LECOQSPORTIF",
    gender: "HOMBRE",
    category: "ROPA",
    subCategory: "REMERAS",
    color: ["AZUL"],
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
      "https://lecoqsportif.com.ar/wp-content/uploads/2023/10/MiConv.com__e6fb0865-4eac-4836-93fb-62d49b2c927d.jpg",
      "https://lecoqsportif.com.ar/wp-content/uploads/2023/10/MiConv.com__e7b5ff39-4d3b-48b9-82b6-afc194d5e00e.jpg",
      "https://lecoqsportif.com.ar/wp-content/uploads/2023/10/MiConv.com__672ade81-fecd-4c56-909a-544dd1b674a2.jpg",
      "https://lecoqsportif.com.ar/wp-content/uploads/2023/10/MiConv.com__610ad652-952f-449d-bd4a-3c0fa570247e.jpg",
      "https://lecoqsportif.com.ar/wp-content/uploads/2023/10/MiConv.com__d1cc3bd2-bf26-49dc-86f1-240fbd6337ab.jpg",
      "https://lecoqsportif.com.ar/wp-content/uploads/2023/10/MiConv.com__5116e2b6-2004-4aeb-87df-835fbe437dd6.jpg",
    ],
  },
  {
    title: "",
    description: "",
    price: "",
    discount: 0,
    mark: "LECOQSPORTIF",
    gender: "",
    category: "",
    subCategory: "",
    color: [""],
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
    images: [],
  },
  {
    title: "",
    description: "",
    price: "",
    discount: 0,
    mark: "LECOQSPORTIF",
    gender: "",
    category: "",
    subCategory: "",
    color: [""],
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
    images: [],
  },
  {
    title: "",
    description: "",
    price: "",
    discount: 0,
    mark: "LECOQSPORTIF",
    gender: "",
    category: "",
    subCategory: "",
    color: [""],
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
    images: [],
  },
  {
    title: "",
    description: "",
    price: "",
    discount: 0,
    mark: "LECOQSPORTIF",
    gender: "",
    category: "",
    subCategory: "",
    color: [""],
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
    images: [],
  },
  {
    title: "",
    description: "",
    price: "",
    discount: 0,
    mark: "LECOQSPORTIF",
    gender: "",
    category: "",
    subCategory: "",
    color: [""],
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
    images: [],
  },
  {
    title: "",
    description: "",
    price: "",
    discount: 0,
    mark: "LECOQSPORTIF",
    gender: "",
    category: "",
    subCategory: "",
    color: [""],
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
    images: [],
  },
  {
    title: "",
    description: "",
    price: "",
    discount: 0,
    mark: "LECOQSPORTIF",
    gender: "",
    category: "",
    subCategory: "",
    color: [""],
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
    images: [],
  },
  {
    title: "",
    description: "",
    price: "",
    discount: 0,
    mark: "LECOQSPORTIF",
    gender: "",
    category: "",
    subCategory: "",
    color: [""],
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
    images: [],
  },
  {
    title: "",
    description: "",
    price: "",
    discount: 0,
    mark: "LECOQSPORTIF",
    gender: "",
    category: "",
    subCategory: "",
    color: [""],
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
    images: [],
  },
  {
    title: "",
    description: "",
    price: "",
    discount: 0,
    mark: "LECOQSPORTIF",
    gender: "",
    category: "",
    subCategory: "",
    color: [""],
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
    images: [],
  },
  {
    title: "",
    description: "",
    price: "",
    discount: 0,
    mark: "LECOQSPORTIF",
    gender: "",
    category: "",
    subCategory: "",
    color: [""],
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
    images: [],
  },
  {
    title: "",
    description: "",
    price: "",
    discount: 0,
    mark: "LECOQSPORTIF",
    gender: "",
    category: "",
    subCategory: "",
    color: [""],
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
    images: [],
  },
  {
    title: "",
    description: "",
    price: "",
    discount: 0,
    mark: "LECOQSPORTIF",
    gender: "",
    category: "",
    subCategory: "",
    color: [""],
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
    images: [],
  },
  {
    title: "",
    description: "",
    price: "",
    discount: 0,
    mark: "LECOQSPORTIF",
    gender: "",
    category: "",
    subCategory: "",
    color: [""],
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
    images: [],
  },
  {
    title: "",
    description: "",
    price: "",
    discount: 0,
    mark: "LECOQSPORTIF",
    gender: "",
    category: "",
    subCategory: "",
    color: [""],
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
    images: [],
  },
  {
    title: "",
    description: "",
    price: "",
    discount: 0,
    mark: "LECOQSPORTIF",
    gender: "",
    category: "",
    subCategory: "",
    color: [""],
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
    images: [],
  },
  {
    title: "",
    description: "",
    price: "",
    discount: 0,
    mark: "LECOQSPORTIF",
    gender: "",
    category: "",
    subCategory: "",
    color: [""],
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
    images: [],
  },
  {
    title: "",
    description: "",
    price: "",
    discount: 0,
    mark: "LECOQSPORTIF",
    gender: "",
    category: "",
    subCategory: "",
    color: [""],
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
    images: [],
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

      await postProduct(req, res);
    }
    console.log("Productos inicializados con éxito.");
  } catch (error) {
    console.error("Error al inicializar los Productos:", error.message);
  }
}
module.exports = { initializeProducts };
