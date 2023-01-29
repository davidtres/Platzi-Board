import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

const canvas = document.getElementById("reactive-canvas");
let cursorPosition = { x: 0, y: 0 };
const onMouseDown$ = fromEvent(canvas, "mousedown").pipe(
  map((event) => {
    cursorPosition = {
      x: event.clientX - canvas.offsetLeft,
      y: event.clientY - canvas.offsetTop,
    };
    console.log(cursorPosition);
    // console.log({ x: event.clientX, y: event.clientY });
    // console.log({ x: canvas.offsetLeft, y: canvas.offsetTop });
  })
);
const onMouseMove$ = fromEvent(canvas, "mousemove");
const onMouseUp$ = fromEvent(canvas, "mousup");

onMouseDown$.subscribe();

const canvasContext = canvas.getContext("2d");
canvasContext.lineWidth = 8;
canvasContext.strokeStyle = "white";
canvasContext.beginPath();
canvasContext.moveTo(0, 0);
canvasContext.lineTo(100, 100);
canvasContext.stroke();
canvasContext.closePath();
