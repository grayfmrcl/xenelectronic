const dotenv = require('dotenv');

const databaseConfig = require('./database');

dotenv.config();

const appConfig = {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
};

module.exports = {
  app: appConfig,
  database: databaseConfig,
};
