const express = require('express');
const router = express.Router();

const { getFuelQuoteData, submitFuelQuote } = require('../controllers/fuel_quote');

router.get('/get-fuel-quote-data', getFuelQuoteData);
router.post('/submit-fuel-quote', submitFuelQuote); 

module.exports = router;
