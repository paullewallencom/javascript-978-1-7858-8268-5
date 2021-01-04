"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiplyList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require("babel-core/register");

require("babel-polyfill");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MultiplyList = exports.MultiplyList = function () {
  function MultiplyList(list, limit) {
    _classCallCheck(this, MultiplyList);

    this.list = list;
    this.limit = limit;
  }

  _createClass(MultiplyList, [{
    key: Symbol.iterator,
    value: regeneratorRuntime.mark(function value() {
      var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, value;

      return regeneratorRuntime.wrap(function value$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 3;
              _iterator = this.list[Symbol.iterator]();

            case 5:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context.next = 22;
                break;
              }

              value = _step.value;

              if (!this.isNumeric(value)) {
                _context.next = 17;
                break;
              }

              if (!(value > this.limit)) {
                _context.next = 13;
                break;
              }

              _context.next = 11;
              return value * 2;

            case 11:
              _context.next = 15;
              break;

            case 13:
              _context.next = 15;
              return value;

            case 15:
              _context.next = 19;
              break;

            case 17:
              _context.next = 19;
              return 0;

            case 19:
              _iteratorNormalCompletion = true;
              _context.next = 5;
              break;

            case 22:
              _context.next = 28;
              break;

            case 24:
              _context.prev = 24;
              _context.t0 = _context["catch"](3);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 28:
              _context.prev = 28;
              _context.prev = 29;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 31:
              _context.prev = 31;

              if (!_didIteratorError) {
                _context.next = 34;
                break;
              }

              throw _iteratorError;

            case 34:
              return _context.finish(31);

            case 35:
              return _context.finish(28);

            case 36:
            case "end":
              return _context.stop();
          }
        }
      }, value, this, [[3, 24, 28, 36], [29,, 31, 35]]);
    })
  }, {
    key: "isNumeric",
    value: function isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }
  }]);

  return MultiplyList;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tdWx0aXBseV9saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0lBRWEsWSxXQUFBLFk7QUFDWCx3QkFBWSxJQUFaLEVBQWtCLEtBQWxCLEVBQXlCO0FBQUE7O0FBQ3ZCLFNBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxTQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0Q7OztTQUVFLE9BQU8sUTs7MEZBQ0csSzs7Ozs7Ozs7OzswQkFBUyxLQUFLLEk7Ozs7Ozs7O0FBQWQsbUI7O21CQUNILEtBQUssU0FBTCxDQUFlLEtBQWYsQzs7Ozs7b0JBQ0UsUUFBUSxLQUFLLEs7Ozs7OztxQkFDVCxRQUFRLEM7Ozs7Ozs7O3FCQUVSLEs7Ozs7Ozs7O3FCQUdGLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUtKLEMsRUFBRztBQUNYLGFBQU8sQ0FBQyxNQUFNLFdBQVcsQ0FBWCxDQUFOLENBQUQsSUFBeUIsU0FBUyxDQUFULENBQWhDO0FBQ0QiLCJmaWxlIjoibXVsdGlwbHlfbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcImJhYmVsLWNvcmUvcmVnaXN0ZXJcIjtcclxuaW1wb3J0IFwiYmFiZWwtcG9seWZpbGxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNdWx0aXBseUxpc3Qge1xyXG4gIGNvbnN0cnVjdG9yKGxpc3QsIGxpbWl0KSB7XHJcbiAgICB0aGlzLmxpc3QgPSBsaXN0O1xyXG4gICAgdGhpcy5saW1pdCA9IGxpbWl0O1xyXG4gIH1cclxuXHJcbiAgKiBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcclxuICAgICAgZm9yICh2YXIgdmFsdWUgb2YgdGhpcy5saXN0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNOdW1lcmljKHZhbHVlKSkge1xyXG4gICAgICAgICAgaWYgKHZhbHVlID4gdGhpcy5saW1pdCkge1xyXG4gICAgICAgICAgICB5aWVsZCB2YWx1ZSAqIDI7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB5aWVsZCB2YWx1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgeWllbGQgMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIGlzTnVtZXJpYyhuKSB7XHJcbiAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKG4pO1xyXG4gIH1cclxufVxyXG4iXX0=