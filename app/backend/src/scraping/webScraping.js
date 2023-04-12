const buscapeScraping = require("./buscape");
const mlScraping = require("./mercadoLivre");

const webScraping = async ({ searchFor, category }) => {
  const mercadoLivreProducts = await mlScraping({ searchFor, category })
  const buscapeProducts = await buscapeScraping({ searchFor, category });

  const allProducts = [...mercadoLivreProducts, ...buscapeProducts];

  return allProducts;
}

module.exports = webScraping;