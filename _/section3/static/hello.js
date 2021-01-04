(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var print = exports.print = function print() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return console.log(args[0].toUpperCase() + ": " + args[1]);
};

var options = exports.options = {
  _intro: "You can type",
  _options: ["left", "right", "up", "down", "help"],
  outputOptions: function outputOptions() {
    var _this = this;

    this._options.forEach(function (f) {
      return addToOutput(_this._intro + " " + f);
    });
  }
};

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

},{"./additions.js":1,"./environment.js":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGFkZGl0aW9ucy5qcyIsInNyY1xcZW5jb3VudGVyLmpzIiwic3JjXFxlbnZpcm9ubWVudC5qcyIsInNyY1xcaGVsbG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQ0FPLElBQU0sd0JBQVEsU0FBUixLQUFRO0FBQUEsb0NBQUksSUFBSjtBQUFJLFFBQUo7QUFBQTs7QUFBQSxTQUFhLFFBQVEsR0FBUixDQUFZLEtBQUssQ0FBTCxFQUFRLFdBQVIsS0FBd0IsSUFBeEIsR0FBK0IsS0FBSyxDQUFMLENBQTNDLENBQWI7QUFBQSxDQUFkOztBQUVBLElBQUksNEJBQVU7QUFDbkIsVUFBUSxjQURXO0FBRW5CLFlBQVUsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixJQUFsQixFQUF3QixNQUF4QixFQUFnQyxNQUFoQyxDQUZTO0FBR25CLGVBSG1CLDJCQUdIO0FBQUE7O0FBQ2QsU0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQjtBQUFBLGFBQ3BCLFlBQVksTUFBSyxNQUFMLEdBQWMsR0FBZCxHQUFvQixDQUFoQyxDQURvQjtBQUFBLEtBQXRCO0FBRUQ7QUFOa0IsQ0FBZDs7Ozs7Ozs7Ozs7UUN3QlMsUSxHQUFBLFE7Ozs7Ozs7O0lBMUJILFMsV0FBQSxTO0FBQ1gsdUJBQTBCO0FBQUEsUUFBZCxTQUFjLHlEQUFKLEVBQUk7O0FBQUE7O0FBQ3RCLFNBQUssU0FBTCxHQUFpQixTQUFqQjtBQUNIOzs7O29DQUNlO0FBQ2QsYUFBTyxLQUFLLFNBQVo7QUFDRDs7Ozs7O0lBR1UsSSxXQUFBLEk7OztBQUNYLGtCQUFjO0FBQUE7O0FBQUEsbUZBQ04sbUNBRE07QUFFYjs7O0VBSHVCLFM7O0lBS2IsSyxXQUFBLEs7OztBQUNYLG1CQUFjO0FBQUE7O0FBQUEsb0ZBQ04sdUZBRE07QUFFYjs7O0VBSHdCLFM7O0lBS2QsSyxXQUFBLEs7OztBQUNYLG1CQUFjO0FBQUE7O0FBQUE7O0FBRVosV0FBSyxTQUFMLEdBQWlCLGlDQUFqQjtBQUZZO0FBR2I7OztFQUp3QixTOztBQU9wQixTQUFTLFFBQVQsR0FBb0I7QUFDekIsTUFBSSxTQUFTLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxNQUFpQixJQUFJLENBQXJCLENBQVgsSUFBc0MsQ0FBbkQ7O0FBRUEsTUFBSSxVQUFVLENBQWQsRUFBaUI7QUFDZixXQUFPLElBQUksSUFBSixFQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUksVUFBVSxDQUFkLEVBQWlCO0FBQ3RCLFdBQU8sSUFBSSxLQUFKLEVBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSSxVQUFVLENBQWQsRUFBaUI7QUFDdEIsV0FBTyxJQUFJLEtBQUosRUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJLFVBQVUsQ0FBZCxFQUFpQjtBQUN0QixXQUFPLElBQUksU0FBSixFQUFQO0FBQ0Q7QUFDRjs7Ozs7Ozs7Ozs7O0FDdENEOztJQUFZLFM7Ozs7OztJQUVDLFcsV0FBQSxXO0FBQ1gsdUJBQVksSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsU0FBSyxTQUFMLEdBQWlCLFVBQVUsUUFBVixFQUFqQjtBQUNEOzs7O2tDQUVhO0FBQ1osV0FBSyxTQUFMLEdBQWlCLFVBQVUsUUFBVixFQUFqQjs7QUFFQSxVQUFJLGNBQWMsT0FBTyw2QkFBUCxHQUF1QyxLQUFLLFNBQUwsQ0FBZSxhQUFmLEVBQXpEO0FBQ0EsYUFBTyxXQUFQO0FBQ0Q7Ozs7Ozs7OztBQ2JIOztBQUNBOztBQUVBLElBQU0sY0FBYyx5QkFBcEI7QUFDQSxJQUFNLEtBQUssUUFBWDs7QUFFQSxJQUFJLGNBQWMsOEJBQWxCOztBQUVBLFNBQVMsV0FBVCxHQUEwQztBQUFBLE1BQXJCLE9BQXFCLHlEQUFiLFdBQWE7O0FBQ3hDLE1BQUksU0FBUyxTQUFTLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBYjs7QUFFQSxTQUFPLFNBQVAsR0FBbUIsT0FBTyxTQUFQLEdBQW1CLEVBQW5CLEdBQXdCLE9BQTNDO0FBQ0Q7O0FBRUQsU0FBUyxTQUFULENBQW1CLE9BQW5CLEVBQTRCO0FBQzFCLE1BQUksV0FBVyxNQUFmLEVBQXVCO0FBQ3JCLHVCQUFRLGFBQVI7QUFDRCxHQUZELE1BRU8sSUFBSSxXQUFXLE1BQWYsRUFBdUI7QUFDNUIsZ0JBQVksWUFBWSxXQUFaLEVBQVo7QUFDRCxHQUZNLE1BRUEsSUFBSSxXQUFXLE9BQWYsRUFBd0I7QUFDN0IsZ0JBQVksWUFBWSxXQUFaLEVBQVo7QUFDRCxHQUZNLE1BRUEsSUFBSSxXQUFXLElBQWYsRUFBcUI7QUFDMUIsZ0JBQVksWUFBWSxXQUFaLEVBQVo7QUFDRCxHQUZNLE1BRUEsSUFBSSxXQUFXLE1BQWYsRUFBdUI7QUFDNUIsZ0JBQVksWUFBWSxXQUFaLEVBQVo7QUFDRCxHQUZNLE1BRUE7QUFDTCxnQkFBWSxPQUFaO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTLFlBQVQsR0FBd0I7QUFDdEIsTUFBSSxXQUFXLFNBQVMsYUFBVCxDQUF1QixXQUF2QixDQUFmOztBQUVBLFlBQVUsU0FBUyxLQUFuQjtBQUNEOztBQUVELFNBQVMsSUFBVCxHQUFnQjtBQUNkLE1BQUksVUFBVSxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDs7QUFFQSxVQUFRLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQWxDLEVBQWdELEtBQWhEOztBQUVBO0FBQ0Q7O0FBRUQ7O0FBRUEsc0JBQU0sS0FBTixFQUFhLE9BQWIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGNvbnN0IHByaW50ID0gKC4uLmFyZ3MpID0+IGNvbnNvbGUubG9nKGFyZ3NbMF0udG9VcHBlckNhc2UoKSArIFwiOiBcIiArIGFyZ3NbMV0pO1xyXG5cclxuZXhwb3J0IHZhciBvcHRpb25zID0ge1xyXG4gIF9pbnRybzogXCJZb3UgY2FuIHR5cGVcIixcclxuICBfb3B0aW9uczogW1wibGVmdFwiLCBcInJpZ2h0XCIsIFwidXBcIiwgXCJkb3duXCIsIFwiaGVscFwiXSxcclxuICBvdXRwdXRPcHRpb25zKCkge1xyXG4gICAgdGhpcy5fb3B0aW9ucy5mb3JFYWNoKGYgPT5cclxuICAgICAgYWRkVG9PdXRwdXQodGhpcy5faW50cm8gKyBcIiBcIiArIGYpKTtcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBjbGFzcyBFbmNvdW50ZXIge1xyXG4gIGNvbnN0cnVjdG9yKGludHJvVGV4dD1cIlwiKSB7XHJcbiAgICAgIHRoaXMuaW50cm9UZXh0ID0gaW50cm9UZXh0O1xyXG4gIH1cclxuICB3aGVuRW5jb3VudGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW50cm9UZXh0O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJlYXIgZXh0ZW5kcyBFbmNvdW50ZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoXCJncnIgZ3JvdywgeW91IGVuY291bnRlcmVkIGEgYmVhciFcIik7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBbmdlbCBleHRlbmRzIEVuY291bnRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcIndvdywgeW91IGVuY291bnRlcmVkIGFuIGFuZ2VsLCB0aGlzIHdpbGwgZ2l2ZSB5b3Ugc3RyZW5ndGggYW5kIGhlYWxpbmcgcG9zc2liaWxpdGllcyFcIik7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHaG9zdCBleHRlbmRzIEVuY291bnRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5pbnRyb1RleHQgPSBcIkJvb29oLCB5b3UgZW5jb3VudGVyZWQgYSBHaG9zdCFcIjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZSgpIHtcclxuICB2YXIgbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDQgLSAxKSkgKyAxO1xyXG5cclxuICBpZiAobnVtYmVyID09IDEpIHtcclxuICAgIHJldHVybiBuZXcgQmVhcigpO1xyXG4gIH0gZWxzZSBpZiAobnVtYmVyID09IDIpIHtcclxuICAgIHJldHVybiBuZXcgQW5nZWwoKTtcclxuICB9IGVsc2UgaWYgKG51bWJlciA9PSAzKSB7XHJcbiAgICByZXR1cm4gbmV3IEdob3N0KCk7XHJcbiAgfSBlbHNlIGlmIChudW1iZXIgPT0gNCkge1xyXG4gICAgcmV0dXJuIG5ldyBFbmNvdW50ZXIoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgZW5jb3VudGVyIGZyb20gJy4vZW5jb3VudGVyLmpzJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5lbmNvdW50ZXIgPSBlbmNvdW50ZXIuZ2VuZXJhdGUoKTtcclxuICB9XHJcblxyXG4gIHN0dW1ibGVVcG9uKCkge1xyXG4gICAgdGhpcy5lbmNvdW50ZXIgPSBlbmNvdW50ZXIuZ2VuZXJhdGUoKTtcclxuXHJcbiAgICB2YXIgaW50ZXJhY3Rpb24gPSBuYW1lICsgXCJZb3UganVzdCBzdHVtYmxlZCB1cG9uIC4uLiBcIiArIHRoaXMuZW5jb3VudGVyLndoZW5FbmNvdW50ZXIoKTtcclxuICAgIHJldHVybiBpbnRlcmFjdGlvbjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtFbnZpcm9ubWVudH0gZnJvbSBcIi4vZW52aXJvbm1lbnQuanNcIjtcclxuaW1wb3J0IHtvcHRpb25zLCBwcmludH0gZnJvbSBcIi4vYWRkaXRpb25zLmpzXCI7XHJcblxyXG5jb25zdCBkZWZhdWx0TGluZSA9ICdTdGFydCB5b3VyIGpvdXJuZXkgbm93ISc7XHJcbmNvbnN0IEJSID0gXCI8YnIgLz5cIjtcclxuXHJcbnZhciBlbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCgpO1xyXG5cclxuZnVuY3Rpb24gYWRkVG9PdXRwdXQobmV3TGluZT1kZWZhdWx0TGluZSkge1xyXG4gIGxldCBvdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI291dHB1dFwiKTtcclxuXHJcbiAgb3V0cHV0LmlubmVySFRNTCA9IG91dHB1dC5pbm5lckhUTUwgKyBCUiArIG5ld0xpbmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uQ29tbWFuZChjb21tYW5kKSB7XHJcbiAgaWYgKGNvbW1hbmQgPT0gXCJoZWxwXCIpIHtcclxuICAgIG9wdGlvbnMub3V0cHV0T3B0aW9ucygpO1xyXG4gIH0gZWxzZSBpZiAoY29tbWFuZCA9PSBcImxlZnRcIikge1xyXG4gICAgYWRkVG9PdXRwdXQoZW52aXJvbm1lbnQuc3R1bWJsZVVwb24oKSk7XHJcbiAgfSBlbHNlIGlmIChjb21tYW5kID09IFwicmlnaHRcIikge1xyXG4gICAgYWRkVG9PdXRwdXQoZW52aXJvbm1lbnQuc3R1bWJsZVVwb24oKSk7XHJcbiAgfSBlbHNlIGlmIChjb21tYW5kID09IFwidXBcIikge1xyXG4gICAgYWRkVG9PdXRwdXQoZW52aXJvbm1lbnQuc3R1bWJsZVVwb24oKSk7XHJcbiAgfSBlbHNlIGlmIChjb21tYW5kID09IFwiZG93blwiKSB7XHJcbiAgICBhZGRUb091dHB1dChlbnZpcm9ubWVudC5zdHVtYmxlVXBvbigpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYWRkVG9PdXRwdXQoY29tbWFuZCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvbkNsaWNrRW50ZXIoKSB7XHJcbiAgbGV0IGNvbW1hbmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21tYW5kc1wiKTtcclxuXHJcbiAgb25Db21tYW5kKGNvbW1hbmRzLnZhbHVlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gIGxldCBlbnRlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbnRlclwiKTtcclxuXHJcbiAgZW50ZXJFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGlja0VudGVyLCBmYWxzZSk7XHJcblxyXG4gIGFkZFRvT3V0cHV0KCk7XHJcbn1cclxuXHJcbm1haW4oKTtcclxuXHJcbnByaW50KFwibG9nXCIsIFwiaGVsbG9cIik7XHJcbiJdfQ==
