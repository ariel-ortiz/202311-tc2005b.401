const cartas = inicia_cartas();
console.log(cartas);

function inicia_cartas() {
  const cartas = [];
  for (let palo of 'CDHS') {
    for (let i = 1; i <= 13; i++) {
      const nombre = `${palo}_${i.toString().padStart(2, '0')}.svg`;
      cartas.push(nombre);
    }
  }
  return cartas;
}