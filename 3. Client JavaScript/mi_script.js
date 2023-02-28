let veces = 0;

function accion_boton() {
  let p = document.getElementById('mi_contenido');
  veces++;
  p.innerText = '¡Hola, Mundo! ' + veces;
}