const request = require('request');
const options = {
    'method': 'GET',
    'url': 'http://kokolores.herokuapp.com/'
};
const kokoloresPromise = () => {
    return new Promise((resolve, reject) => {

        request(options, function (error, response) {
            if (error) {
                reject(error);
            } else {
                resolve(JSON.parse(response.body));
            }
        });
    })
};

module.exports = kokoloresPromise;