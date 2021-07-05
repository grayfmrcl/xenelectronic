module.exports = {
  development: {
    username: 'postgres',
    password: 'postgres',
    database: 'xenelectronic',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
};
