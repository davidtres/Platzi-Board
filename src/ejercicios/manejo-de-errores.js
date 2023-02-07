import { of } from "rxjs";
import { map, catchError, retry } from "rxjs/operators";

const letters$ = of("A", "B", "C", "D", "E").pipe(
  map((letter) => {
    if (letter === "C") {
      x = 4;
    }
    return letter;
  }),
  retry(3),
  catchError((error) => of(error.message))
);
letters$.subscribe(console.log);
