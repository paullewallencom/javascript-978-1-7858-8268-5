"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ghost = exports.Angel = exports.Bear = exports.Encounter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.generate = generate;

require("babel-core/register");

require("babel-polyfill");

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
  }, {
    key: "poke",
    value: regeneratorRuntime.mark(function poke() {
      return regeneratorRuntime.wrap(function poke$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return "whats up";

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, poke, this);
    })
  }]);

  return Encounter;
}();

var Bear = exports.Bear = function (_Encounter) {
  _inherits(Bear, _Encounter);

  function Bear() {
    _classCallCheck(this, Bear);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Bear).call(this, "grr grow, you encountered a bear!"));
  }

  _createClass(Bear, [{
    key: "poke",
    value: regeneratorRuntime.mark(function poke() {
      return regeneratorRuntime.wrap(function poke$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return "Grrr ...";

            case 2:
              _context2.next = 4;
              return "Bear is agressive";

            case 4:
              _context2.next = 6;
              return "Bear is attacking you! Watch out ;)";

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, poke, this);
    })
  }]);

  return Bear;
}(Encounter);

var Angel = exports.Angel = function (_Encounter2) {
  _inherits(Angel, _Encounter2);

  function Angel() {
    _classCallCheck(this, Angel);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Angel).call(this, "wow, you encountered an angel, this will give you strength and healing possibilities!"));
  }

  _createClass(Angel, [{
    key: "poke",
    value: regeneratorRuntime.mark(function poke() {
      return regeneratorRuntime.wrap(function poke$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return "You can't catch me ...";

            case 2:
              _context3.next = 4;
              return "Leave me alone";

            case 4:
              _context3.next = 6;
              return "I love you :)";

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, poke, this);
    })
  }]);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbmNvdW50ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O1FBNkNnQixRLEdBQUEsUTs7QUE3Q2hCOztBQUNBOzs7Ozs7OztJQUVhLFMsV0FBQSxTO0FBQ1gsdUJBQTBCO0FBQUEsUUFBZCxTQUFjLHlEQUFKLEVBQUk7O0FBQUE7O0FBQ3RCLFNBQUssU0FBTCxHQUFpQixTQUFqQjtBQUNIOzs7O29DQUNlO0FBQ2QsYUFBTyxLQUFLLFNBQVo7QUFDRDs7Ozs7Ozs7O3FCQUdPLFU7Ozs7Ozs7Ozs7Ozs7O0lBSUcsSSxXQUFBLEk7OztBQUNYLGtCQUFjO0FBQUE7O0FBQUEsbUZBQ04sbUNBRE07QUFFYjs7Ozs7Ozs7OztxQkFHTyxVOzs7O3FCQUNBLG1COzs7O3FCQUNBLHFDOzs7Ozs7Ozs7Ozs7RUFSZ0IsUzs7SUFXYixLLFdBQUEsSzs7O0FBQ1gsbUJBQWM7QUFBQTs7QUFBQSxvRkFDTix1RkFETTtBQUViOzs7Ozs7Ozs7O3FCQUdPLHdCOzs7O3FCQUNBLGdCOzs7O3FCQUNBLGU7Ozs7Ozs7Ozs7OztFQVJpQixTOztJQVdkLEssV0FBQSxLOzs7QUFDWCxtQkFBYztBQUFBOztBQUFBOztBQUVaLFdBQUssU0FBTCxHQUFpQixpQ0FBakI7QUFGWTtBQUdiOzs7RUFKd0IsUzs7QUFPcEIsU0FBUyxRQUFULEdBQW9CO0FBQ3pCLE1BQUksU0FBUyxLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsTUFBaUIsSUFBSSxDQUFyQixDQUFYLElBQXNDLENBQW5EOztBQUVBLE1BQUksVUFBVSxDQUFkLEVBQWlCO0FBQ2YsV0FBTyxJQUFJLElBQUosRUFBUDtBQUNELEdBRkQsTUFFTyxJQUFJLFVBQVUsQ0FBZCxFQUFpQjtBQUN0QixXQUFPLElBQUksS0FBSixFQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUksVUFBVSxDQUFkLEVBQWlCO0FBQ3RCLFdBQU8sSUFBSSxLQUFKLEVBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSSxVQUFVLENBQWQsRUFBaUI7QUFDdEIsV0FBTyxJQUFJLFNBQUosRUFBUDtBQUNEO0FBQ0YiLCJmaWxlIjoiZW5jb3VudGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiYmFiZWwtY29yZS9yZWdpc3RlclwiO1xyXG5pbXBvcnQgXCJiYWJlbC1wb2x5ZmlsbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVuY291bnRlciB7XHJcbiAgY29uc3RydWN0b3IoaW50cm9UZXh0PVwiXCIpIHtcclxuICAgICAgdGhpcy5pbnRyb1RleHQgPSBpbnRyb1RleHQ7XHJcbiAgfVxyXG4gIHdoZW5FbmNvdW50ZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnRyb1RleHQ7XHJcbiAgfVxyXG5cclxuICAqIHBva2UoKSB7XHJcbiAgICB5aWVsZCBcIndoYXRzIHVwXCI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmVhciBleHRlbmRzIEVuY291bnRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcImdyciBncm93LCB5b3UgZW5jb3VudGVyZWQgYSBiZWFyIVwiKTtcclxuICB9XHJcblxyXG4gICogcG9rZSgpIHtcclxuICAgIHlpZWxkIFwiR3JyciAuLi5cIjtcclxuICAgIHlpZWxkIFwiQmVhciBpcyBhZ3Jlc3NpdmVcIjtcclxuICAgIHlpZWxkIFwiQmVhciBpcyBhdHRhY2tpbmcgeW91ISBXYXRjaCBvdXQgOylcIjtcclxuICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFuZ2VsIGV4dGVuZHMgRW5jb3VudGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFwid293LCB5b3UgZW5jb3VudGVyZWQgYW4gYW5nZWwsIHRoaXMgd2lsbCBnaXZlIHlvdSBzdHJlbmd0aCBhbmQgaGVhbGluZyBwb3NzaWJpbGl0aWVzIVwiKTtcclxuICB9XHJcblxyXG4gICogcG9rZSgpIHtcclxuICAgIHlpZWxkIFwiWW91IGNhbid0IGNhdGNoIG1lIC4uLlwiO1xyXG4gICAgeWllbGQgXCJMZWF2ZSBtZSBhbG9uZVwiO1xyXG4gICAgeWllbGQgXCJJIGxvdmUgeW91IDopXCI7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHaG9zdCBleHRlbmRzIEVuY291bnRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5pbnRyb1RleHQgPSBcIkJvb29oLCB5b3UgZW5jb3VudGVyZWQgYSBHaG9zdCFcIjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZSgpIHtcclxuICB2YXIgbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDQgLSAxKSkgKyAxO1xyXG5cclxuICBpZiAobnVtYmVyID09IDEpIHtcclxuICAgIHJldHVybiBuZXcgQmVhcigpO1xyXG4gIH0gZWxzZSBpZiAobnVtYmVyID09IDIpIHtcclxuICAgIHJldHVybiBuZXcgQW5nZWwoKTtcclxuICB9IGVsc2UgaWYgKG51bWJlciA9PSAzKSB7XHJcbiAgICByZXR1cm4gbmV3IEdob3N0KCk7XHJcbiAgfSBlbHNlIGlmIChudW1iZXIgPT0gNCkge1xyXG4gICAgcmV0dXJuIG5ldyBFbmNvdW50ZXIoKTtcclxuICB9XHJcbn1cclxuIl19