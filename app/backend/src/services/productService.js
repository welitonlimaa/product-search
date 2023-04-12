const Product = require('../models/productModel');
const buscapeScraping = require('../scraping/buscape');

const mlScraping = require('../scraping/mercadoLivre');
const webScraping = require('../scraping/webScraping');

const saveSearchProducts = async (products) => await Product.insertMany(products);

const getProducts = async ({ searchFor, category, website }) => {
  let products = await Product.find({
    $and: [
      { category },
      { searchTag: searchFor },
      { website }
    ]
  });

  if (products.length !== 0) return products;
  const searchData = { searchFor, category, website };
  if (website === 'Mercado Livre') {
    products = await mlScraping(searchData);
  } else if (website === 'Buscapé') {
    products = await buscapeScraping(searchData);
  } else {
    products = await webScraping(searchData);
  }

  await saveSearchProducts(products);

  return products;
};

module.exports = {
  getProducts,
}