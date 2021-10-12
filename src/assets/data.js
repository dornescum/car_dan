function utf8_to_b64( str ) {
	return window.btoa(unescape(encodeURIComponent( str )));
}

function b64_to_utf8( str ) {
	return decodeURIComponent(escape(window.atob( str )));
}
const number = utf8_to_b64('0762369717');
export const resultNumber = b64_to_utf8('MDc2MjM2OTcxNw==')
const email = utf8_to_b64('cristea.daniel.petrut@gmail.com');
export const resultEmail =  b64_to_utf8('Y3Jpc3RlYS5kYW5pZWwucGV0cnV0QGdtYWlsLmNvbQ==');

