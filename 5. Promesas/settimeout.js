console.log('inicio');
setTimeout(() => {
  console.log('uno');
}, 5000);
setTimeout(() => {
  console.log('dos');
  setTimeout(() => {
    console.log('tres');
  }, 500)
}, 2000);
console.log('final');