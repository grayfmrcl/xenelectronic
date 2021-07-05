const identity = require('../helpers/identity');

const { product: Product } = require('../models');

const create = async (payload) => {
  const product = {
    ...payload.body,
    id: identity.uuid(),
  };
  const result = await Product.create(product);
  return result;
};

const getList = async () => {
  const result = await Product.findAll();
  return result;
};

module.exports = {
  create,
  getList,
};
