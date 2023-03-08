const cartas = iniciaCartas();

function iniciaCartas() {
  const cartas = [];
  for (let palo of 'CDHS') {
    for (let i = 1; i <= 13; i++) {
      const nombre = `${palo}_${i.toString().padStart(2, '0')}.svg`;
      cartas.push(nombre);
    }
  }
  shuffle(cartas);
  return cartas;
}

// Tomado de:
// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let t = a[i];
    a[i] = a[j];
    a[j] = t;
  }
}

function descubreCarta() {
  if (cartas.length > 0) {
    let carta = cartas.pop();
    contador.innerText = cartas.length.toString();
    laCarta.src = 'cards/' + carta;
  } else {
    miBoton.style.display = 'none';
    reiniciar.style.display = 'block';
  }
}
