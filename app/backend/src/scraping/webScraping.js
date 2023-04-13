const buscapeScraping = require("./buscape");
const mlScraping = require("./mercadoLivre");

const webScraping = async ({ searchFor, category, website }) => {
  const mercadoLivreProducts = await mlScraping({ searchFor, category, website })
  console.log(mercadoLivreProducts);
  const buscapeProducts = await buscapeScraping({ searchFor, category, website });
  console.log(buscapeProducts);
  const allProducts = [...mercadoLivreProducts, ...buscapeProducts];

  return allProducts;
}

module.exports = webScraping;