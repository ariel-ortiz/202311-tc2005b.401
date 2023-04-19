function add1(x) {
  return x + 1;
}

const sub1 = x => x - 1;

function isEven(x) {
  return x % 2 === 0;
}

function doubleApply(f, x) {
  return f(f(x));
}

console.log(add1(5) + add1(10));
console.log(sub1(5));

let a = [4, 8, 15, 16, 23, 42];
let b = a.map(add1);
console.log(b);
let c = a.filter(n => n % 2 === 0);
console.log(c);

console.log(doubleApply(w => w * w, 10));

let d = a.reduce((accum, x) => accum + x, 0);
console.log(d);