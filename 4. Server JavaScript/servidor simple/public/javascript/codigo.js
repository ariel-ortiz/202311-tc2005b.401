/* global num1, num2, textoSalida, entradas, salida */

function calcular() {
  let x = num1.value || 1;
  let y = num2.value || 1;
  // console.log("Calcular:", x, y);

  const xhr = new XMLHttpRequest();
  xhr.onload = () => {
    let body = JSON.parse(xhr.responseText);
    console.log(body);
    if (body.status == 'ok') {
      textoSalida.innerText = `El máximo común divisor de ${x} y ${y} es ${body.result}.`;
    } else {
      textoSalida.innerText = body.message;
    }
    entradas.style.display = 'none';
    salida.style.display = 'block';
  };
  xhr.open('GET', `/gcd/${x}/${y}`);
  xhr.send();
}