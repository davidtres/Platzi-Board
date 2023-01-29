# Platzi-Board

Curso de programación reactiva con Rxjs (Parte 2)

Para este curso realizamos este proyecto que se trata de un tablero para dibujar.
Usaremos canvas de html y los operadores de Rxjs para escuchar y transformar los eventos del mouse.

Así que iniciamos con el operador **fromEvent** para escuchar los eventos del mouse sobre el canvas y
luego obtenemos las coodenadas, trnaformandolas con el operador **map** para restar el las coordenadas
offsetLeft y offsetTop del canvas, para finalmente obtener las coordendas dentro del cuadro canvas que
usaremos para pintar los trazos.
