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

exports.submitFuelQuote = (req, res) => {
    console.log(req.body);
    const { gallonsRequested, deliveryAddress, deliveryDate, suggestedPricePerGallon, totalAmountDue, userId } = req.body;

    const data = { gallonsRequested, deliveryAddress, deliveryDate, suggestedPricePerGallon, totalAmountDue, userId };
    let fuelQuote = new FuelQuote(data);
    fuelQuote.save((err, result) => {
        if (err) {
            return res.status(400).json({
                error: 'Error saving new fuel quote + ' + err
            });
        }
        return res.json({
            result
        });
    });

};
