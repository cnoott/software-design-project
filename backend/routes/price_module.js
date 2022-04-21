const express = require('express');
const router = express.Router();


const {
    userById,
} = require('../controllers/user');





const { getSuggestedPrice } = require('../controllers/price_module');

router.post('/get-suggested-price/:userId', getSuggestedPrice);

router.param('userId', userById);
module.exports = router;

