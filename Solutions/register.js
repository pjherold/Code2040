const request = require('request');

const key = 'dc627becd123734adc4f2033c38ec414';
const url = 'http://challenge.code2040.org/api/register';
const github = 'https://github.com/pjherold/Code2040';
request.post(
	url,
	{ form: { token: key, github: github } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
);
