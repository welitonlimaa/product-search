const Product = require('../models/productModel');

const services = require('../services/productService');

const insertProducts = async (req, res) => {
  try {
    const { body } = req;
    const result = await Product.create(body);
    return res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: 'erro interno', error });
  }
};

const getProducts = async (req, res) => {
  try {
    const { website, category, searchFor } = req.params;

    const result = await services.getProducts({ website, category, searchFor });

    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'erro interno', error });
  }
};

module.exports = {
  insertProducts,
  getProducts
}