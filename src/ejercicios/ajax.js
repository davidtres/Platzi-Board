import { ajax } from "rxjs/ajax";
import { of, map, catchError } from "rxjs";

const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const pokemonDitto$ = ajax(url).pipe(
  map((response) => console.log("response: ", response)),
  catchError((error) => {
    console.log("error: ", error);
    return of(error);
  })
);

pokemonDitto$.subscribe(console.log);
