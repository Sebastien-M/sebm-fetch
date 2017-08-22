const fetch = require('./main');
let resp = fetch("dog.ceo", "/api/breeds/list/all").then(function (answer) {
    console.log(answer);
    process.exit(0);
}).catch(function (error) {
    console.error(error);
    process.exit(1);
});