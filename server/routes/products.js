const express = require('express');

const router = express.Router();

const { controllerWrapper } = require('../helpers/express');
const controller = require('../controllers/product');

router.post('/', controllerWrapper(controller.create));
router.get('/', controllerWrapper(controller.getList));
router.get('/:id', controllerWrapper(controller.getById));

module.exports = router;
