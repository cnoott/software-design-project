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
