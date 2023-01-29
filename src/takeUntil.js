import { fromEvent } from "rxjs";
import { takeUntil } from "rxjs/operators";

const onMouseMove$ = fromEvent(document, "mousemove");
const onMouseDown$ = fromEvent(document, "mousedown");

const sourceCompletad$ = onMouseMove$.pipe(takeUntil(onMouseDown$));

sourceCompletad$.subscribe(console.log);
