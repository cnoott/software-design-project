const { signup, signin, signout, requireSignin, isAuth } = require('../auth');
const httpMocks = require('node-mocks-http');

test('supposed to create new user',async () => {
    const request = httpMocks.createRequest({
        method: 'POST',
        url: '/signup',
        body: {username: 'testuser1', passsword: 'pizza'}
   });

    const response = httpMocks.createResponse();

    signup(request, response, err => {
        expect(err).toBeFalsy();
    });

});

//ROLO
test('supposed to singin', async () => {
    const request = httpMocks.createRequest({
        method: 'POST',
        url: '/signin',
        body: {username: 'testuser1', password: 'pizza'}
    });

    const response = httpMocks.createResponse();

    signin(request, response, err => {
        except(err).toBeFalsy();
    });
});

//ROLO
test('suppsoed to signout', async () => {
    const request = httpMocks.createRequest({
        method: 'GET',
        url: '/signout'
    });

    const response = httpMocks.createResponse();

    signout(request, response, err => {
        except(err).toBeFalsy();
    });

});
