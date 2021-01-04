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
    _onFilesSelected().then(function (processed_arr) {
      (0, _additions.print)("file", results);
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = processed_arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var results = _step2.value;
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = results[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var result = _step3.value;

              tresCoords.add(result.coordinates);
              treasures.set(result.coordinates, result.treasure);
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }
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
    }).catch(function (err) {
      (0, _additions.print)("file", err);
    });
  };
  // fill in some treasures
  var coordinate1 = { x: 2, y: 2 };
  tresCoords.add(coordinate1);
  treasures.set(coordinate1, { name: "treasure chest", value: 100 });
  var coordinate2 = { x: 2, y: 0 };
  tresCoords.add(coordinate2);
  treasures.set(coordinate2, { name: "medaillon", value: 10 });
}

function _onFilesSelected() {
  var promise = Promise.resolve();
  var arr_promises = [];
  for (var i = 0; i < _fileInput.files.length; i++) {
    var file = _fileInput.files[i];
    arr_promises.push(pFileReader(file));
  }
  return Promise.all(arr_promises);
}

function pFileReader(file) {
  var reader = new FileReader();
  return new Promise(function (resolve, reject) {
    // If we use onloadend, we need to check the readyState.
    reader.onload = function (evt) {
      if (evt.target.readyState == FileReader.DONE) {
        // DONE == 2
        resolve(JSON.parse(evt.target.result));
      }
    };

    if (file) {
      reader.readAsText(file, "UTF-8");
    }
  });
}

main();

(0, _additions.print)("log", "hello");
(0, _additions.print)("symbols", Object.getOwnPropertySymbols(_additions.options));

// RUN as a list ...
var multiplyList = new _multiply_list.MultiplyList([1, 4, "", 5, 1], 2);

var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
  for (var _iterator4 = multiplyList[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
    var value = _step4.value;

    (0, _additions.print)("list", value);
  }

  // Asynchronous generators
} catch (err) {
  _didIteratorError4 = true;
  _iteratorError4 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion4 && _iterator4.return) {
      _iterator4.return();
    }
  } finally {
    if (_didIteratorError4) {
      throw _iteratorError4;
    }
  }
}

(0, _echo.runnableLogs)();
//# sourceMappingURL=data:application/json;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRCIsImZpbGUiOiJoZWxsby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RW52aXJvbm1lbnR9IGZyb20gXCIuL2Vudmlyb25tZW50LmpzXCI7XHJcbmltcG9ydCB7b3B0aW9ucywgcHJpbnR9IGZyb20gXCIuL2FkZGl0aW9ucy5qc1wiO1xyXG5pbXBvcnQge011bHRpcGx5TGlzdH0gZnJvbSBcIi4vbXVsdGlwbHlfbGlzdC5qc1wiO1xyXG5pbXBvcnQge3J1bm5hYmxlTG9nc30gZnJvbSBcIi4vZWNoby5qc1wiO1xyXG5cclxuY29uc3QgZGVmYXVsdExpbmUgPSAnU3RhcnQgeW91ciBqb3VybmV5IG5vdyEnO1xyXG5jb25zdCBCUiA9IFwiPGJyIC8+XCI7XHJcblxyXG52YXIgZW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoKTtcclxudmFyIHggPSAwLCB5ID0gMDtcclxudmFyIHRyZWFzdXJlcyA9IG5ldyBXZWFrTWFwKCk7XHJcbnZhciB0cmVzQ29vcmRzID0gbmV3IFNldCgpO1xyXG52YXIgX2ZpbGVJbnB1dDtcclxuXHJcbmZ1bmN0aW9uIGFkZFRvT3V0cHV0KG5ld0xpbmU9ZGVmYXVsdExpbmUpIHtcclxuICBsZXQgb3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRwdXRcIik7XHJcblxyXG4gIG91dHB1dC5pbm5lckhUTUwgPSBvdXRwdXQuaW5uZXJIVE1MICsgQlIgKyBuZXdMaW5lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuYXZpZ2F0ZShzdGVwWCwgc3RlcFkpIHtcclxuICBbeCwgeV0gPSBbeCtzdGVwWCwgeStzdGVwWV07XHJcblxyXG4gIGxldCBjb29yZGluYXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29vcmRpbmF0ZXNcIik7XHJcbiAgY29vcmRpbmF0ZXMuaW5uZXJIVE1MID0gYCR7eH0gLCAke3l9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gY2F0Y2hUcmVhc3VyZSgpIHtcclxuICAvLyBmaW5kIHRyZWFzdXJlIGNvb3JkaW5hdGVzXHJcbiAgbGV0IGZpbmRDb29yZHM7XHJcbiAgZm9yIChsZXQgY29vcmRzIG9mIHRyZXNDb29yZHMpIHtcclxuICAgIGlmIChjb29yZHMueCA9PSB4ICYmIGNvb3Jkcy55ID09IHkpIHtcclxuICAgICAgIGZpbmRDb29yZHMgPSBjb29yZHM7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChmaW5kQ29vcmRzKSB7XHJcbiAgICB2YXIge25hbWUsIHZhbHVlfSA9IHRyZWFzdXJlcy5nZXQoZmluZENvb3Jkcyk7XHJcbiAgICBhZGRUb091dHB1dChgeW91IGZvdW5kICR7bmFtZX0sIGl0J3MgJHt2YWx1ZX0gZ29sZGApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25Db21tYW5kKGNvbW1hbmQpIHtcclxuICBpZiAoY29tbWFuZCA9PSBcImhlbHBcIikge1xyXG4gICAgb3B0aW9ucy5vdXRwdXRPcHRpb25zKGFkZFRvT3V0cHV0KTtcclxuICB9IGVsc2UgaWYgKGNvbW1hbmQgPT0gXCJsZWZ0XCIpIHtcclxuICAgIG5hdmlnYXRlKC0xLCAwKTtcclxuICAgIGFkZFRvT3V0cHV0KGVudmlyb25tZW50LnN0dW1ibGVVcG9uKCkpO1xyXG4gIH0gZWxzZSBpZiAoY29tbWFuZCA9PSBcInJpZ2h0XCIpIHtcclxuICAgIG5hdmlnYXRlKDEsIDApO1xyXG4gICAgYWRkVG9PdXRwdXQoZW52aXJvbm1lbnQuc3R1bWJsZVVwb24oKSk7XHJcbiAgfSBlbHNlIGlmIChjb21tYW5kID09IFwidXBcIikge1xyXG4gICAgbmF2aWdhdGUoMCwgMSk7XHJcbiAgICBhZGRUb091dHB1dChlbnZpcm9ubWVudC5zdHVtYmxlVXBvbigpKTtcclxuICB9IGVsc2UgaWYgKGNvbW1hbmQgPT0gXCJkb3duXCIpIHtcclxuICAgIG5hdmlnYXRlKDAsIC0xKTtcclxuICAgIGFkZFRvT3V0cHV0KGVudmlyb25tZW50LnN0dW1ibGVVcG9uKCkpO1xyXG4gIH0gZWxzZSBpZiAoY29tbWFuZCA9PSBcInBva2VcIikge1xyXG4gICAgYWRkVG9PdXRwdXQoZW52aXJvbm1lbnQucG9rZSgpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYWRkVG9PdXRwdXQoY29tbWFuZCk7XHJcbiAgfVxyXG4gIGNhdGNoVHJlYXN1cmUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25DbGlja0VudGVyKCkge1xyXG4gIGxldCBjb21tYW5kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tbWFuZHNcIik7XHJcblxyXG4gIG9uQ29tbWFuZChjb21tYW5kcy52YWx1ZSlcclxufVxyXG5cclxuZnVuY3Rpb24gbWFpbigpIHtcclxuICBsZXQgZW50ZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW50ZXJcIik7XHJcbiAgZW50ZXJFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGlja0VudGVyLCBmYWxzZSk7XHJcblxyXG4gIGFkZFRvT3V0cHV0KCk7XHJcblxyXG4gIF9maWxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZpbGVzXCIpO1xyXG4gIF9maWxlSW5wdXQub25jaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgIF9vbkZpbGVzU2VsZWN0ZWQoKS50aGVuKGZ1bmN0aW9uKHByb2Nlc3NlZF9hcnIpIHtcclxuICAgICAgcHJpbnQoXCJmaWxlXCIsIHJlc3VsdHMpO1xyXG4gICAgICBmb3IgKHZhciByZXN1bHRzIG9mIHByb2Nlc3NlZF9hcnIpIHtcclxuICAgICAgICBmb3IgKHZhciByZXN1bHQgb2YgcmVzdWx0cykge1xyXG4gICAgICAgICAgdHJlc0Nvb3Jkcy5hZGQocmVzdWx0LmNvb3JkaW5hdGVzKTtcclxuICAgICAgICAgIHRyZWFzdXJlcy5zZXQocmVzdWx0LmNvb3JkaW5hdGVzLCByZXN1bHQudHJlYXN1cmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgIHByaW50KFwiZmlsZVwiLCBlcnIpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICAvLyBmaWxsIGluIHNvbWUgdHJlYXN1cmVzXHJcbiAgdmFyIGNvb3JkaW5hdGUxID0ge3g6IDIsIHk6IDJ9O1xyXG4gIHRyZXNDb29yZHMuYWRkKGNvb3JkaW5hdGUxKTtcclxuICB0cmVhc3VyZXMuc2V0KGNvb3JkaW5hdGUxLCB7bmFtZTpcInRyZWFzdXJlIGNoZXN0XCIsIHZhbHVlOjEwMH0pO1xyXG4gIHZhciBjb29yZGluYXRlMiA9IHt4OiAyLCB5OiAwfTtcclxuICB0cmVzQ29vcmRzLmFkZChjb29yZGluYXRlMik7XHJcbiAgdHJlYXN1cmVzLnNldChjb29yZGluYXRlMiwge25hbWU6XCJtZWRhaWxsb25cIiwgdmFsdWU6MTB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX29uRmlsZXNTZWxlY3RlZCgpIHtcclxuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xyXG4gIHZhciBhcnJfcHJvbWlzZXMgPSBbXTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IF9maWxlSW5wdXQuZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGZpbGUgPSBfZmlsZUlucHV0LmZpbGVzW2ldO1xyXG4gICAgICBhcnJfcHJvbWlzZXMucHVzaChwRmlsZVJlYWRlcihmaWxlKSk7XHJcbiAgfVxyXG4gIHJldHVybiBQcm9taXNlLmFsbChhcnJfcHJvbWlzZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwRmlsZVJlYWRlcihmaWxlKSB7XHJcbiAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIC8vIElmIHdlIHVzZSBvbmxvYWRlbmQsIHdlIG5lZWQgdG8gY2hlY2sgdGhlIHJlYWR5U3RhdGUuXHJcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZXZ0KSB7XHJcbiAgICAgICAgaWYgKGV2dC50YXJnZXQucmVhZHlTdGF0ZSA9PSBGaWxlUmVhZGVyLkRPTkUpIHsgLy8gRE9ORSA9PSAyXHJcbiAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShldnQudGFyZ2V0LnJlc3VsdCkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKGZpbGUpIHtcclxuICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSwgXCJVVEYtOFwiKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxubWFpbigpO1xyXG5cclxucHJpbnQoXCJsb2dcIiwgXCJoZWxsb1wiKTtcclxucHJpbnQoXCJzeW1ib2xzXCIsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob3B0aW9ucykpO1xyXG5cclxuLy8gUlVOIGFzIGEgbGlzdCAuLi5cclxudmFyIG11bHRpcGx5TGlzdCA9IG5ldyBNdWx0aXBseUxpc3QoWzEsIDQsIFwiXCIsIDUsIDFdLCAyKTtcclxuXHJcbmZvciAodmFyIHZhbHVlIG9mIG11bHRpcGx5TGlzdCkge1xyXG4gIHByaW50KFwibGlzdFwiLCB2YWx1ZSk7XHJcbn1cclxuXHJcbi8vIEFzeW5jaHJvbm91cyBnZW5lcmF0b3JzXHJcbnJ1bm5hYmxlTG9ncygpO1xyXG4iXX0=