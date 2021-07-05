const assert = require('assert');
const request = require('supertest');
const sinon = require('sinon');

const app = require('../../app');

describe('API route', () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(console, 'log');
    sandbox.stub(console, 'info');
    sandbox.stub(console, 'error');
  });
  afterEach(() => {
    sandbox.restore();
  });
  describe('Welcome', () => {
    it('Should return welcome message', async () => {
      const res = await request(app).get('/');
      assert.strictEqual(res.statusCode, 200);
      assert.strictEqual(res.body.message, 'Welcome to XenElectronic');
    });
  });

  describe('Not Found', () => {
    it('Should return error not found with status 404', async () => {
      const res = await request(app).get('/not-found');
      assert.strictEqual(res.statusCode, 404);
    });
  });
});
