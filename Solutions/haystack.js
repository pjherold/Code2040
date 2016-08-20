const request = require('request');

const key = 'dc627becd123734adc4f2033c38ec414';
const url1 = 'http://challenge.code2040.org/api/haystack';
const url2 = url1 + '/validate';

request.post(
	url1,
	{ form: { token: key } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
        	// convert body to valid js object
        	json = JSON.parse(JSON.stringify(eval("(" + body + ")")));
            find(json.needle, json.haystack);
        }
    }
);

function find(needle, haystack) {
	var point1 = 0;
    var point2 = haystack.length - 1;
    var pos;
    while (point1 <= point2) {
        if (needle == haystack[point1]) {
            pos = point1;
            break;
        }
        else if (needle == haystack[point2]) {
            pos = point2;
            break;
        }
        point1 += 1
        point2 -= 1
    }
	// new request
	request.post(
		url2,
		{ json: { token: key, needle: pos } },
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
