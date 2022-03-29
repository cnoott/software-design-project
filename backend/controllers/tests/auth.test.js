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

