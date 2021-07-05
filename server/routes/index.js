const express = require('express');

const router = express.Router();
const categories = require('./categories');
const products = require('./products');

/* GET home page. */
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to XenElectronic' });
});

router.use('/categories', categories);
router.use('/products', products);

module.exports = router;
