const fsPromises = require('fs/promises');

async function main() {
  try {
    let resultado = '';
    console.log('inicio del main');
    resultado += await fsPromises.readFile('001.txt');
    resultado += await fsPromises.readFile('002.txt');
    resultado += await fsPromises.readFile('003.txt');
    await fsPromises.writeFile('result.txt', resultado);
    console.log('Archivo creado');
    console.log('fin del main');
  } catch(err) {
    console.log('Error:', err);
  }
}

main();
