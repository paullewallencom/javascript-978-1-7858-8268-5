"use strict";

var _environment = require("./environment.js");

var _additions = require("./additions.js");

var defaultLine = 'Start your journey now!';
var BR = "<br />";

var environment = new _environment.Environment();

function addToOutput() {
  var newLine = arguments.length <= 0 || arguments[0] === undefined ? defaultLine : arguments[0];

  var output = document.querySelector("#output");

  output.innerHTML = output.innerHTML + BR + newLine;
}

function onCommand(command) {
  if (command == "help") {
    _additions.options.outputOptions();
  } else if (command == "left") {
    addToOutput(environment.stumbleUpon());
  } else if (command == "right") {
    addToOutput(environment.stumbleUpon());
  } else if (command == "up") {
    addToOutput(environment.stumbleUpon());
  } else if (command == "down") {
    addToOutput(environment.stumbleUpon());
  } else {
    addToOutput(command);
  }
}

function onClickEnter() {
  var commands = document.querySelector("#commands");

  onCommand(commands.value);
}

function main() {
  var enterEl = document.querySelector("#enter");

  enterEl.addEventListener("click", onClickEnter, false);

  addToOutput();
}

main();

(0, _additions.print)("log", "hello");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oZWxsby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUVBLElBQU0sY0FBYyx5QkFBcEI7QUFDQSxJQUFNLEtBQUssUUFBWDs7QUFFQSxJQUFJLGNBQWMsOEJBQWxCOztBQUVBLFNBQVMsV0FBVCxHQUEwQztBQUFBLE1BQXJCLE9BQXFCLHlEQUFiLFdBQWE7O0FBQ3hDLE1BQUksU0FBUyxTQUFTLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBYjs7QUFFQSxTQUFPLFNBQVAsR0FBbUIsT0FBTyxTQUFQLEdBQW1CLEVBQW5CLEdBQXdCLE9BQTNDO0FBQ0Q7O0FBRUQsU0FBUyxTQUFULENBQW1CLE9BQW5CLEVBQTRCO0FBQzFCLE1BQUksV0FBVyxNQUFmLEVBQXVCO0FBQ3JCLHVCQUFRLGFBQVI7QUFDRCxHQUZELE1BRU8sSUFBSSxXQUFXLE1BQWYsRUFBdUI7QUFDNUIsZ0JBQVksWUFBWSxXQUFaLEVBQVo7QUFDRCxHQUZNLE1BRUEsSUFBSSxXQUFXLE9BQWYsRUFBd0I7QUFDN0IsZ0JBQVksWUFBWSxXQUFaLEVBQVo7QUFDRCxHQUZNLE1BRUEsSUFBSSxXQUFXLElBQWYsRUFBcUI7QUFDMUIsZ0JBQVksWUFBWSxXQUFaLEVBQVo7QUFDRCxHQUZNLE1BRUEsSUFBSSxXQUFXLE1BQWYsRUFBdUI7QUFDNUIsZ0JBQVksWUFBWSxXQUFaLEVBQVo7QUFDRCxHQUZNLE1BRUE7QUFDTCxnQkFBWSxPQUFaO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTLFlBQVQsR0FBd0I7QUFDdEIsTUFBSSxXQUFXLFNBQVMsYUFBVCxDQUF1QixXQUF2QixDQUFmOztBQUVBLFlBQVUsU0FBUyxLQUFuQjtBQUNEOztBQUVELFNBQVMsSUFBVCxHQUFnQjtBQUNkLE1BQUksVUFBVSxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDs7QUFFQSxVQUFRLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQWxDLEVBQWdELEtBQWhEOztBQUVBO0FBQ0Q7O0FBRUQ7O0FBRUEsc0JBQU0sS0FBTixFQUFhLE9BQWIiLCJmaWxlIjoiaGVsbG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Vudmlyb25tZW50fSBmcm9tIFwiLi9lbnZpcm9ubWVudC5qc1wiO1xyXG5pbXBvcnQge29wdGlvbnMsIHByaW50fSBmcm9tIFwiLi9hZGRpdGlvbnMuanNcIjtcclxuXHJcbmNvbnN0IGRlZmF1bHRMaW5lID0gJ1N0YXJ0IHlvdXIgam91cm5leSBub3chJztcclxuY29uc3QgQlIgPSBcIjxiciAvPlwiO1xyXG5cclxudmFyIGVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KCk7XHJcblxyXG5mdW5jdGlvbiBhZGRUb091dHB1dChuZXdMaW5lPWRlZmF1bHRMaW5lKSB7XHJcbiAgbGV0IG91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3V0cHV0XCIpO1xyXG5cclxuICBvdXRwdXQuaW5uZXJIVE1MID0gb3V0cHV0LmlubmVySFRNTCArIEJSICsgbmV3TGluZTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25Db21tYW5kKGNvbW1hbmQpIHtcclxuICBpZiAoY29tbWFuZCA9PSBcImhlbHBcIikge1xyXG4gICAgb3B0aW9ucy5vdXRwdXRPcHRpb25zKCk7XHJcbiAgfSBlbHNlIGlmIChjb21tYW5kID09IFwibGVmdFwiKSB7XHJcbiAgICBhZGRUb091dHB1dChlbnZpcm9ubWVudC5zdHVtYmxlVXBvbigpKTtcclxuICB9IGVsc2UgaWYgKGNvbW1hbmQgPT0gXCJyaWdodFwiKSB7XHJcbiAgICBhZGRUb091dHB1dChlbnZpcm9ubWVudC5zdHVtYmxlVXBvbigpKTtcclxuICB9IGVsc2UgaWYgKGNvbW1hbmQgPT0gXCJ1cFwiKSB7XHJcbiAgICBhZGRUb091dHB1dChlbnZpcm9ubWVudC5zdHVtYmxlVXBvbigpKTtcclxuICB9IGVsc2UgaWYgKGNvbW1hbmQgPT0gXCJkb3duXCIpIHtcclxuICAgIGFkZFRvT3V0cHV0KGVudmlyb25tZW50LnN0dW1ibGVVcG9uKCkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhZGRUb091dHB1dChjb21tYW5kKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uQ2xpY2tFbnRlcigpIHtcclxuICBsZXQgY29tbWFuZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbW1hbmRzXCIpO1xyXG5cclxuICBvbkNvbW1hbmQoY29tbWFuZHMudmFsdWUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgbGV0IGVudGVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VudGVyXCIpO1xyXG5cclxuICBlbnRlckVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrRW50ZXIsIGZhbHNlKTtcclxuXHJcbiAgYWRkVG9PdXRwdXQoKTtcclxufVxyXG5cclxubWFpbigpO1xyXG5cclxucHJpbnQoXCJsb2dcIiwgXCJoZWxsb1wiKTtcclxuIl19