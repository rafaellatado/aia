export const mainImage = {
  id: 1,
  url: `${import.meta.env.BASE_URL}images/cover/cover_pic.webp`,
  altText: 'Foto de Capa',
};

export const featuredProducts = [
  {
    id: 1,
    primaryImage: `${import.meta.env.BASE_URL}images/featuredProducts/1a.jpg`,
    secondaryImage: `${import.meta.env.BASE_URL}images/featuredProducts/1b.png`,
    name: 'MOCK NAME 1',
    price: 170.00,
    installments: '5x de R$ 56,00',
    altText: 'Produto',
    variants: [
      { id: 101, color: '#FF0000', colorName: 'VERMELHO', size: 34, quantity: 5 },
      { id: 102, color: '#FF0000', colorName: 'VERMELHO', size: 35, quantity: 3 },
      { id: 103, color: '#FF0000', colorName: 'VERMELHO', size: 36, quantity: 0 }, 
      { id: 104, color: '#000000', colorName: 'PRETO', size: 34, quantity: 2 },
      { id: 105, color: '#000000', colorName: 'PRETO', size: 35, quantity: 4 },
      { id: 106, color: '#000000', colorName: 'PRETO', size: 36, quantity: 0 },
    ],
  },
  {
    id: 2,
    primaryImage: `${import.meta.env.BASE_URL}images/featuredProducts/2a.jpg`,
    secondaryImage: `${import.meta.env.BASE_URL}images/featuredProducts/2b.jpg`,
    name: 'MOCK NAME 2',
    price: 350.00,
    installments: '5x de R$ 70,00',
    altText: 'Produto',
    variants: [
      { id: 201, color: '#FF0000', colorName: 'VERMELHO', size: 32, quantity: 5 },
      { id: 202, color: '#FF0000', colorName: 'VERMELHO', size: 35, quantity: 3 },
      { id: 203, color: '#FF0000', colorName: 'VERMELHO', size: 36, quantity: 0 }, 
      { id: 204, color: '#000000', colorName: 'PRETO', size: 34, quantity: 2 },
      { id: 205, color: '#000000', colorName: 'PRETO', size: 35, quantity: 4 },
      { id: 206, color: '#000000', colorName: 'PRETO', size: 36, quantity: 1 },
    ],
  },
  {
    id: 3,
    primaryImage: `${import.meta.env.BASE_URL}images/featuredProducts/3a.jpg`,
    secondaryImage: `${import.meta.env.BASE_URL}images/featuredProducts/3b.jpg`,
    name: 'MOCK NAME 3',
    price: 740.00,
    installments: '5x de R$ 148,00',
    altText: 'Produto',
    variants: [
      { id: 301, color: '#FFDB58', colorName: 'AMARELO', size: 34, quantity: 5 },
      { id: 302, color: '#FFDB58', colorName: 'AMARELO', size: 35, quantity: 3 },
      { id: 303, color: '#FFDB58', colorName: 'AMARELO', size: 36, quantity: 0 }, 
      { id: 304, color: '#808080', colorName: 'PRETO', size: 34, quantity: 2 },
      { id: 305, color: '#808080', colorName: 'PRETO', size: 35, quantity: 4 },
      { id: 306, color: '#808080', colorName: 'PRETO', size: 36, quantity: 1 },
    ],
  },
];

export const moreProducts = [
  {
    id: 4,
    primaryImage: `${import.meta.env.BASE_URL}images/moreProducts/1a.jpg`,
    secondaryImage: `${import.meta.env.BASE_URL}images/moreProducts/1b.jpg`,
    name: 'MOCK NAME 4',
    price: 359.90,
    installments: '5x de R$ 56,00',
    altText: 'Produto',
    variants: [
      { id: 401, color: '#FF0000', colorName: 'VERMELHO', size: 34, quantity: 5 },
      { id: 402, color: '#FF0000', colorName: 'VERMELHO', size: 35, quantity: 3 },
      { id: 403, color: '#FF0000', colorName: 'VERMELHO', size: 36, quantity: 0 }, 
      { id: 404, color: '#000000', colorName: 'PRETO', size: 34, quantity: 2 },
      { id: 405, color: '#000000', colorName: 'PRETO', size: 35, quantity: 4 },
      { id: 406, color: '#000000', colorName: 'PRETO', size: 36, quantity: 4 },
    ],
  },
  {
    id: 5,
    primaryImage: `${import.meta.env.BASE_URL}images/moreProducts/2a.jpg`,
    secondaryImage: `${import.meta.env.BASE_URL}images/moreProducts/2b.jpg`,
    name: 'MOCK NAME 5',
    price: 350.00,
    installments: '5x de R$ 70,00',
    altText: 'Produto',
    variants: [
      { id: 501, color: '#F5F5DC', colorName: 'BRANCO', size: 34, quantity: 5 },
      { id: 502, color: '#F5F5DC', colorName: 'BRANCO', size: 35, quantity: 3 },
      { id: 503, color: '#F5F5DC', colorName: 'BRANCO', size: 36, quantity: 0 }, 
      { id: 504, color: '#000000', colorName: 'PRETO', size: 34, quantity: 2 },
      { id: 505, color: '#000000', colorName: 'PRETO', size: 35, quantity: 4 },
      { id: 506, color: '#000000', colorName: 'PRETO', size: 36, quantity: 1 },
    ],
  },
  {
    id: 6,
    primaryImage: `${import.meta.env.BASE_URL}images/moreProducts/3a.jpg`,
    secondaryImage: `${import.meta.env.BASE_URL}images/moreProducts/3b.jpg`,
    name: 'MOCK NAME 6',
    price: 740.00,
    installments: '5x de R$ 148,00',
    altText: 'Produto',
    variants: [
      { id: 601, color: '#FF0000', colorName: 'VERMELHO', size: 34, quantity: 5 },
      { id: 602, color: '#FF0000', colorName: 'VERMELHO', size: 35, quantity: 3 },
      { id: 603, color: '#FF0000', colorName: 'VERMELHO', size: 36, quantity: 0 }, 
      { id: 604, color: '#A9A9A9', colorName: 'CINZA', size: 34, quantity: 2 },
      { id: 605, color: '#A9A9A9', colorName: 'CINZA', size: 35, quantity: 4 },
      { id: 606, color: '#A9A9A9', colorName: 'CINZA', size: 36, quantity: 1 },
    ],
  },
  {
    id: 7,
    primaryImage: `${import.meta.env.BASE_URL}images/moreProducts/4a.jpg`,
    secondaryImage: `${import.meta.env.BASE_URL}images/moreProducts/4b.jpg`,
    name: 'MOCK NAME 7',
    price: 270.00,
    installments: '5x de R$ 56,00',
    altText: 'Produto',
    variants: [
      { id: 701, color: '#FFFFFF', colorName: 'BRANCO', size: 34, quantity: 5 },
      { id: 702, color: '#FFFFFF', colorName: 'BRANCO', size: 35, quantity: 3 },
      { id: 703, color: '#FFFFFF', colorName: 'BRANCO', size: 36, quantity: 0 }, 
      { id: 704, color: '#000000', colorName: 'PRETO', size: 34, quantity: 2 },
      { id: 705, color: '#000000', colorName: 'PRETO', size: 35, quantity: 4 },
      { id: 706, color: '#000000', colorName: 'PRETO', size: 36, quantity: 1 },
    ],
  },
  {
    id: 8,
    primaryImage: `${import.meta.env.BASE_URL}images/moreProducts/5a.jpg`,
    secondaryImage: `${import.meta.env.BASE_URL}images/moreProducts/5b.jpg`,
    name: 'MOCK NAME 8',
    price: 269.90,
    installments: '5x de R$ 56,00',
    altText: 'Produto',
    variants: [
      { id: 801, color: '#8B4513', colorName: 'MARROM', size: 34, quantity: 2 },
      { id: 802, color: '#8B4513', colorName: 'MARROM', size: 35, quantity: 4 },
      { id: 803, color: '#8B4513', colorName: 'MARROM', size: 36, quantity: 1 },
    ],
  },
  {
    id: 9,
    primaryImage: `${import.meta.env.BASE_URL}images/moreProducts/6a.jpg`,
    secondaryImage: `${import.meta.env.BASE_URL}images/moreProducts/6b.jpg`,
    name: 'MOCK NAME 9',
    price: 320.00,
    installments: '5x de R$ 64,00',
    altText: 'Produto',
    variants: [
      { id: 901, color: '#FFD700', colorName: 'MOSTARDA', size: 34, quantity: 8 },
      { id: 902, color: '#FFD700', colorName: 'MOSTARDA', size: 35, quantity: 6 },
      { id: 903, color: '#FFD700', colorName: 'MOSTARDA', size: 36, quantity: 3 },
      { id: 904, color: '#000000', colorName: 'PRETO', size: 34, quantity: 4 },
      { id: 905, color: '#000000', colorName: 'PRETO', size: 35, quantity: 2 },
      { id: 906, color: '#000000', colorName: 'PRETO', size: 36, quantity: 0 }, 
    ],
  },
  {
    id: 10,
    primaryImage: `${import.meta.env.BASE_URL}images/moreProducts/7a.jpg`,
    secondaryImage: `${import.meta.env.BASE_URL}images/moreProducts/7b.jpg`,
    name: 'MOCK NAME 10',
    price: 189.90,
    installments: '3x de R$ 63,33',
    altText: 'Produto',
    variants: [
      { id: 1001, color: '#87CEEB', colorName: 'AZUL', size: 34, quantity: 10 },
      { id: 1002, color: '#87CEEB', colorName: 'AZUL', size: 35, quantity: 5 },
      { id: 1003, color: '#87CEEB', colorName: 'AZUL', size: 36, quantity: 2 },
      { id: 1004, color: '#808080', colorName: 'CINZA', size: 34, quantity: 6 },
      { id: 1005, color: '#808080', colorName: 'CINZA', size: 35, quantity: 4 },
      { id: 1006, color: '#808080', colorName: 'CINZA', size: 36, quantity: 1 },
    ],
  },
  {
    id: 11,
    primaryImage: `${import.meta.env.BASE_URL}images/moreProducts/8a.jpg`,
    secondaryImage: `${import.meta.env.BASE_URL}images/moreProducts/8b.jpg`,
    name: 'MOCK NAME 11',
    price: 450.00,
    installments: '5x de R$ 90,00',
    altText: 'Produto',
    variants: [
      { id: 1101, color: '#FF4500', colorName: 'LARANJA', size: 34, quantity: 2 },
      { id: 1102, color: '#FF4500', colorName: 'LARANJA', size: 35, quantity: 0 }, 
      { id: 1103, color: '#FF4500', colorName: 'LARANJA', size: 36, quantity: 5 },
      { id: 1104, color: '#2E8B57', colorName: 'VERDE', size: 34, quantity: 3 },
      { id: 1105, color: '#2E8B57', colorName: 'VERDE', size: 35, quantity: 7 },
      { id: 1106, color: '#2E8B57', colorName: 'VERDE', size: 36, quantity: 4 },
    ],
  },
  {
    id: 12,
    primaryImage: `${import.meta.env.BASE_URL}images/moreProducts/9a.jpg`,
    secondaryImage: `${import.meta.env.BASE_URL}images/moreProducts/9b.jpg`,
    name: 'MOCK NAME 12',
    price: 289.90,
    installments: '4x de R$ 72,50',
    altText: 'Produto',
    variants: [
      { id: 1201, color: '#FF1493', colorName: 'ROSA', size: 34, quantity: 5 },
      { id: 1202, color: '#FF1493', colorName: 'ROSA', size: 35, quantity: 2 },
      { id: 1203, color: '#FF1493', colorName: 'ROSA', size: 36, quantity: 0 }, 
      { id: 1204, color: '#4B0082', colorName: 'ROXO', size: 34, quantity: 3 },
      { id: 1205, color: '#4B0082', colorName: 'ROXO', size: 35, quantity: 4 },
      { id: 1206, color: '#4B0082', colorName: 'ROXO', size: 36, quantity: 6 },
    ],
  },
  {
    id: 13,
    primaryImage: `${import.meta.env.BASE_URL}images/moreProducts/10a.jpg`,
    secondaryImage: `${import.meta.env.BASE_URL}images/moreProducts/10b.jpg`,
    name: 'MOCK NAME 13',
    price: 529.90,
    installments: '6x de R$ 88,33',
    altText: 'Produto',
    variants: [
      { id: 1301, color: '#8A2BE2', colorName: 'LILÁS', size: 34, quantity: 4 },
      { id: 1302, color: '#8A2BE2', colorName: 'LILÁS', size: 35, quantity: 6 },
      { id: 1303, color: '#8A2BE2', colorName: 'LILÁS', size: 36, quantity: 3 },
      { id: 1304, color: '#5F9EA0', colorName: 'VERDE', size: 34, quantity: 7 },
      { id: 1305, color: '#5F9EA0', colorName: 'VERDE', size: 35, quantity: 5 },
      { id: 1306, color: '#5F9EA0', colorName: 'VERDE', size: 36, quantity: 2 },
    ],
  },
  {
    id: 14,
    primaryImage: `${import.meta.env.BASE_URL}images/moreProducts/11a.jpg`,
    secondaryImage: `${import.meta.env.BASE_URL}images/moreProducts/11b.jpg`,
    name: 'MOCK NAME 14',
    price: 410.10,
    installments: '5x de R$ 82,00',
    altText: 'Produto',
    variants: [
      { id: 1401, color: '#DC143C', colorName: 'ROSA', size: 34, quantity: 5 },
      { id: 1402, color: '#DC143C', colorName: 'ROSA', size: 35, quantity: 3 },
      { id: 1403, color: '#DC143C', colorName: 'ROSA', size: 36, quantity: 2 },
      { id: 1404, color: '#FFDAB9', colorName: 'SALMÃO', size: 34, quantity: 6 },
      { id: 1405, color: '#FFDAB9', colorName: 'SALMÃO', size: 35, quantity: 4 },
      { id: 1406, color: '#FFDAB9', colorName: 'SALMÃO', size: 36, quantity: 1 },
    ],
  },
  {
    id: 15,
    primaryImage: `${import.meta.env.BASE_URL}images/moreProducts/12a.jpg`,
    secondaryImage: `${import.meta.env.BASE_URL}images/moreProducts/12b.jpg`,
    name: 'MOCK NAME 15',
    price: 359.99,
    installments: '4x de R$ 90,00',
    altText: 'Produto',
    variants: [
      { id: 1501, color: '#800080', colorName: 'ROXO', size: 34, quantity: 8 },
      { id: 1502, color: '#800080', colorName: 'ROXO', size: 35, quantity: 5 },
      { id: 1503, color: '#800080', colorName: 'ROXO', size: 36, quantity: 3 },
      { id: 1504, color: '#4682B4', colorName: 'AZUL', size: 34, quantity: 7 },
      { id: 1505, color: '#4682B4', colorName: 'AZUL', size: 35, quantity: 2 },
      { id: 1506, color: '#4682B4', colorName: 'AZUL', size: 36, quantity: 0 },
    ],
  },
];

/*  
- Preciso ajeitar o alinhamento em relação a tamanhos de títulos diferentes:
CALÇA JEANS SKINNY PREMIUM AZUL CLARO
CAMISA SOCIAL SLIM FIT ALGODÃO BRANCA
VESTIDO MIDI LISTRADO ALGODÃO FLORAL
BLAZER AKATSUKI PRETO JERSEY
ROUPÃO AKATSUKI VERMELHO FLEECE
BLAZER AZUL CRUZEIRO ALFA
VIBRAÇÕES BOHEMIAN COM TOQUE MEDIEVAL
ÓCULOS DYSTOPIANOS NA PEGADA HIPPIE
MACACÃO LEGGING FITNESS ALTA COMPRESSÃO
CAPACETA DAFT CUNT OFICIAL
LASER CYCLOP + ESPADA STAR WARS
ÓCULOS DE SOL QUADRADO ARMAÇÃO PRATA
RAY-BAN NEURO LINK TARTARUGA
CAFÉ DA MANHÃ NA FERRARI ROSA
PRAIA ESTAMPA TROPICAL AZUL NA SOMBRA

- Os id's das variants seriam únicos e + ou - randômicos num database
*/
