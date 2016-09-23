var texto = document.getElementById('texto_lineas')
var boton = document.getElementById('boton')

boton.addEventListener('click', dibujoPorClick) // you just pass the name of the fuction no execute this

var d = document.getElementById('dibujito') // get a element with id dibujito of the docuemtn
var ancho = d.width
var lienzo = d.getContext('2d') // method canvas define type of draw

function dibujoPorClick () {
  var x = parseInt(texto.value, 10)
  var lineas = x // var num of lineas
  var yi, xf // var yinicial and xfinal
  var espacio = ancho / lineas
  /* while (l < lineas) { // bucle while repeat the section of code since the codi
    yi = 10 * l
    xf = 10 * (l + 1)
    dibujarLinea('#AAF', 0, yi, xf, 300)
    l++
  }
  */
  for (var l = 0; l < lineas; l++) { // bucle for repeat the section of code since the codi
    yi = espacio * l
    xf = espacio * (l + 1)
    dibujarLinea('#AAF', 300, 300 - yi, 300 - xf, 0)
  }
  dibujarLinea('#AFA', 1, 1, ancho - 1, 1)
  dibujarLinea('#AFA', ancho - 1, 1, ancho - 1, ancho - 1)
}

function dibujarLinea (color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath() // beginPath start a draw
  lienzo.strokeStyle = color // strokeStyle is a properity of lienzo
  lienzo.moveTo(xinicial, yinicial)
  lienzo.lineTo(xfinal, yfinal) // draw a line
  lienzo.stroke() // function draw the line on canvas
  lienzo.closePath() // closePath finish a draw
}
