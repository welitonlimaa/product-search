const mongoose = require('../database');

const Products = new mongoose.Schema({
  urlImg: { type: String },
  title: { type: String },
  description: { type: String },
  category: { type: String },
  price: { type: String },
  website: { type: String },
  urlProduct: { type: String },
  searchTag: { type: String }
});

const productModel = mongoose.model('Products', Products);

module.exports = productModel;