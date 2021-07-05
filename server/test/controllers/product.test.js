/* eslint-disable global-require */
const assert = require('assert');
const sinon = require('sinon');

const {
  product: productModel,
  category: categoryModel,
} = require('../../models');
const productController = require('../../controllers/product');
const identityHelper = require('../../helpers/identity');

const date = '2021-07-04T00:00:00.000Z';

describe('Product controller', () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });
  afterEach(() => {
    sandbox.restore();
  });

  describe('Product Create', () => {
    it('Should call Product.create to save product', async () => {
      const uuid = '400fa6cb-25fd-435c-acfb-70fc816277c7';
      const mockPayload = {
        categoryId: '2a0a2b5f-2577-482c-b7a1-420f3f6ab7e4',
        name: 'MacBook Pro M1 13 2020',
        price: 22500000,
        imageUrl: 'https://picsum.photos/200',
      };

      const mockResult = {
        ...mockPayload,
        id: uuid,
        createdAt: date,
        updatedAt: date,
      };

      sandbox.stub(identityHelper, 'uuid').returns(uuid);

      sandbox.mock(productModel)
        .expects('create')
        .withArgs({
          ...mockPayload,
          id: uuid,
        })
        .once()
        .resolves(mockResult);

      const result = await productController.create({ body: { ...mockPayload } });
      assert.deepStrictEqual(result, mockResult);
    });
  });

  describe('Product List', () => {
    it('Should call Product.findAll to get all products', async () => {
      const products = [{
        name: 'Product 1',
        price: 10000,
        category: {
          id: 'uuid-cat-001',
          name: 'Category 1',
        },
      }, {
        name: 'Product 2',
        price: 0,
        category: {
          id: 'uuid-cat-001',
          name: 'Category 1',
        },
      }, {
        name: 'Product 3',
        price: 5000,
        category: {
          id: 'uuid-cat-002',
          name: 'Category 2',
        },
      }];

      sandbox.mock(productModel)
        .expects('findAll')
        .withArgs({
          include: {
            attributes: ['id', 'name'],
            model: categoryModel,
            as: 'category',
          },
          orders: [
            ['id', 'desc'],
          ],
        })
        .once()
        .resolves(products);

      const result = await productController.getList();
      assert.deepStrictEqual(result, products);
    });
  });

  describe('Product Detail', () => {
    it('Should call Product.findByPk to get single product', async () => {
      const product = {
        id: 'a9a17c83-e793-473c-b34d-5257aac7606e',
        categoryId: '2a0a2b5f-2577-482c-b7a1-420f3f6ab7e4',
        name: 'PlayStation 5 Disk',
        price: '8500000.00',
        imageUrl: null,
        createdAt: '2021-07-04T00:00:00.000Z',
        updatedAt: '2021-07-04T00:00:00.000Z',
      };

      sandbox.mock(productModel)
        .expects('findByPk')
        .withArgs(product.id, {
          include: {
            attributes: ['id', 'name'],
            model: categoryModel,
            as: 'category',
          },
        })
        .once()
        .resolves(product);

      const result = await productController.getById(product.id);
      assert.deepStrictEqual(result, product);
    });
  });
});
