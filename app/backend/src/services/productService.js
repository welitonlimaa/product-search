const Product = require('../models/productModel');

const mlScraping = require('../scraping/mercadoLivre');

const saveSearchProducts = async (products) => await Product.insertMany(products);

const getProducts = async ({ searchFor, category }) => {
  let products = await Product.find({
    $and: [
      { category },
      { searchTag: searchFor }
    ]
  });

  if (products.length !== 0) return products;

  products = await mlScraping({ searchFor, category });

  await saveSearchProducts(products);

  return products;
};

module.exports = {
  getProducts,
}