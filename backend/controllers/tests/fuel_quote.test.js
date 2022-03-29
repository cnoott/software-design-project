const { getFuelQuoteData } = require('../fuel_quote');
const httpMocks = require('node-mocks-http');

const expectedResult = {
    gallonsRequested: 3,
    deliveryAddress: '18002 liberton dr.',
    deliveryDate:'08/14/22',
    suggestedPricePerGallon: 5,
    totalAmountDue: 8
};

test('supposed to retrieve fuel quote information', async () => {
    const request = httpMocks.createRequest({
        method: 'GET',
        url: '/get-fuel-quote-data'
    });

    const response = httpMocks.createResponse();

    getFuelQuoteData(request, response, err => {
        expect(err).toBeFalsy();
    });
});

