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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hZGRpdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFPLElBQU0sd0JBQVEsU0FBUixLQUFRO0FBQUEsb0NBQUksSUFBSjtBQUFJLFFBQUo7QUFBQTs7QUFBQSxTQUFhLFFBQVEsR0FBUixDQUFZLEtBQUssQ0FBTCxFQUFRLFdBQVIsS0FBd0IsSUFBeEIsR0FBK0IsS0FBSyxDQUFMLENBQTNDLENBQWI7QUFBQSxDQUFkOztBQUVBLElBQU0sd0NBQWdCLE9BQU8sZUFBUCxDQUF0Qjs7QUFFQSxJQUFJO0FBQ1QsVUFBUTtBQURDLDZCQUVSLGFBRlEsRUFFUSxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLElBQWxCLEVBQXdCLE1BQXhCLEVBQWdDLE1BQWhDLENBRlIscUVBR0ssT0FITCxFQUdjO0FBQUE7O0FBQ3JCLE9BQUssYUFBTCxFQUFvQixPQUFwQixDQUE0QjtBQUFBLFdBQzFCLFFBQVEsTUFBSyxNQUFMLEdBQWMsR0FBZCxHQUFvQixDQUE1QixDQUQwQjtBQUFBLEdBQTVCO0FBRUQsQ0FOUSxZQUFKIiwiZmlsZSI6ImFkZGl0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcmludCA9ICguLi5hcmdzKSA9PiBjb25zb2xlLmxvZyhhcmdzWzBdLnRvVXBwZXJDYXNlKCkgKyBcIjogXCIgKyBhcmdzWzFdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBJTlBVVF9PUFRJT05TID0gU3ltYm9sKCdpbnB1dF9vcHRpb25zJyk7XHJcblxyXG5leHBvcnQgdmFyIG9wdGlvbnMgPSB7XHJcbiAgX2ludHJvOiBcIllvdSBjYW4gdHlwZVwiLFxyXG4gIFtJTlBVVF9PUFRJT05TXTogW1wibGVmdFwiLCBcInJpZ2h0XCIsIFwidXBcIiwgXCJkb3duXCIsIFwiaGVscFwiXSxcclxuICBvdXRwdXRPcHRpb25zKHdyaXRlRm4pIHtcclxuICAgIHRoaXNbSU5QVVRfT1BUSU9OU10uZm9yRWFjaChmID0+XHJcbiAgICAgIHdyaXRlRm4odGhpcy5faW50cm8gKyBcIiBcIiArIGYpKTtcclxuICB9XHJcbn07XHJcbiJdfQ==