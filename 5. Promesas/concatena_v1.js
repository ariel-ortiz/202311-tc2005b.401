const fs = require('fs');

function main() {
  let resultado = '';
  console.log('inicio del main');
  fs.readFile('001.txt', (err, data) => {
    if (err) {
      console.log('Error:', err);
    } else {
      resultado = data.toString();
      fs.readFile('002.txt', (err, data) => {
        if (err) {
          console.log('Error:', err);
        } else {
          resultado += data.toString();
          fs.readFile('003.txt', (err, data) => {
            if (err) {
              console.log('Error:', err);
            } else {
              resultado += data.toString();
              fs.writeFile('result.txt', resultado, err => {
                if (err) {
                  console.log('Error:', err);
                } else {
                  console.log('Archivo creado.');
                }
              })
            }
          });
        }
      });
    }
  });
  console.log('fin del main');
}

main();