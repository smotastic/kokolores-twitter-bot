const Twitter = require('twitter-lite');
const config = require('./config.js');

const getBearerToken = async () => {
    const user = new Twitter({
        consumer_key: config.consumer_key,
        consumer_secret: config.consumer_secret
    });
    const response = await user.getBearerToken();
    
    return response.access_token;

}

module.exports = getBearerToken;