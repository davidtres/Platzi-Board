import { catchError, mergeMap, of, takeUntil, timer } from "rxjs";
import { fromFetch } from "rxjs/fetch";

//Para implementar en PlatziWordle
// fetch(urlWord)
//   .then((response) => response.json())
//   .then((data) => console.log(data));
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlWord =
  "https://clientes.api.greenborn.com.ar/public-random-word?c=1&l=5";

const getFetch$ = fromFetch(urlWord).pipe(
  mergeMap((response) => {
    return response.json();
  }),
  catchError((err) => of(err)),
  takeUntil(timer(3000))
);

getFetch$.subscribe(console.log);
