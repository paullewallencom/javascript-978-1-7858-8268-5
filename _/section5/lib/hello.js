"use strict";

var _environment = require("./environment.js");

var _additions = require("./additions.js");

var _multiply_list = require("./multiply_list.js");

var _echo = require("./echo.js");

var defaultLine = 'Start your journey now!';
var BR = "<br />";

var environment = new _environment.Environment();
var x = 0,
    y = 0;
var treasures = new WeakMap();
var tresCoords = new Set();

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
//# sourceMappingURL=data:application/json;base64,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S0FBaEQ7O0FBRUE7OztBQUdBLE1BQUksY0FBYyxFQUFDLEdBQUcsQ0FBSixFQUFPLEdBQUcsQ0FBVixFQUFsQjtBQUNBLGFBQVcsR0FBWCxDQUFlLFdBQWY7QUFDQSxZQUFVLEdBQVYsQ0FBYyxXQUFkLEVBQTJCLEVBQUMsTUFBSyxnQkFBTixFQUF3QixPQUFNLEdBQTlCLEVBQTNCO0FBQ0EsTUFBSSxjQUFjLEVBQUMsR0FBRyxDQUFKLEVBQU8sR0FBRyxDQUFWLEVBQWxCO0FBQ0EsYUFBVyxHQUFYLENBQWUsV0FBZjtBQUNBLFlBQVUsR0FBVixDQUFjLFdBQWQsRUFBMkIsRUFBQyxNQUFLLFdBQU4sRUFBbUIsT0FBTSxFQUF6QixFQUEzQjtBQUNEOztBQUVEOztBQUVBLHNCQUFNLEtBQU4sRUFBYSxPQUFiO0FBQ0Esc0JBQU0sU0FBTixFQUFpQixPQUFPLHFCQUFQLG9CQUFqQjs7O0FBR0EsSUFBSSxlQUFlLGdDQUFpQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sRUFBUCxFQUFXLENBQVgsRUFBYyxDQUFkLENBQWpCLEVBQW1DLENBQW5DLENBQW5COzs7Ozs7O0FBRUEsd0JBQWtCLFlBQWxCLG1JQUFnQztBQUFBLFFBQXZCLEtBQXVCOztBQUM5QiwwQkFBTSxNQUFOLEVBQWMsS0FBZDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRCIsImZpbGUiOiJoZWxsby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RW52aXJvbm1lbnR9IGZyb20gXCIuL2Vudmlyb25tZW50LmpzXCI7XHJcbmltcG9ydCB7b3B0aW9ucywgcHJpbnR9IGZyb20gXCIuL2FkZGl0aW9ucy5qc1wiO1xyXG5pbXBvcnQge011bHRpcGx5TGlzdH0gZnJvbSBcIi4vbXVsdGlwbHlfbGlzdC5qc1wiO1xyXG5pbXBvcnQge3J1bm5hYmxlTG9nc30gZnJvbSBcIi4vZWNoby5qc1wiO1xyXG5cclxuY29uc3QgZGVmYXVsdExpbmUgPSAnU3RhcnQgeW91ciBqb3VybmV5IG5vdyEnO1xyXG5jb25zdCBCUiA9IFwiPGJyIC8+XCI7XHJcblxyXG52YXIgZW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoKTtcclxudmFyIHggPSAwLCB5ID0gMDtcclxudmFyIHRyZWFzdXJlcyA9IG5ldyBXZWFrTWFwKCk7XHJcbnZhciB0cmVzQ29vcmRzID0gbmV3IFNldCgpO1xyXG5cclxuZnVuY3Rpb24gYWRkVG9PdXRwdXQobmV3TGluZT1kZWZhdWx0TGluZSkge1xyXG4gIGxldCBvdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI291dHB1dFwiKTtcclxuXHJcbiAgb3V0cHV0LmlubmVySFRNTCA9IG91dHB1dC5pbm5lckhUTUwgKyBCUiArIG5ld0xpbmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5hdmlnYXRlKHN0ZXBYLCBzdGVwWSkge1xyXG4gIFt4LCB5XSA9IFt4K3N0ZXBYLCB5K3N0ZXBZXTtcclxuXHJcbiAgbGV0IGNvb3JkaW5hdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb29yZGluYXRlc1wiKTtcclxuICBjb29yZGluYXRlcy5pbm5lckhUTUwgPSBgJHt4fSAsICR7eX1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYXRjaFRyZWFzdXJlKCkge1xyXG4gIC8vIGZpbmQgdHJlYXN1cmUgY29vcmRpbmF0ZXNcclxuICBsZXQgZmluZENvb3JkcztcclxuICBmb3IgKGxldCBjb29yZHMgb2YgdHJlc0Nvb3Jkcykge1xyXG4gICAgaWYgKGNvb3Jkcy54ID09IHggJiYgY29vcmRzLnkgPT0geSkge1xyXG4gICAgICAgZmluZENvb3JkcyA9IGNvb3JkcztcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKGZpbmRDb29yZHMpIHtcclxuICAgIHZhciB7bmFtZSwgdmFsdWV9ID0gdHJlYXN1cmVzLmdldChmaW5kQ29vcmRzKTtcclxuICAgIGFkZFRvT3V0cHV0KGB5b3UgZm91bmQgJHtuYW1lfSwgaXQncyAke3ZhbHVlfSBnb2xkYCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvbkNvbW1hbmQoY29tbWFuZCkge1xyXG4gIGlmIChjb21tYW5kID09IFwiaGVscFwiKSB7XHJcbiAgICBvcHRpb25zLm91dHB1dE9wdGlvbnMoYWRkVG9PdXRwdXQpO1xyXG4gIH0gZWxzZSBpZiAoY29tbWFuZCA9PSBcImxlZnRcIikge1xyXG4gICAgbmF2aWdhdGUoLTEsIDApO1xyXG4gICAgYWRkVG9PdXRwdXQoZW52aXJvbm1lbnQuc3R1bWJsZVVwb24oKSk7XHJcbiAgfSBlbHNlIGlmIChjb21tYW5kID09IFwicmlnaHRcIikge1xyXG4gICAgbmF2aWdhdGUoMSwgMCk7XHJcbiAgICBhZGRUb091dHB1dChlbnZpcm9ubWVudC5zdHVtYmxlVXBvbigpKTtcclxuICB9IGVsc2UgaWYgKGNvbW1hbmQgPT0gXCJ1cFwiKSB7XHJcbiAgICBuYXZpZ2F0ZSgwLCAxKTtcclxuICAgIGFkZFRvT3V0cHV0KGVudmlyb25tZW50LnN0dW1ibGVVcG9uKCkpO1xyXG4gIH0gZWxzZSBpZiAoY29tbWFuZCA9PSBcImRvd25cIikge1xyXG4gICAgbmF2aWdhdGUoMCwgLTEpO1xyXG4gICAgYWRkVG9PdXRwdXQoZW52aXJvbm1lbnQuc3R1bWJsZVVwb24oKSk7XHJcbiAgfSBlbHNlIGlmIChjb21tYW5kID09IFwicG9rZVwiKSB7XHJcbiAgICBhZGRUb091dHB1dChlbnZpcm9ubWVudC5wb2tlKCkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhZGRUb091dHB1dChjb21tYW5kKTtcclxuICB9XHJcbiAgY2F0Y2hUcmVhc3VyZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkNsaWNrRW50ZXIoKSB7XHJcbiAgbGV0IGNvbW1hbmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21tYW5kc1wiKTtcclxuXHJcbiAgb25Db21tYW5kKGNvbW1hbmRzLnZhbHVlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gIGxldCBlbnRlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbnRlclwiKTtcclxuICBlbnRlckVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrRW50ZXIsIGZhbHNlKTtcclxuXHJcbiAgYWRkVG9PdXRwdXQoKTtcclxuXHJcbiAgLy8gZmlsbCBpbiBzb21lIHRyZWFzdXJlc1xyXG4gIHZhciBjb29yZGluYXRlMSA9IHt4OiAyLCB5OiAyfTtcclxuICB0cmVzQ29vcmRzLmFkZChjb29yZGluYXRlMSk7XHJcbiAgdHJlYXN1cmVzLnNldChjb29yZGluYXRlMSwge25hbWU6XCJ0cmVhc3VyZSBjaGVzdFwiLCB2YWx1ZToxMDB9KTtcclxuICB2YXIgY29vcmRpbmF0ZTIgPSB7eDogMiwgeTogMH07XHJcbiAgdHJlc0Nvb3Jkcy5hZGQoY29vcmRpbmF0ZTIpO1xyXG4gIHRyZWFzdXJlcy5zZXQoY29vcmRpbmF0ZTIsIHtuYW1lOlwibWVkYWlsbG9uXCIsIHZhbHVlOjEwfSk7XHJcbn1cclxuXHJcbm1haW4oKTtcclxuXHJcbnByaW50KFwibG9nXCIsIFwiaGVsbG9cIik7XHJcbnByaW50KFwic3ltYm9sc1wiLCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9wdGlvbnMpKTtcclxuXHJcbi8vIFJVTiBhcyBhIGxpc3QgLi4uXHJcbnZhciBtdWx0aXBseUxpc3QgPSBuZXcgTXVsdGlwbHlMaXN0KFsxLCA0LCBcIlwiLCA1LCAxXSwgMik7XHJcblxyXG5mb3IgKHZhciB2YWx1ZSBvZiBtdWx0aXBseUxpc3QpIHtcclxuICBwcmludChcImxpc3RcIiwgdmFsdWUpO1xyXG59XHJcblxyXG4vLyBBc3luY2hyb25vdXMgZ2VuZXJhdG9yc1xyXG5ydW5uYWJsZUxvZ3MoKTtcclxuIl19