const express = require('express');

const { insertProducts, getProducts } = require('../controllers/productController');

const router = express.Router();

router.post('/', getProducts);

router.post('/insert', insertProducts);

module.exports = router;