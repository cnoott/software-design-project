const FuelQuote = require('../models/fuel_quote');


//LIAMM
exports.getFuelQuoteData = (req, res) => { 
    return res.json({
        gallonsRequested: 3,
        deliveryAddress: '18002 liberton dr.',
        deliveryDate:'08/14/22',
        suggestedPricePerGallon: 5,
        totalAmountDue: 8
    });
};
