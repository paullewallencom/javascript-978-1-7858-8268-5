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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbmNvdW50ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7UUEwQmdCLFEsR0FBQSxROzs7Ozs7OztJQTFCSCxTLFdBQUEsUztBQUNYLHVCQUEwQjtBQUFBLFFBQWQsU0FBYyx5REFBSixFQUFJOztBQUFBOztBQUN0QixTQUFLLFNBQUwsR0FBaUIsU0FBakI7QUFDSDs7OztvQ0FDZTtBQUNkLGFBQU8sS0FBSyxTQUFaO0FBQ0Q7Ozs7OztJQUdVLEksV0FBQSxJOzs7QUFDWCxrQkFBYztBQUFBOztBQUFBLG1GQUNOLG1DQURNO0FBRWI7OztFQUh1QixTOztJQUtiLEssV0FBQSxLOzs7QUFDWCxtQkFBYztBQUFBOztBQUFBLG9GQUNOLHVGQURNO0FBRWI7OztFQUh3QixTOztJQUtkLEssV0FBQSxLOzs7QUFDWCxtQkFBYztBQUFBOztBQUFBOztBQUVaLFdBQUssU0FBTCxHQUFpQixpQ0FBakI7QUFGWTtBQUdiOzs7RUFKd0IsUzs7QUFPcEIsU0FBUyxRQUFULEdBQW9CO0FBQ3pCLE1BQUksU0FBUyxLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsTUFBaUIsSUFBSSxDQUFyQixDQUFYLElBQXNDLENBQW5EOztBQUVBLE1BQUksVUFBVSxDQUFkLEVBQWlCO0FBQ2YsV0FBTyxJQUFJLElBQUosRUFBUDtBQUNELEdBRkQsTUFFTyxJQUFJLFVBQVUsQ0FBZCxFQUFpQjtBQUN0QixXQUFPLElBQUksS0FBSixFQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUksVUFBVSxDQUFkLEVBQWlCO0FBQ3RCLFdBQU8sSUFBSSxLQUFKLEVBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSSxVQUFVLENBQWQsRUFBaUI7QUFDdEIsV0FBTyxJQUFJLFNBQUosRUFBUDtBQUNEO0FBQ0YiLCJmaWxlIjoiZW5jb3VudGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEVuY291bnRlciB7XHJcbiAgY29uc3RydWN0b3IoaW50cm9UZXh0PVwiXCIpIHtcclxuICAgICAgdGhpcy5pbnRyb1RleHQgPSBpbnRyb1RleHQ7XHJcbiAgfVxyXG4gIHdoZW5FbmNvdW50ZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnRyb1RleHQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmVhciBleHRlbmRzIEVuY291bnRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcImdyciBncm93LCB5b3UgZW5jb3VudGVyZWQgYSBiZWFyIVwiKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFuZ2VsIGV4dGVuZHMgRW5jb3VudGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFwid293LCB5b3UgZW5jb3VudGVyZWQgYW4gYW5nZWwsIHRoaXMgd2lsbCBnaXZlIHlvdSBzdHJlbmd0aCBhbmQgaGVhbGluZyBwb3NzaWJpbGl0aWVzIVwiKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdob3N0IGV4dGVuZHMgRW5jb3VudGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmludHJvVGV4dCA9IFwiQm9vb2gsIHlvdSBlbmNvdW50ZXJlZCBhIEdob3N0IVwiO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlKCkge1xyXG4gIHZhciBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNCAtIDEpKSArIDE7XHJcblxyXG4gIGlmIChudW1iZXIgPT0gMSkge1xyXG4gICAgcmV0dXJuIG5ldyBCZWFyKCk7XHJcbiAgfSBlbHNlIGlmIChudW1iZXIgPT0gMikge1xyXG4gICAgcmV0dXJuIG5ldyBBbmdlbCgpO1xyXG4gIH0gZWxzZSBpZiAobnVtYmVyID09IDMpIHtcclxuICAgIHJldHVybiBuZXcgR2hvc3QoKTtcclxuICB9IGVsc2UgaWYgKG51bWJlciA9PSA0KSB7XHJcbiAgICByZXR1cm4gbmV3IEVuY291bnRlcigpO1xyXG4gIH1cclxufVxyXG4iXX0=