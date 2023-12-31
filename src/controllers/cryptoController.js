const cryptoService = require('../services/cryptoService');

exports.getTopCryptos = async (req, res, next) => {
  try {
    const cryptos = await cryptoService.getTop100Cryptos();
    res.json(cryptos);
  } catch (error) {
    next(error);
  }
};

exports.convertCurrency = async (req, res, next) => {
  try {
    const result = await cryptoService.convertCurrency(req.query);
    console.log(req.query);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
