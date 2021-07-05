const controllerWrapper = (fn) => async (req, res) => {
  const payload = {
    context: req.context,
    body: req.body,
    query: req.query,
    params: req.params,
  };

  const result = await fn(payload);
  return res.status(200).json({
    statusCode: 200,
    data: result,
  });
};

module.exports = {
  controllerWrapper,
};
