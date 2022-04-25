import { API } from '../config';

export const submitFuelQuote = (gallonsRequested, deliveryAddress, deliveryDate, suggestedPricePerGallon, totalAmountDue, userId) => {
    return fetch(`${API}/submit-fuel-quote/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            gallonsRequested,
            deliveryAddress,
            deliveryDate,
            suggestedPricePerGallon,
            totalAmountDue,
            userId
        })
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err));
};

export const getFuelQuoteData = (userId) => {
    return fetch(`${API}/get-fuel-quote-data`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({userId: userId})
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getSuggestedPrice = (userId, gallonsRequested) => {
    return fetch (`${API}/get-suggested-price/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({gallonsRequested: gallonsRequested})
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
