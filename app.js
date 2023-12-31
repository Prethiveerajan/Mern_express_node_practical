const express = require('express');

const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.post('/', (req, res) => {
  res.send('Received a POST request');
});


app.put('/', (req, res) => {
  res.send('Received a PUT request');
});

app.delete('/', (req, res) => {
  res.send('Received a DELETE request');
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
