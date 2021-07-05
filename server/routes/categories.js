const express = require('express');

const router = express.Router();

const { controllerWrapper } = require('../helpers/express');
const controller = require('../controllers/category');

/* GET home page. */
router.get('/', controllerWrapper(controller.get));

module.exports = router;
