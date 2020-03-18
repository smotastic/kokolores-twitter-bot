const Twitter = require('twitter-lite');
const config = require('./config');
const requestKokolores = require('./requestKokolores');

const app = new Twitter(config);

requestKokolores().then(({ kokolores }) => {
    app.post('statuses/update', { status: kokolores }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });
})