const assert = require('assert');
const request = require('supertest');

const app = require('../app');

describe('Root API', () => {
  it('Should return welcome message', async () => {
    const res = await request(app).get('/');
    assert.strictEqual(res.statusCode, 200);
    assert.strictEqual(res.body.message, 'Welcome to XenElectronic');
  });
});
