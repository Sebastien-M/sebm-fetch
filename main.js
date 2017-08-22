
var http = require('http');

function fetch(url, path) {
    var options = {
        host: url,
        path: path
    };
    callback = function (response) {
        var str = '';

        response.on('data', function (chunk) {
            str += chunk;
        });

        response.on('end', function () {
            console.log(str);
            return str;
        });
    }
    http.request(options, callback).end();
}
// fetch("dog.ceo","/api/breeds/list/all"); example
exports.fetch = fetch;