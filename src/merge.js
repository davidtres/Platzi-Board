import { fromEvent, interval, from } from "rxjs";
import { mergeAll, mergeWith, mergeMap, map } from "rxjs/operators";

// Ejercicios con los operadores mergeAll, mergeWith, mergeMap,

// Uso mergeWidth
const onClick1$ = fromEvent(document, "click").pipe(
  map((event) => event.type) // "click"
);
const onMouseMove$ = fromEvent(document, "mousemove").pipe(
  map((event) => event.type) // "mousemove"
);
const eventMergeWith$ = onMouseMove$.pipe(mergeWith(onClick1$));
eventMergeWith$.subscribe((value) => {
  console.log("obs: ", value);
});

// // Uso mergeAll
const onClick2$ = fromEvent(document, "click");
const ordenSuperior$ = onClick2$.pipe(map(() => interval(1000)));
const primerOrden$ = ordenSuperior$.pipe(mergeAll());
primerOrden$.subscribe(console.log);

// // Uso mergeMap
const letters$ = from(["A", "B", "C"]);
const result$ = letters$.pipe(
  // Anidando el observable letters$ con el observable interval.
  mergeMap((letter) =>
    interval(1000).pipe(
      // Anida una letra por cada segundo
      map((second) => letter + second)
    )
  )
);

result$.subscribe(console.log);
