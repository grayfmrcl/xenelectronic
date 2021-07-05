const identity = require('../helpers/identity');

const {
  product: Product,
  category: Category,
} = require('../models');

const create = async (payload) => {
  const product = {
    ...payload.body,
    id: identity.uuid(),
  };
  const result = await Product.create(product);
  return result;
};

const getList = async () => {
  const result = await Product.findAll({
    include: {
      attributes: ['id', 'name'],
      model: Category,
      as: 'category',
    },
    orders: [
      ['id', 'desc'],
    ],
  });
  return result;
};

const getById = async (id) => {
  const result = await Product.findByPk(id, {
    include: {
      attributes: ['id', 'name'],
      model: Category,
      as: 'category',
    },
  });
  return result;
};

module.exports = {
  create,
  getList,
  getById,
};
