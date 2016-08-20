const key = 'dc627becd123734adc4f2033c38ec414'
const url1 = 'http://challenge.code2040.org/api/dating';
const url2 = url1 + '/validate';

fetch(url1, {
	method: 'POST', 
	body: { token: key }
}).then(x => console.log(x));