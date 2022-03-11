import { API } from './config';

export const updateUser = (user, userId, token) => {
    return fetch(`${API}/update-user/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: user
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
