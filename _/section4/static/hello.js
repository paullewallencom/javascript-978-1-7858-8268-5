(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _options;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var print = exports.print = function print() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return console.log(args[0].toUpperCase() + ": " + args[1]);
};

var INPUT_OPTIONS = exports.INPUT_OPTIONS = Symbol('input_options');

var options = exports.options = (_options = {
  _intro: "You can type"
}, _defineProperty(_options, INPUT_OPTIONS, ["left", "right", "up", "down", "help"]), _defineProperty(_options, "outputOptions", function outputOptions(writeFn) {
  var _this = this;

  this[INPUT_OPTIONS].forEach(function (f) {
    return writeFn(_this._intro + " " + f);
  });
}), _options);

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.generate = generate;

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Encounter = exports.Encounter = function () {
  function Encounter() {
    var introText = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];

    _classCallCheck(this, Encounter);

    this.introText = introText;
  }

  _createClass(Encounter, [{
    key: "whenEncounter",
    value: function whenEncounter() {
      return this.introText;
    }
  }]);

  return Encounter;
}();

var Bear = exports.Bear = function (_Encounter) {
  _inherits(Bear, _Encounter);

  function Bear() {
    _classCallCheck(this, Bear);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Bear).call(this, "grr grow, you encountered a bear!"));
  }

  return Bear;
}(Encounter);

var Angel = exports.Angel = function (_Encounter2) {
  _inherits(Angel, _Encounter2);

  function Angel() {
    _classCallCheck(this, Angel);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Angel).call(this, "wow, you encountered an angel, this will give you strength and healing possibilities!"));
  }

  return Angel;
}(Encounter);

var Ghost = exports.Ghost = function (_Encounter3) {
  _inherits(Ghost, _Encounter3);

  function Ghost() {
    _classCallCheck(this, Ghost);

    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(Ghost).call(this));

    _this3.introText = "Boooh, you encountered a Ghost!";
    return _this3;
  }

  return Ghost;
}(Encounter);

function generate() {
  var number = Math.floor(Math.random() * (4 - 1)) + 1;

  if (number == 1) {
    return new Bear();
  } else if (number == 2) {
    return new Angel();
  } else if (number == 3) {
    return new Ghost();
  } else if (number == 4) {
    return new Encounter();
  }
}

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Environment = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _encounter = require("./encounter.js");

var encounter = _interopRequireWildcard(_encounter);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Environment = exports.Environment = function () {
  function Environment(name) {
    _classCallCheck(this, Environment);

    this.name = name;
    this.encounter = encounter.generate();
  }

  _createClass(Environment, [{
    key: "stumbleUpon",
    value: function stumbleUpon() {
      this.encounter = encounter.generate();

      var interaction = name + "You just stumbled upon ... " + this.encounter.whenEncounter();
      return interaction;
    }
  }]);

  return Environment;
}();

},{"./encounter.js":2}],4:[function(require,module,exports){
"use strict";

var _environment = require("./environment.js");

var _additions = require("./additions.js");

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

},{"./additions.js":1,"./environment.js":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGFkZGl0aW9ucy5qcyIsInNyY1xcZW5jb3VudGVyLmpzIiwic3JjXFxlbnZpcm9ubWVudC5qcyIsInNyY1xcaGVsbG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FDQU8sSUFBTSx3QkFBUSxTQUFSLEtBQVE7QUFBQSxvQ0FBSSxJQUFKO0FBQUksUUFBSjtBQUFBOztBQUFBLFNBQWEsUUFBUSxHQUFSLENBQVksS0FBSyxDQUFMLEVBQVEsV0FBUixLQUF3QixJQUF4QixHQUErQixLQUFLLENBQUwsQ0FBM0MsQ0FBYjtBQUFBLENBQWQ7O0FBRUEsSUFBTSx3Q0FBZ0IsT0FBTyxlQUFQLENBQXRCOztBQUVBLElBQUk7QUFDVCxVQUFRO0FBREMsNkJBRVIsYUFGUSxFQUVRLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsSUFBbEIsRUFBd0IsTUFBeEIsRUFBZ0MsTUFBaEMsQ0FGUixxRUFHSyxPQUhMLEVBR2M7QUFBQTs7QUFDckIsT0FBSyxhQUFMLEVBQW9CLE9BQXBCLENBQTRCO0FBQUEsV0FDMUIsUUFBUSxNQUFLLE1BQUwsR0FBYyxHQUFkLEdBQW9CLENBQTVCLENBRDBCO0FBQUEsR0FBNUI7QUFFRCxDQU5RLFlBQUo7Ozs7Ozs7Ozs7O1FDc0JTLFEsR0FBQSxROzs7Ozs7OztJQTFCSCxTLFdBQUEsUztBQUNYLHVCQUEwQjtBQUFBLFFBQWQsU0FBYyx5REFBSixFQUFJOztBQUFBOztBQUN0QixTQUFLLFNBQUwsR0FBaUIsU0FBakI7QUFDSDs7OztvQ0FDZTtBQUNkLGFBQU8sS0FBSyxTQUFaO0FBQ0Q7Ozs7OztJQUdVLEksV0FBQSxJOzs7QUFDWCxrQkFBYztBQUFBOztBQUFBLG1GQUNOLG1DQURNO0FBRWI7OztFQUh1QixTOztJQUtiLEssV0FBQSxLOzs7QUFDWCxtQkFBYztBQUFBOztBQUFBLG9G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QUFFRDs7QUFFQSxzQkFBTSxLQUFOLEVBQWEsT0FBYjtBQUNBLHNCQUFNLFNBQU4sRUFBaUIsT0FBTyxxQkFBUCxvQkFBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGNvbnN0IHByaW50ID0gKC4uLmFyZ3MpID0+IGNvbnNvbGUubG9nKGFyZ3NbMF0udG9VcHBlckNhc2UoKSArIFwiOiBcIiArIGFyZ3NbMV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IElOUFVUX09QVElPTlMgPSBTeW1ib2woJ2lucHV0X29wdGlvbnMnKTtcclxuXHJcbmV4cG9ydCB2YXIgb3B0aW9ucyA9IHtcclxuICBfaW50cm86IFwiWW91IGNhbiB0eXBlXCIsXHJcbiAgW0lOUFVUX09QVElPTlNdOiBbXCJsZWZ0XCIsIFwicmlnaHRcIiwgXCJ1cFwiLCBcImRvd25cIiwgXCJoZWxwXCJdLFxyXG4gIG91dHB1dE9wdGlvbnMod3JpdGVGbikge1xyXG4gICAgdGhpc1tJTlBVVF9PUFRJT05TXS5mb3JFYWNoKGYgPT5cclxuICAgICAgd3JpdGVGbih0aGlzLl9pbnRybyArIFwiIFwiICsgZikpO1xyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGNsYXNzIEVuY291bnRlciB7XHJcbiAgY29uc3RydWN0b3IoaW50cm9UZXh0PVwiXCIpIHtcclxuICAgICAgdGhpcy5pbnRyb1RleHQgPSBpbnRyb1RleHQ7XHJcbiAgfVxyXG4gIHdoZW5FbmNvdW50ZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnRyb1RleHQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmVhciBleHRlbmRzIEVuY291bnRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcImdyciBncm93LCB5b3UgZW5jb3VudGVyZWQgYSBiZWFyIVwiKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFuZ2VsIGV4dGVuZHMgRW5jb3VudGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFwid293LCB5b3UgZW5jb3VudGVyZWQgYW4gYW5nZWwsIHRoaXMgd2lsbCBnaXZlIHlvdSBzdHJlbmd0aCBhbmQgaGVhbGluZyBwb3NzaWJpbGl0aWVzIVwiKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdob3N0IGV4dGVuZHMgRW5jb3VudGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmludHJvVGV4dCA9IFwiQm9vb2gsIHlvdSBlbmNvdW50ZXJlZCBhIEdob3N0IVwiO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlKCkge1xyXG4gIHZhciBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNCAtIDEpKSArIDE7XHJcblxyXG4gIGlmIChudW1iZXIgPT0gMSkge1xyXG4gICAgcmV0dXJuIG5ldyBCZWFyKCk7XHJcbiAgfSBlbHNlIGlmIChudW1iZXIgPT0gMikge1xyXG4gICAgcmV0dXJuIG5ldyBBbmdlbCgpO1xyXG4gIH0gZWxzZSBpZiAobnVtYmVyID09IDMpIHtcclxuICAgIHJldHVybiBuZXcgR2hvc3QoKTtcclxuICB9IGVsc2UgaWYgKG51bWJlciA9PSA0KSB7XHJcbiAgICByZXR1cm4gbmV3IEVuY291bnRlcigpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBlbmNvdW50ZXIgZnJvbSAnLi9lbmNvdW50ZXIuanMnXHJcblxyXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmVuY291bnRlciA9IGVuY291bnRlci5nZW5lcmF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3R1bWJsZVVwb24oKSB7XHJcbiAgICB0aGlzLmVuY291bnRlciA9IGVuY291bnRlci5nZW5lcmF0ZSgpO1xyXG5cclxuICAgIHZhciBpbnRlcmFjdGlvbiA9IG5hbWUgKyBcIllvdSBqdXN0IHN0dW1ibGVkIHVwb24gLi4uIFwiICsgdGhpcy5lbmNvdW50ZXIud2hlbkVuY291bnRlcigpO1xyXG4gICAgcmV0dXJuIGludGVyYWN0aW9uO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge0Vudmlyb25tZW50fSBmcm9tIFwiLi9lbnZpcm9ubWVudC5qc1wiO1xyXG5pbXBvcnQge29wdGlvbnMsIHByaW50fSBmcm9tIFwiLi9hZGRpdGlvbnMuanNcIjtcclxuXHJcbmNvbnN0IGRlZmF1bHRMaW5lID0gJ1N0YXJ0IHlvdXIgam91cm5leSBub3chJztcclxuY29uc3QgQlIgPSBcIjxiciAvPlwiO1xyXG5cclxudmFyIGVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KCk7XHJcbnZhciB4ID0gMCwgeSA9IDA7XHJcbnZhciB0cmVhc3VyZXMgPSBuZXcgV2Vha01hcCgpO1xyXG52YXIgdHJlc0Nvb3JkcyA9IG5ldyBTZXQoKTtcclxuXHJcbmZ1bmN0aW9uIGFkZFRvT3V0cHV0KG5ld0xpbmU9ZGVmYXVsdExpbmUpIHtcclxuICBsZXQgb3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRwdXRcIik7XHJcblxyXG4gIG91dHB1dC5pbm5lckhUTUwgPSBvdXRwdXQuaW5uZXJIVE1MICsgQlIgKyBuZXdMaW5lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuYXZpZ2F0ZShzdGVwWCwgc3RlcFkpIHtcclxuICBbeCwgeV0gPSBbeCtzdGVwWCwgeStzdGVwWV07XHJcblxyXG4gIGxldCBjb29yZGluYXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29vcmRpbmF0ZXNcIik7XHJcbiAgY29vcmRpbmF0ZXMuaW5uZXJIVE1MID0gYCR7eH0gLCAke3l9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gY2F0Y2hUcmVhc3VyZSgpIHtcclxuICAvLyBmaW5kIHRyZWFzdXJlIGNvb3JkaW5hdGVzXHJcbiAgbGV0IGZpbmRDb29yZHM7XHJcbiAgZm9yIChsZXQgY29vcmRzIG9mIHRyZXNDb29yZHMpIHtcclxuICAgIGlmIChjb29yZHMueCA9PSB4ICYmIGNvb3Jkcy55ID09IHkpIHtcclxuICAgICAgIGZpbmRDb29yZHMgPSBjb29yZHM7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChmaW5kQ29vcmRzKSB7XHJcbiAgICB2YXIge25hbWUsIHZhbHVlfSA9IHRyZWFzdXJlcy5nZXQoZmluZENvb3Jkcyk7XHJcbiAgICBhZGRUb091dHB1dChgeW91IGZvdW5kICR7bmFtZX0sIGl0J3MgJHt2YWx1ZX0gZ29sZGApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25Db21tYW5kKGNvbW1hbmQpIHtcclxuICBpZiAoY29tbWFuZCA9PSBcImhlbHBcIikge1xyXG4gICAgb3B0aW9ucy5vdXRwdXRPcHRpb25zKGFkZFRvT3V0cHV0KTtcclxuICB9IGVsc2UgaWYgKGNvbW1hbmQgPT0gXCJsZWZ0XCIpIHtcclxuICAgIG5hdmlnYXRlKC0xLCAwKTtcclxuICAgIGFkZFRvT3V0cHV0KGVudmlyb25tZW50LnN0dW1ibGVVcG9uKCkpO1xyXG4gIH0gZWxzZSBpZiAoY29tbWFuZCA9PSBcInJpZ2h0XCIpIHtcclxuICAgIG5hdmlnYXRlKDEsIDApO1xyXG4gICAgYWRkVG9PdXRwdXQoZW52aXJvbm1lbnQuc3R1bWJsZVVwb24oKSk7XHJcbiAgfSBlbHNlIGlmIChjb21tYW5kID09IFwidXBcIikge1xyXG4gICAgbmF2aWdhdGUoMCwgMSk7XHJcbiAgICBhZGRUb091dHB1dChlbnZpcm9ubWVudC5zdHVtYmxlVXBvbigpKTtcclxuICB9IGVsc2UgaWYgKGNvbW1hbmQgPT0gXCJkb3duXCIpIHtcclxuICAgIG5hdmlnYXRlKDAsIC0xKTtcclxuICAgIGFkZFRvT3V0cHV0KGVudmlyb25tZW50LnN0dW1ibGVVcG9uKCkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhZGRUb091dHB1dChjb21tYW5kKTtcclxuICB9XHJcbiAgY2F0Y2hUcmVhc3VyZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkNsaWNrRW50ZXIoKSB7XHJcbiAgbGV0IGNvbW1hbmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21tYW5kc1wiKTtcclxuXHJcbiAgb25Db21tYW5kKGNvbW1hbmRzLnZhbHVlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gIGxldCBlbnRlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbnRlclwiKTtcclxuICBlbnRlckVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrRW50ZXIsIGZhbHNlKTtcclxuXHJcbiAgYWRkVG9PdXRwdXQoKTtcclxuXHJcbiAgLy8gZmlsbCBpbiBzb21lIHRyZWFzdXJlc1xyXG4gIHZhciBjb29yZGluYXRlMSA9IHt4OiAyLCB5OiAyfTtcclxuICB0cmVzQ29vcmRzLmFkZChjb29yZGluYXRlMSk7XHJcbiAgdHJlYXN1cmVzLnNldChjb29yZGluYXRlMSwge25hbWU6XCJ0cmVhc3VyZSBjaGVzdFwiLCB2YWx1ZToxMDB9KTtcclxuICB2YXIgY29vcmRpbmF0ZTIgPSB7eDogMiwgeTogMH07XHJcbiAgdHJlc0Nvb3Jkcy5hZGQoY29vcmRpbmF0ZTIpO1xyXG4gIHRyZWFzdXJlcy5zZXQoY29vcmRpbmF0ZTIsIHtuYW1lOlwibWVkYWlsbG9uXCIsIHZhbHVlOjEwfSk7XHJcbn1cclxuXHJcbm1haW4oKTtcclxuXHJcbnByaW50KFwibG9nXCIsIFwiaGVsbG9cIik7XHJcbnByaW50KFwic3ltYm9sc1wiLCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9wdGlvbnMpKVxyXG4iXX0=
