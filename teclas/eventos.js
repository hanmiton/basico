var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
}

console.log(teclas)
// window.alert('todo esta bien')
document.addEventListener('keydown', dibujarTeclado) // add event keydow when you press a tecla
var cuadrito = document.getElementById('area_de_dibujo')
var lienzo = cuadrito.getContext('2d')
var x = 150
var y = 150

dibujarLinea('red', 149, 149, 151, 151, lienzo)

function dibujarLinea (color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath() // beginPath start a draw
  lienzo.strokeStyle = color // strokeStyle is a properity of lienzo
  lienzo.lineWidth = 3 // width of the linea
  lienzo.moveTo(xinicial, yinicial)
  lienzo.lineTo(xfinal, yfinal) // draw a line
  lienzo.stroke() // function draw the line on canvas
  lienzo.closePath() // closePath finish a draw
}

function dibujarTeclado (event) { // addEventListener send the event param
/*  if (event.keyCode === teclas.UP) {
    console.log('vamo pa arriba')
  }
*/
  var colorcito = 'blue'
  var movimiento = 10
  switch (event.keyCode) {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, lienzo)
      y = y - movimiento
      break
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, lienzo)
      y = y + movimiento
      break
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, lienzo)
      x = x - movimiento
      break
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, lienzo)
      x = x + movimiento
      break
    default:
      console.log('otra tecla')
      break
  }
//  window.alert('oh por dios') // alert when user press a key
}
