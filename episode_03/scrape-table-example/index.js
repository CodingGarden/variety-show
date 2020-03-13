const express = require('express');

const scrapeTable = require('./scrapeTable');

const app = express();

app.get('/', async (req, res) => {
  const data = await scrapeTable();
  res.json(data);
});

app.listen(1919, () => {
  console.log('Listening at http://localhost:1919');
});