const request = require('request');

const key = 'dc627becd123734adc4f2033c38ec414';
const url1 = 'http://challenge.code2040.org/api/reverse';
const url2 = url1 + '/validate';

request.post(
	url1,
	{ form: { token: key } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            reverse(body);
        }
    }
);

function reverse(string) {
    const newString = string.split('').reverse().join('');
	request.post(
		url2,
		{ json: { token: key, string: newString } },
	    function (error, response, body) {
	        if (!error && response.statusCode == 200) {
	        	console.log(body);
	        }
	        else{
	        	console.log(body);
	        }
	    }
	);
}
