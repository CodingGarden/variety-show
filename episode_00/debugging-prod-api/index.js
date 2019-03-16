const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello! 👋 🌎'
  });
});

app.get('/items', (req, res, next) => {
  setTimeout(() => {
    const result = Math.random();
    if (result <= 0.2) {
      res.status(500);
      res.json({
        message: '👮‍ 🚨 OH NO! 🛑 🚓'
      });
    } else {
      res.json([{
        id: 0,
        title: 'The coding cat'
      }, {
        id: 1,
        title: 'Alex'
      }, {
        id: 2,
        title: 'Mr Dan Robot'
      }, {
        id: 3,
        title: 'Terry'
      }, {
        id: 4,
        title: 'Danielle'
      }]);
    }
  }, 3000 * Math.random());
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
