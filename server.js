const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const fetch = require('node-fetch');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const api_url = 'https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple';

app.get('/api/hello', async (req, res) => {
  const fetched_api = await fetch(api_url);
  const json = await fetched_api.json();
  console.log('this is from the api', json)
  res.send(json);
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    'hello world',
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));