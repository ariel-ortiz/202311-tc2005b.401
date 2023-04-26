const fsPromises = require('fs/promises');

function main() {
  let resultado = '';
  console.log('inicio del main');
  fsPromises.readFile('001.txt')
  .then(data => {
    resultado += data.toString();
    return fsPromises.readFile('002.txt');
  })
  .then(data => {
    resultado += data.toString();
    return fsPromises.readFile('003.txt');
  })
  .then(data => {
    resultado += data.toString();
    return fsPromises.writeFile('result.txt', resultado);
  })
  .then(() => {
    console.log('Archivo creado');
  })
  .catch(err => {
    console.log('Error:', err);
  });
  console.log('fin del main');
}

main();