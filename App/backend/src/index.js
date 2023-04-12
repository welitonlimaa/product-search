const express = require('express');
const router = require('./routers');

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  }),
);

const accessControl = (_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
  res.header('Access-Control-Allow-Headers', '*');
  next();
};

app.use(express.json());
app.use(accessControl);
app.use('/', router);


app.listen(3000)