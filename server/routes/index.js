const express = require('express');

const router = express.Router();
const categories = require('./categories');

/* GET home page. */
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to XenElectronic' });
});

router.use('/categories', categories);

module.exports = router;
