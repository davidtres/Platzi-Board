# Platzi-Board

Curso de programación reactiva con Rxjs (Parte 2)
https://platzi.com/cursos/programacion-reactiva-rxjs/

Para este curso realizamos este proyecto que se trata de un tablero para dibujar.
Usaremos canvas de html y los operadores de Rxjs para escuchar y transformar los eventos del mouse.

Así que iniciamos con el operador **fromEvent** para escuchar los eventos del mouse sobre el canvas y
luego obtenemos las coodenadas, trnaformandolas con el operador **map** para restar el las coordenadas
offsetLeft y offsetTop del canvas, para finalmente obtener las coordendas dentro del cuadro canvas que
usaremos para pintar los trazos.

**Operadores de distincion**
.\src\distinct.js

- **distinct** : Evita que se emitan valores repetidos.
- **distinctUntilChanged** : emite todos los valores enviados por el observable de origen si son distintos en comparación con el último valor emitido por el observable de resultado. Es decir, lo emite siempre que el ultimo valor haya cambiado.
- **distinctUntilKeyChanged** : funciona igual que el anterior pero usando una propiedad del objeto recibido.

**Operadores de tiempo**

- **debounceTime** : Emite un valor de fuente solo después de que haya pasado un periodo de tiempo **N** en milisegundos que hemos establecido sin otra emisión de la fuente. Es decir, al recibir un nuevo valor durante el intervalo de tiempo **N**, este se reinicia y finalmente emite el ultimo valor.
- **throttleTime** : Deja pasar un valor inicial y luego ignora los valores de la fuente durante los proximos **N** milisegundos establecidos
- **auditTime** : Inicia con un temporizador y al finalizar el tiempo **N** en milisegundos establecido, se emite el ultimo valor recibido.
- **sampleTime** : Se ejecuta la función cada **N** milisegundos establecidos, y emite el ultimo valor, aunque no hayan.

**Operadores de fusión**
.\src\merge.js

- **merge** → Combina los valores de múltiples observables con un solo resultado observable. Será removido en RxJS v8 por mergeWith.
- **mergeAll** → Convierte un observable de orden superior en un observable de primer orden que entrega simultáneamente todos los valores que se emiten en los observables internos.
  .
  Observable de orden superior: Observable que emite otros observables.

-**mergeMap** → Proyecta cada valor de fuente a un observable que se fusiona en la salida del observable. Es una mezcla entre mapear un observador y luego mezclar todos los valores que han sido emitidos.

**Operadores de completado**
.\src\takeUntil.js
El operador **takeUntil** nos ayuda a completar un observable si otro observable ha emitido un valor.

**MANEJO DE ERRORES**
.\src\manejo-de-errores.js

-**catchError** : Captura errores en un observable retornando un nuevo observable o lanzando un error.

- **retry** : Reintenta ejecutar el observable cuando sucede un error. El número de reintentos lo puedes especificar.

**Peticiones HTTP con RxJS**

- **ajax** : Crea un observable para una solicitud Ajax con un objeto de solicitud con URL, encabezados, etc. o una cadena para una URL.

- **fromFetch** : es un operador para realizar peticiones HTTP que internamente utiliza Fetch API. Puede interrumpir la petición API des uscribiendo el observable con takeUntil o .unsuscribe()

Notas del curso: https://docs.google.com/document/d/1ePrxEllEAwXyWgLkyxN30VCTfQzpoYN0fuJA8nwzfjo/edit?usp=sharing
