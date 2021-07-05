const { category: Category } = require('../models');

const get = async () => {
  const result = await Category.findAll();

  return result;
};

module.exports = {
  get,
};
