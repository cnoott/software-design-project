const mongoose = require('mongoose');
const { v1: uuidv1 } = require('uuid');
const { ObjectId } = mongoose.Schema;
const fuelQuoteSchema = new mongoose.Schema({
	gallonsRequested: {
		type: Number,
		required: true,
	},
	deliveryAddress: {
		type: String,
		required: true
	},
	deliveryDate: {
		type: String,
		required: true
	},
	suggestedPricePerGallon: {
		type: Number,
		required: true
	},
	totalAmountDue: {
		type: Number
	}
},
	{ timestamps: true }
);
module.exports = mongoose.model('FuelQuote', fuelQuoteSchema);