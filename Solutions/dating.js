const request = require('request');

const key = 'dc627becd123734adc4f2033c38ec414';
const url1 = 'http://challenge.code2040.org/api/dating';
const url2 = url1 + '/validate';

request.post(
	url1,
	{ form: { token: key } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
        	// convert body to valid js object
        	json = JSON.parse(JSON.stringify(eval("(" + body + ")")));
            add(json.datestamp, json.interval);
        }
    }
);

function add(datestamp, interval) {
	const date = new Date(datestamp);
	date.setSeconds(date.getSeconds() + interval);
	var newDatestamp = date.toISOString();
	newDatestamp = newDatestamp.replace('.000', '');
	// new request
	request.post(
		url2,
		{ json: { token: key, datestamp: newDatestamp } },
	    function (error, response, body) {
	        if (!error && response.statusCode == 200) {
	        	console.log(body);
	        }
	    }
	);
}
