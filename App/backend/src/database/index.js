const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:8081/productsearch');

mongoose.Promise = global.Promise;

module.exports = mongoose;