let http = require('http');

function fetch(url, path) {
    return new Promise(function (resolve, reject) {
        http.get({
            host: url,
            path: path
        },
        function (response) {
            let str = '';

            response.on('data', function (chunk) {
                str += chunk;
            });

            response.on('end', function () {
                resolve(str);
            });

            response.on('error', function (err) {
                console.log(err);
                reject(err);
            });
        })
    });
}
module.exports = fetch;