const { read, update } = require('../user.js');
const httpMocks = require('node-mocks-http');

test('tests readign user info', async () => {
	const request = httpMocks.createRequest({
		method: 'GET',
		url: '/user/622a7f3dab17cf7082bd86a'
	});

	const response = httpMocks.createResponse();

	read(request, response, err => {
		expect(err).toBeFalsy();
	});

});

test('tests updating user', async () => {
	const request = httpMocks.createRequest({
		method: 'GET',
		url: '/update-user/622a7f3dab17cf7082bd86a'
	});

	const response = httpMocks.createResponse();

	update(request, response, err => {
		expect(err).toBeFalsy();
	});
});