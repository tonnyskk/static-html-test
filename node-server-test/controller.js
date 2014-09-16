var querystring = require("querystring");

function home(response, postData) {
	response.writeHead(302, {'Location': '../array.html'});
	response.end();
}

function capitalize(response, postData) {
    response.writeHead(302, {'Location': '../capitalize.html'});
    response.end();
}

function overflow(response, postData) {
    response.writeHead(302, {'Location': '../overflow-style.html'});
    response.end();
}

exports.home = home;
exports.capitalize = capitalize;
exports.overflow = overflow;
