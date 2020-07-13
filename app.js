const express = require('express');
const morgan = require('morgan');

const app = express();

// for logger
app.use(morgan('dev'));

// to read json data
app.use(express.json());

app.use((req, res, next) => {
  console.log('hello from the middleware 🥶 ');
  next();
});

// for the website we wish to allow to connect

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  // Request headers you wish to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

module.exports = app;
