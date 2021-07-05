/* eslint-disable global-require */
const assert = require('assert');
const request = require('supertest');

const app = require('../../app');
const { category: Category } = require('../../models');

const date = '2021-07-04T00:00:00.000Z';

const categories = [{
  id: '2a0a2b5f-2577-482c-b7a1-420f3f6ab7e4',
  name: 'Category 1',
  createdAt: date,
  updatedAt: date,
}, {
  id: '2cdf778a-2dbb-425f-8395-e9fc0bbadc41',
  name: 'Category 2',
  createdAt: date,
  updatedAt: date,
}, {
  id: '319aad29-a505-4712-b3e7-b2100c208c4c',
  name: 'Category 3',
  createdAt: date,
  updatedAt: date,
}];

const response = {
  statusCode: 200,
  data: [...categories],
};

describe('Categories route', () => {
  beforeEach(async () => {
    await Category.truncate();
    await Category.bulkCreate(categories);
  });
  describe('GET /categories', () => {
    it('Should get list of categories', async () => {
      const result = await request(app).get('/categories');
      assert.strictEqual(result.statusCode, 200);
      assert.deepStrictEqual(result.body, response);
    });
  });
});
