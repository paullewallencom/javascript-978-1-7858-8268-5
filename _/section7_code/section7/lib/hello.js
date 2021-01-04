"use strict";

var _environment = require("./environment.js");

var _additions = require("./additions.js");

var _multiply_list = require("./multiply_list.js");

var _echo = require("./echo.js");

var _fileprocessing = require("./fileprocessing.js");

var defaultLine = 'Start your journey now!';
var BR = "<br />";

var environment = new _environment.Environment();
var x = 0,
    y = 0;
var treasures = new WeakMap();
var tresCoords = new Set();
var _fileInput;

function addToOutput() {
  var newLine = arguments.length <= 0 || arguments[0] === undefined ? defaultLine : arguments[0];

  var output = document.querySelector("#output");

  output.innerHTML = output.innerHTML + BR + newLine;
}

function navigate(stepX, stepY) {
  var _ref = [x + stepX, y + stepY];
  x = _ref[0];
  y = _ref[1];


  var coordinates = document.querySelector("#coordinates");
  coordinates.innerHTML = x + " , " + y;
}

function catchTreasure() {
  // find treasure coordinates
  var findCoords = void 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = tresCoords[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var coords = _step.value;

      if (coords.x == x && coords.y == y) {
        findCoords = coords;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (findCoords) {
    var _treasures$get = treasures.get(findCoords);

    var name = _treasures$get.name;
    var value = _treasures$get.value;

    addToOutput("you found " + name + ", it's " + value + " gold");
  }
}

function onCommand(command) {
  if (command == "help") {
    _additions.options.outputOptions(addToOutput);
  } else if (command == "left") {
    navigate(-1, 0);
    addToOutput(environment.stumbleUpon());
  } else if (command == "right") {
    navigate(1, 0);
    addToOutput(environment.stumbleUpon());
  } else if (command == "up") {
    navigate(0, 1);
    addToOutput(environment.stumbleUpon());
  } else if (command == "down") {
    navigate(0, -1);
    addToOutput(environment.stumbleUpon());
  } else if (command == "poke") {
    addToOutput(environment.poke());
  } else {
    addToOutput(command);
  }
  catchTreasure();
}

function onClickEnter() {
  var commands = document.querySelector("#commands");

  onCommand(commands.value);
}

function main() {
  var enterEl = document.querySelector("#enter");
  enterEl.addEventListener("click", onClickEnter, false);

  addToOutput();

  _fileInput = document.querySelector("#files");
  _fileInput.onchange = function () {
    (0, _fileprocessing.onChange)(_fileInput.files, tresCoords, treasures);
  };
  // fill in some treasures
  var coordinate1 = { x: 2, y: 2 };
  tresCoords.add(coordinate1);
  treasures.set(coordinate1, { name: "treasure chest", value: 100 });
  var coordinate2 = { x: 2, y: 0 };
  tresCoords.add(coordinate2);
  treasures.set(coordinate2, { name: "medaillon", value: 10 });
}

main();

(0, _additions.print)("log", "hello");
(0, _additions.print)("symbols", Object.getOwnPropertySymbols(_additions.options));

// RUN as a list ...
var multiplyList = new _multiply_list.MultiplyList([1, 4, "", 5, 1], 2);

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = multiplyList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var value = _step2.value;

    (0, _additions.print)("list", value);
  }

  // Asynchronous generators
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

(0, _echo.runnableLogs)();
//# sourceMappingURL=data:application/json;base64,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ekIsRUFBa0MsWUFBbEMsRUFBZ0QsS0FBaEQ7O0FBRUE7O0FBRUEsZUFBYSxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBLGFBQVcsUUFBWCxHQUFzQixZQUFXO0FBQy9CLGtDQUFTLFdBQVcsS0FBcEIsRUFBMkIsVUFBM0IsRUFBdUMsU0FBdkM7QUFDRCxHQUZEOztBQUlBLE1BQUksY0FBYyxFQUFDLEdBQUcsQ0FBSixFQUFPLEdBQUcsQ0FBVixFQUFsQjtBQUNBLGFBQVcsR0FBWCxDQUFlLFdBQWY7QUFDQSxZQUFVLEdBQVYsQ0FBYyxXQUFkLEVBQTJCLEVBQUMsTUFBSyxnQkFBTixFQUF3QixPQUFNLEdBQTlCLEVBQTNCO0FBQ0EsTUFBSSxjQUFjLEVBQUMsR0FBRyxDQUFKLEVBQU8sR0FBRyxDQUFWLEVBQWxCO0FBQ0EsYUFBVyxHQUFYLENBQWUsV0FBZjtBQUNBLFlBQVUsR0FBVixDQUFjLFdBQWQsRUFBMkIsRUFBQyxNQUFLLFdBQU4sRUFBbUIsT0FBTSxFQUF6QixFQUEzQjtBQUNEOztBQUVEOztBQUVBLHNCQUFNLEtBQU4sRUFBYSxPQUFiO0FBQ0Esc0JBQU0sU0FBTixFQUFpQixPQUFPLHFCQUFQLG9CQUFqQjs7O0FBR0EsSUFBSSxlQUFlLGdDQUFpQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sRUFBUCxFQUFXLENBQVgsRUFBYyxDQUFkLENBQWpCLEVBQW1DLENBQW5DLENBQW5COzs7Ozs7O0FBRUEsd0JBQWtCLFlBQWxCLG1JQUFnQztBQUFBLFFBQXZCLEtBQXVCOztBQUM5QiwwQkFBTSxNQUFOLEVBQWMsS0FBZDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRCIsImZpbGUiOiJoZWxsby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RW52aXJvbm1lbnR9IGZyb20gXCIuL2Vudmlyb25tZW50LmpzXCI7XHJcbmltcG9ydCB7b3B0aW9ucywgcHJpbnR9IGZyb20gXCIuL2FkZGl0aW9ucy5qc1wiO1xyXG5pbXBvcnQge011bHRpcGx5TGlzdH0gZnJvbSBcIi4vbXVsdGlwbHlfbGlzdC5qc1wiO1xyXG5pbXBvcnQge3J1bm5hYmxlTG9nc30gZnJvbSBcIi4vZWNoby5qc1wiO1xyXG5pbXBvcnQge29uQ2hhbmdlfSBmcm9tIFwiLi9maWxlcHJvY2Vzc2luZy5qc1wiO1xyXG5cclxuY29uc3QgZGVmYXVsdExpbmUgPSAnU3RhcnQgeW91ciBqb3VybmV5IG5vdyEnO1xyXG5jb25zdCBCUiA9IFwiPGJyIC8+XCI7XHJcblxyXG52YXIgZW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoKTtcclxudmFyIHggPSAwLCB5ID0gMDtcclxudmFyIHRyZWFzdXJlcyA9IG5ldyBXZWFrTWFwKCk7XHJcbnZhciB0cmVzQ29vcmRzID0gbmV3IFNldCgpO1xyXG52YXIgX2ZpbGVJbnB1dDtcclxuXHJcbmZ1bmN0aW9uIGFkZFRvT3V0cHV0KG5ld0xpbmU9ZGVmYXVsdExpbmUpIHtcclxuICBsZXQgb3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRwdXRcIik7XHJcblxyXG4gIG91dHB1dC5pbm5lckhUTUwgPSBvdXRwdXQuaW5uZXJIVE1MICsgQlIgKyBuZXdMaW5lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuYXZpZ2F0ZShzdGVwWCwgc3RlcFkpIHtcclxuICBbeCwgeV0gPSBbeCtzdGVwWCwgeStzdGVwWV07XHJcblxyXG4gIGxldCBjb29yZGluYXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29vcmRpbmF0ZXNcIik7XHJcbiAgY29vcmRpbmF0ZXMuaW5uZXJIVE1MID0gYCR7eH0gLCAke3l9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gY2F0Y2hUcmVhc3VyZSgpIHtcclxuICAvLyBmaW5kIHRyZWFzdXJlIGNvb3JkaW5hdGVzXHJcbiAgbGV0IGZpbmRDb29yZHM7XHJcbiAgZm9yIChsZXQgY29vcmRzIG9mIHRyZXNDb29yZHMpIHtcclxuICAgIGlmIChjb29yZHMueCA9PSB4ICYmIGNvb3Jkcy55ID09IHkpIHtcclxuICAgICAgIGZpbmRDb29yZHMgPSBjb29yZHM7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChmaW5kQ29vcmRzKSB7XHJcbiAgICB2YXIge25hbWUsIHZhbHVlfSA9IHRyZWFzdXJlcy5nZXQoZmluZENvb3Jkcyk7XHJcbiAgICBhZGRUb091dHB1dChgeW91IGZvdW5kICR7bmFtZX0sIGl0J3MgJHt2YWx1ZX0gZ29sZGApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25Db21tYW5kKGNvbW1hbmQpIHtcclxuICBpZiAoY29tbWFuZCA9PSBcImhlbHBcIikge1xyXG4gICAgb3B0aW9ucy5vdXRwdXRPcHRpb25zKGFkZFRvT3V0cHV0KTtcclxuICB9IGVsc2UgaWYgKGNvbW1hbmQgPT0gXCJsZWZ0XCIpIHtcclxuICAgIG5hdmlnYXRlKC0xLCAwKTtcclxuICAgIGFkZFRvT3V0cHV0KGVudmlyb25tZW50LnN0dW1ibGVVcG9uKCkpO1xyXG4gIH0gZWxzZSBpZiAoY29tbWFuZCA9PSBcInJpZ2h0XCIpIHtcclxuICAgIG5hdmlnYXRlKDEsIDApO1xyXG4gICAgYWRkVG9PdXRwdXQoZW52aXJvbm1lbnQuc3R1bWJsZVVwb24oKSk7XHJcbiAgfSBlbHNlIGlmIChjb21tYW5kID09IFwidXBcIikge1xyXG4gICAgbmF2aWdhdGUoMCwgMSk7XHJcbiAgICBhZGRUb091dHB1dChlbnZpcm9ubWVudC5zdHVtYmxlVXBvbigpKTtcclxuICB9IGVsc2UgaWYgKGNvbW1hbmQgPT0gXCJkb3duXCIpIHtcclxuICAgIG5hdmlnYXRlKDAsIC0xKTtcclxuICAgIGFkZFRvT3V0cHV0KGVudmlyb25tZW50LnN0dW1ibGVVcG9uKCkpO1xyXG4gIH0gZWxzZSBpZiAoY29tbWFuZCA9PSBcInBva2VcIikge1xyXG4gICAgYWRkVG9PdXRwdXQoZW52aXJvbm1lbnQucG9rZSgpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYWRkVG9PdXRwdXQoY29tbWFuZCk7XHJcbiAgfVxyXG4gIGNhdGNoVHJlYXN1cmUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25DbGlja0VudGVyKCkge1xyXG4gIGxldCBjb21tYW5kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tbWFuZHNcIik7XHJcblxyXG4gIG9uQ29tbWFuZChjb21tYW5kcy52YWx1ZSlcclxufVxyXG5cclxuZnVuY3Rpb24gbWFpbigpIHtcclxuICBsZXQgZW50ZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW50ZXJcIik7XHJcbiAgZW50ZXJFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGlja0VudGVyLCBmYWxzZSk7XHJcblxyXG4gIGFkZFRvT3V0cHV0KCk7XHJcblxyXG4gIF9maWxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZpbGVzXCIpO1xyXG4gIF9maWxlSW5wdXQub25jaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgIG9uQ2hhbmdlKF9maWxlSW5wdXQuZmlsZXMsIHRyZXNDb29yZHMsIHRyZWFzdXJlcyk7XHJcbiAgfVxyXG4gIC8vIGZpbGwgaW4gc29tZSB0cmVhc3VyZXNcclxuICB2YXIgY29vcmRpbmF0ZTEgPSB7eDogMiwgeTogMn07XHJcbiAgdHJlc0Nvb3Jkcy5hZGQoY29vcmRpbmF0ZTEpO1xyXG4gIHRyZWFzdXJlcy5zZXQoY29vcmRpbmF0ZTEsIHtuYW1lOlwidHJlYXN1cmUgY2hlc3RcIiwgdmFsdWU6MTAwfSk7XHJcbiAgdmFyIGNvb3JkaW5hdGUyID0ge3g6IDIsIHk6IDB9O1xyXG4gIHRyZXNDb29yZHMuYWRkKGNvb3JkaW5hdGUyKTtcclxuICB0cmVhc3VyZXMuc2V0KGNvb3JkaW5hdGUyLCB7bmFtZTpcIm1lZGFpbGxvblwiLCB2YWx1ZToxMH0pO1xyXG59XHJcblxyXG5tYWluKCk7XHJcblxyXG5wcmludChcImxvZ1wiLCBcImhlbGxvXCIpO1xyXG5wcmludChcInN5bWJvbHNcIiwgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvcHRpb25zKSk7XHJcblxyXG4vLyBSVU4gYXMgYSBsaXN0IC4uLlxyXG52YXIgbXVsdGlwbHlMaXN0ID0gbmV3IE11bHRpcGx5TGlzdChbMSwgNCwgXCJcIiwgNSwgMV0sIDIpO1xyXG5cclxuZm9yICh2YXIgdmFsdWUgb2YgbXVsdGlwbHlMaXN0KSB7XHJcbiAgcHJpbnQoXCJsaXN0XCIsIHZhbHVlKTtcclxufVxyXG5cclxuLy8gQXN5bmNocm9ub3VzIGdlbmVyYXRvcnNcclxucnVubmFibGVMb2dzKCk7XHJcbiJdfQ==