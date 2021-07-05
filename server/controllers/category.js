const { category: Category } = require('../models');

const getList = async () => {
  const result = await Category.findAll();
  return result;
};

module.exports = {
  getList,
};
