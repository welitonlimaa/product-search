const buscapeScraping = require("./buscape");
const mlScraping = require("./mercadoLivre");

const webScraping = async ({ searchFor, category, website }) => {
  const mercadoLivreProducts = await mlScraping({ searchFor, category, website })

  const buscapeProducts = await buscapeScraping({ searchFor, category, website });

  const allProducts = [...mercadoLivreProducts, ...buscapeProducts];

  return allProducts;
}

module.exports = webScraping;