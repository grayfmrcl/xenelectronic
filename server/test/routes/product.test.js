/* eslint-disable global-require */
const assert = require('assert');
const request = require('supertest');

const app = require('../../app');
const {
  category: Category,
  product: Product,
} = require('../../models');

const date = '2021-07-04T00:00:00.000Z';

const category = {
  id: '2a0a2b5f-2577-482c-b7a1-420f3f6ab7e4',
  name: 'Game Console',
  createdAt: date,
  updatedAt: date,
};

describe('Categories route', () => {
  beforeEach(async () => {
    await Category.truncate({ cascade: true });
    await Product.truncate({ cascade: true });
    await Category.create(category);
  });
  afterEach(async () => {
    await Category.truncate({ cascade: true });
    await Product.truncate({ cascade: true });
  });
  describe('POST /products', () => {
    it('Should create a product', async () => {
      const result = await request(app)
        .post('/products')
        .send({
          name: 'PlayStation 5',
          price: 8500000,
          imageUrl: 'https://picsum.photos/200',
        })
        .set('Accept', 'application/json');

      assert.strictEqual(result.statusCode, 200);

      const product = await Product.findByPk(result.body.data.id, { raw: true });
      assert.strictEqual(result.body.data.categoryId, product.categoryId);
      assert.strictEqual(result.body.data.name, product.name);
      assert.strictEqual(result.body.data.price, product.price);
      assert.strictEqual(result.body.data.imageUrl, product.imageUrl);
    });
  });

  describe('GET /products', () => {
    it('Should get list of products', async () => {
      const products = [{
        id: 'a9a17c83-e793-473c-b34d-5257aac7606e',
        categoryId: category.id,
        name: 'PlayStation 5 Disk',
        price: '8500000.00',
        imageUrl: null,
        createdAt: date,
        updatedAt: date,
      }];

      const response = {
        statusCode: 200,
        data: products.map((product) => ({
          ...product,
          category: {
            id: '2a0a2b5f-2577-482c-b7a1-420f3f6ab7e4',
            name: 'Game Console',
          },
        })),
      };

      await Product.bulkCreate(products);
      const result = await request(app).get('/products');
      assert.strictEqual(result.statusCode, 200);
      assert.deepStrictEqual(result.body, response);
    });
  });

  describe('GET /products/:id', () => {
    it('Should get single product based on its id', async () => {
      const product = {
        id: 'a9a17c83-e793-473c-b34d-5257aac7606e',
        categoryId: category.id,
        name: 'PlayStation 5 Disk',
        price: '8500000.00',
        imageUrl: null,
        createdAt: date,
        updatedAt: date,
      };
      await Product.create(product);

      const response = {
        statusCode: 200,
        data: {
          ...product,
          category: {
            id: category.id,
            name: category.name,
          },
        },
      };

      const result = await request(app).get(`/products/${product.id}`);
      assert.strictEqual(result.statusCode, 200);
      assert.deepStrictEqual(result.body.data.category, response.data.category);
      assert.strictEqual(result.body.data.name, product.name);
      assert.strictEqual(result.body.data.price, product.price);
      assert.strictEqual(result.body.data.imageUrl, product.imageUrl);
    });
  });
});
