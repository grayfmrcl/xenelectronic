const express = require('express');

const router = express.Router();

const { controllerWrapper } = require('../helpers/express');
const controller = require('../controllers/product');

router.post('/', controllerWrapper(controller.create));

module.exports = router;
