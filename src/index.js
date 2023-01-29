import { fromEvent } from "rxjs";
import { map, mergeAll } from "rxjs/operators";
// import * as distincfr from "./distinct";
// import * as merge from "./merge";
import * as takeUntil from "./takeUntil";
const canvas = document.getElementById("reactive-canvas");
let cursorPosition = { x: 0, y: 0 };

const updateCursorPosition = (event) => {
  cursorPosition = {
    x: event.clientX - canvas.offsetLeft,
    y: event.clientY - canvas.offsetTop,
  };
};

const onMouseDown$ = fromEvent(canvas, "mousedown");
const onMouseMove$ = fromEvent(canvas, "mousemove");
const onMouseUp$ = fromEvent(canvas, "mousup");

onMouseDown$.subscribe(updateCursorPosition);

const canvasContext = canvas.getContext("2d");
canvasContext.lineWidth = 1;
canvasContext.strokeStyle = "white";

const paintStroke = (event) => {
  canvasContext.beginPath();
  canvasContext.moveTo(cursorPosition.x, cursorPosition.y);
  updateCursorPosition(event);
  canvasContext.lineTo(cursorPosition.x, cursorPosition.y);
  canvasContext.stroke();
  canvasContext.closePath();
};

const startPaint$ = onMouseDown$.pipe(
  map(() => onMouseMove$),
  mergeAll()
);

startPaint$.subscribe(paintStroke);
