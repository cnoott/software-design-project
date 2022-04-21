import { API } from '../config';

export const getFuelQuoteData = () => {
    return fetch(`${API}/get-fuel-quote-data`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
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
