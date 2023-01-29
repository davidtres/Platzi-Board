import { of } from "rxjs";
import {
  distinct,
  distinctUntilChanged,
  distinctUntilKeyChanged,
} from "rxjs/operators";

// Ejercicios con los operadores  distinct,distinctUntilChanged,distinctUntilKeyChanged,

const numbersEmited$ = of(1, 1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9, 2).pipe(
  distinct()
);

const numbersEmited2$ = of(1, 1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9, 2).pipe(
  distinctUntilChanged()
);

const numbersEmitedk$ = of(
  { k: 1 },
  { k: 1 },
  { k: 2 },
  { k: 2 },
  { k: 5 },
  { k: 1 },
  { k: 2 },
  { k: 3 },
  { k: 3 },
  { k: 1 }
).pipe(distinctUntilKeyChanged("k"));
// numbersEmited$.subscribe(console.log);
// numbersEmited2$.subscribe(console.log);
numbersEmitedk$.subscribe(console.log);
