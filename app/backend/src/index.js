const express = require('express');
require('dotenv').config()
const cors = require('cors');
const morgan = require('morgan');

const router = require('./routers');

const PORT = process.env.PORT || 3001;

const app = express();

// app.use(
//   express.urlencoded({
//     extended: true,
//   }),
// );
app.use(cors({
  origin: '*'
}));

app.use(express.json());

app.use(morgan('tiny'));

// const accessControl = (_req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
//   res.header('Access-Control-Allow-Headers', '*');
//   next();
// };




// app.use(accessControl);
app.use('/', router);


app.listen(PORT)