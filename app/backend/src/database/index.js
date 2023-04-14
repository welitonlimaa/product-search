const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_DB_URL = process.env.MONGO_ddSTRING || 'mongodb://localhost:8081/productsearch';

mongoose.connect(MONGO_DB_URL);

mongoose.Promise = global.Promise;

module.exports = mongoose;