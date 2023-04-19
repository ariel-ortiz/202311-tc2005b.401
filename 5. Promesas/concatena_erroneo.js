const fs = require('fs');

function main() {
  let resultado = '';
  console.log('inicio del main');
  fs.readFile('001.txt', (err, data) => {
    if (err) {
      throw err;
    }
    resultado += data.toString();
  });
  fs.readFile('002.txt', (err, data) => {
    if (err) {
      throw err;
    }
    resultado += data.toString();
  });
  fs.readFile('003.txt', (err, data) => {
    if (err) {
      throw err;
    }
    resultado += data.toString();
  });
  fs.writeFile('result_bad.txt', resultado.toString(), err => {
    if (err) {
      throw err;
    }
    console.log('Archivo creado');
  });
  console.log('fin del main');
}

main();