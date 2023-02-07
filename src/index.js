import { fromEvent, merge } from "rxjs";
import { map, mergeAll, takeUntil } from "rxjs/operators";
import "../public/style.css";
// import * as distincfr from "./distinct";
// import * as merge from "./merge";
// import * as takeUntil from "./takeUntil";
// import * as errores from "./manejo-de-errores";
// import * as ajax from "./ajax";
// import * as fetch from "./ejercicios/fromFetch";
const canvas = document.getElementById("reactive-canvas");
const restartButton = document.getElementById("restart-button");
let cursorPosition = { x: 0, y: 0 };

const updateCursorPosition = (event) => {
  cursorPosition = {
    x: event.clientX - canvas.offsetLeft,
    y: event.clientY - canvas.offsetTop,
  };
};

const onMouseDown$ = fromEvent(canvas, "mousedown");
const onMouseUp$ = fromEvent(document, "mouseup");
const onMouseMove$ = fromEvent(canvas, "mousemove").pipe(takeUntil(onMouseUp$));

let onMouseDownSuscription = onMouseDown$.subscribe(updateCursorPosition);

const canvasContext = canvas.getContext("2d");
canvasContext.lineWidth = 5;
canvasContext.lineJoin = "round";
canvasContext.lineCap = "round";
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

let startPaintSuscription = startPaint$.subscribe(paintStroke);

const onLoadWindow$ = fromEvent(window, "load");
const restartClick$ = fromEvent(restartButton, "click");

const restartWhiteBoard$ = merge(onLoadWindow$, restartClick$);

restartWhiteBoard$.subscribe(() => {
  startPaintSuscription.unsubscribe();
  onMouseDownSuscription.unsubscribe();

  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  onMouseDownSuscription = onMouseDown$.subscribe(updateCursorPosition);
  startPaintSuscription = startPaint$.subscribe(paintStroke);
});
