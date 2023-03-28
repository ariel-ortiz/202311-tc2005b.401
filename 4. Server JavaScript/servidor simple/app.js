const express = require('express');

const app = express();
const port = 8080;
const ipAddr = '34.230.161.23';

app.get('/', (req, res) => {
  res.type('text/plain');
  res.status(200);
  res.send('hola mundo');
});

app.get('/gcd/:num1/:num2', (req, res) => {
  let x = parseInt(req.params.num1);
  let y = parseInt(req.params.num2);
  if (isNaN(x) || isNaN(y)) {
    res.json({
      status: 'error',
      message: 'one of the input values is not a number'
    });
  } else {
    res.json({status: 'ok', result: gcd(x, y)});
  }
});

function gcd(a, b) {
  while (b != 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

// Página 404
app.use((req, res) => {
  res.type('text/plain').status(404).send('404 - Not Found');
});

app.listen(port, () => {
  console.log(`Express inició en http://${ipAddr}:${port}`
    + '\nPresiona Ctrl-C para terminar.');
});
