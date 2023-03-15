const express = require('express');

const app = express();
const port = 8080;
const ipAddr = '34.230.161.23';

app.get('/', (req, res) => {
  res.type('text/plain');
  res.status(200);
  res.send('hola mundo');
});

app.listen(port, () => {
  console.log(`Express inició en http://${ipAddr}:${port}`
    + '\nPresiona Ctrl-C para terminar.');
});
