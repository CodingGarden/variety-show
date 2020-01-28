const getBearerToken = require('get-twitter-bearer-token');

require('dotenv').config();

const twitter_consumer_key = process.env.TWITTER_CONSUMER_KEY;
const twitter_consumer_secret = process.env.TWITTER_CONSUMER_SECRET;
 
getBearerToken(twitter_consumer_key, twitter_consumer_secret, (err, res) => {
  if (err) {
    // handle error
    console.log(err);
    
  } else {  
    // bearer token
    console.log(res.body.access_token)
  }
})