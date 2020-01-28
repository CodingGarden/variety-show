const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const fetch = require('node-fetch');

require('dotenv').config();

const app = express();

app.use(morgan('common'));
app.use(cors({
  // origin: 'https://mycoolwebsite.com' // limit front end requests to a given origin
}));

// app.use((req, res, next) => {
//   if (req.query.key === 'secret') {
//     next();
//   } else {
//     res.status(401);
//     res.json({
//       message: 'Missing key.'
//     });
//   }
// });

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

const TWITTER_BASE_URL = 'https://api.twitter.com/1.1';

app.get('/tweets', async (req, res) => {
  const { query } = req;
  const q = (typeof query.q == 'string' && query.q.trim().length)
    ? query.q.trim() : 'coding garden';
  const response = await fetch(`${TWITTER_BASE_URL}/search/tweets.json?q=${q}`, {
    headers: {
      Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
    }
  });
  const json = await response.json();
  res.json(json);
});

app.get('/user/:username', async (req, res) => {
  let { params: { username } } = req;
  username = username.split(',')[0];
  const response = await fetch(`${TWITTER_BASE_URL}/users/lookup.json?screen_name=${username}`, {
    headers: {
      Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
    }
  });
  const json = await response.json();
  if (response.ok) {
    res.json(json[0]);
  } else {
    res.status(404);
    res.json(json);
  }
});

const port = process.env.PORT || 1228;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});