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

require("babel-polyfill");

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
      this.pokeEncounter = this.encounter.poke();

      var interaction = name + "You just stumbled upon ... " + this.encounter.whenEncounter();
      return interaction;
    }
  }, {
    key: "poke",
    value: function poke() {
      var pokeReturn = this.pokeEncounter.next();
      if (!pokeReturn.done) {
        return pokeReturn.value;
      }
      return "";
    }
  }]);

  return Environment;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbnZpcm9ubWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7SUFBWSxTOzs7Ozs7QUFGWixRQUFRLGdCQUFSOztJQUlhLFcsV0FBQSxXO0FBQ1gsdUJBQVksSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsU0FBSyxTQUFMLEdBQWlCLFVBQVUsUUFBVixFQUFqQjtBQUNEOzs7O2tDQUVhO0FBQ1osV0FBSyxTQUFMLEdBQWlCLFVBQVUsUUFBVixFQUFqQjtBQUNBLFdBQUssYUFBTCxHQUFxQixLQUFLLFNBQUwsQ0FBZSxJQUFmLEVBQXJCOztBQUVBLFVBQUksY0FBYyxPQUFPLDZCQUFQLEdBQXVDLEtBQUssU0FBTCxDQUFlLGFBQWYsRUFBekQ7QUFDQSxhQUFPLFdBQVA7QUFDRDs7OzJCQUVNO0FBQ0wsVUFBSSxhQUFhLEtBQUssYUFBTCxDQUFtQixJQUFuQixFQUFqQjtBQUNBLFVBQUksQ0FBQyxXQUFXLElBQWhCLEVBQXNCO0FBQ3BCLGVBQU8sV0FBVyxLQUFsQjtBQUNEO0FBQ0QsYUFBTyxFQUFQO0FBQ0QiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKFwiYmFiZWwtcG9seWZpbGxcIik7XHJcblxyXG5pbXBvcnQgKiBhcyBlbmNvdW50ZXIgZnJvbSAnLi9lbmNvdW50ZXIuanMnXHJcblxyXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmVuY291bnRlciA9IGVuY291bnRlci5nZW5lcmF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3R1bWJsZVVwb24oKSB7XHJcbiAgICB0aGlzLmVuY291bnRlciA9IGVuY291bnRlci5nZW5lcmF0ZSgpO1xyXG4gICAgdGhpcy5wb2tlRW5jb3VudGVyID0gdGhpcy5lbmNvdW50ZXIucG9rZSgpO1xyXG5cclxuICAgIHZhciBpbnRlcmFjdGlvbiA9IG5hbWUgKyBcIllvdSBqdXN0IHN0dW1ibGVkIHVwb24gLi4uIFwiICsgdGhpcy5lbmNvdW50ZXIud2hlbkVuY291bnRlcigpO1xyXG4gICAgcmV0dXJuIGludGVyYWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgcG9rZSgpIHtcclxuICAgIHZhciBwb2tlUmV0dXJuID0gdGhpcy5wb2tlRW5jb3VudGVyLm5leHQoKTtcclxuICAgIGlmICghcG9rZVJldHVybi5kb25lKSB7XHJcbiAgICAgIHJldHVybiBwb2tlUmV0dXJuLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG59XHJcbiJdfQ==