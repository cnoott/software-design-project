const express = require('express');
const router = express.Router();

const { getFuelQuoteData } = require('../controllers/fuel_quote');

router.get('/get-fuel-quote-data', getFuelQuoteData);

module.exports = router;
