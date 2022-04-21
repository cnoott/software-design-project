import { API } from './config';

export const updateUser = (user, userId, token) => {
    return fetch(`${API}/update-user/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getUserInfo = (userId) => {
    return fetch(`${API}/user/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err));
};
