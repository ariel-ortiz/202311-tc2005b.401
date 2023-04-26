function createPromise(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n % 2 == 0) {
        resolve(n);
      } else {
        reject(new Error(`No me gusta el número impar ${n}.`));
      }
    }, n);
  });
}

// createPromise(500)
// .then(x => {
//   console.log('Promesa resulta con', x);
//   return createPromise(600);
// })
// .then(x => {
//   console.log('Promesa resulta con', x);
//   return createPromise(701);
// })
// .then(x => {
//   console.log('Promesa resulta con', x);
// })
// .catch(err => {
//   console.log(err);
// });

async function main() {
  try {
    let x;
    x = await createPromise(500);
    console.log('Promesa resulta con', x);
    x = await createPromise(601);
    console.log('Promesa resulta con', x);
    x = await createPromise(700);
    console.log('Promesa resulta con', x);
  } catch (err) {
    console.log(err);
  }
}

main();
