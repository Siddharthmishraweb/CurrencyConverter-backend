const express = require('express');
const cryptoController = require('../controllers/cryptoController');

const router = express.Router();

router.get('/cryptos', cryptoController.getTopCryptos);
router.get('/convert', cryptoController.convertCurrency);

module.exports = router;
