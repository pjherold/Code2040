const request = require('request');

const key = 'dc627becd123734adc4f2033c38ec414';
const url1 = 'http://challenge.code2040.org/api/prefix';
const url2 = url1 + '/validate';

request.post(
	url1,
	{ form: { token: key } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
        	// convert body to valid js object
        	json = JSON.parse(JSON.stringify(eval("(" + body + ")")));
            filter(json.prefix, json.array);
        }
    }
);

function filter(prefix, array) {
	newArray = array.filter(string => !string.startsWith(prefix));
	// new request
	request.post(
		url2,
		{ json: { token: key, array: newArray } },
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
