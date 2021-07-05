const assert = require('assert');
const sinon = require('sinon');

const { controllerWrapper } = require('../../helpers/express');

describe('Express helper', () => {
  let sandbox;
  let mockRequest;
  let mockResponse;
  let mockController;
  const result = { message: 'Hello World!' };
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    mockRequest = (payload) => ({ ...payload });
    mockResponse = () => {
      const res = {};
      res.status = sandbox.stub().returns(res);
      res.json = sandbox.stub().returns(res);
      return res;
    };
    mockController = () => sandbox.stub()
      .resolves(result);
  });
  afterEach(() => {
    sandbox.restore();
  });
  describe('controllerWrapper', () => {
    it('Should properly call res.status and res.json', async () => {
      const req = mockRequest();
      const res = mockResponse();
      const controller = mockController();
      await controllerWrapper(controller)(req, res);
      assert.strictEqual(true, res.status.calledWith(200));
      assert.strictEqual(true, res.json.calledWith({
        statusCode: 200,
        data: result,
      }));
    });
  });
});
