const mongoose = require('mongoose');

// for settign env variables
const dotenv = require('dotenv');
// setting config path
dotenv.config({ path: './config.env' });

const app = require('./app');

const port = 5000;

const server = app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
