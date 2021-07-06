/* eslint-disable global-require */
const assert = require('assert');
const sinon = require('sinon');

const { category: categoryModel } = require('../../models');
const categoryController = require('../../controllers/category');

const mockDate = new Date('2021-07-05');

const mockCategoryList = [{
  id: 'uuid-01',
  name: 'Category 1',
  created_at: mockDate,
  updated_at: mockDate,
}, {
  id: 'uuid-02',
  name: 'Category 2',
  created_at: mockDate,
  updated_at: mockDate,
}, {
  id: 'uuid-03',
  name: 'Category 3',
  created_at: mockDate,
  updated_at: mockDate,
}];

describe('Categories controller', () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });
  afterEach(() => {
    sandbox.restore();
  });
  describe('Category List', () => {
    it('Should return response with all categories', async () => {
      sandbox.mock(categoryModel)
        .expects('findAll')
        .withArgs()
        .once()
        .resolves(mockCategoryList);

      const result = await categoryController.getList();
      assert.deepStrictEqual(result, mockCategoryList);
    });
  });
});
