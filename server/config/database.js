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
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
};
