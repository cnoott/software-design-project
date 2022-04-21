const PriceModule = require('../models/price_module');
const User = require('../controllers/user');


//LIAM
exports.getSuggestedPrice = (req, res) => {
    const { profile } = req;
    const { gallonsRequested } = req.body;

    var locationFactor = profile.state === 'TX' ? 0.02 : 0.04;
    var rateHistoryFactor = profile.fuelQuotesRequested === 0 ? 0 : 0.01;
    var gallonsRequestedFactor = gallonsRequested > 1000 ? 0.02 : 0.03;
    var companyProfitFactor = 0.1;

    var suggestedPrice = (1.50 * (locationFactor - rateHistoryFactor + gallonsRequestedFactor + companyProfitFactor)) + 1.50;

    return res.status(200).json({suggestedPrice: suggestedPrice});
};
