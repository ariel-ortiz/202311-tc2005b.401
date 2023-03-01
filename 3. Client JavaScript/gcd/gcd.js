const entradas = document.getElementById('entradas');
const salida = document.getElementById('salida');
const entrada1 = document.getElementById('entrada1');
const entrada2 = document.getElementById('entrada2');
const resultado = document.getElementById('resultado');


function calcular_gcd() {
  let x = parseInt(entrada1.value.trim()) || 0;
  let y = parseInt(entrada2.value.trim()) || 0;
  let z = gcd(x, y);
  resultado.innerText = `El MCD de ${x} y ${y} es ${z}.`;
  entradas.style.display = 'none';
  salida.style.display = 'block';
}

// Tomado de https://www.freecodecamp.org/news/euclidian-gcd-algorithm-greatest-common-divisor/
function gcd(a, b) {
  let r;
  while ((a % b) > 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return b;
}
