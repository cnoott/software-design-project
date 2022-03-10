const mongoose = require('mongoose');
const { v1: uuidv1 } = require('uuid');
const { ObjectId } = mongoose.Schema;

const priceModuleSchema = new mongoose.Schema({

    locationFactor:{
        type: Number,
        required: true,

    },

    rateHistoryFactor:{
        type: Number,
        required: true,
        //check if client has history if yes -1% if no 0%

    },

    gallonsRequestedFactor:{
        type: Number,
        required: true,
        //if 10000> 2% if below 3%
    },

    companyProfitFactor:{
        type:Number,
        required: true,
        //always 10%
    },

    currentPriceFactor:{
        type: Number,
        required: true,
        //gicen current price per gallon by refinery 
    },


},
    {timestamps: true}
);





module.exports = mongoose.model('PriceModule', priceModuleSchema);

