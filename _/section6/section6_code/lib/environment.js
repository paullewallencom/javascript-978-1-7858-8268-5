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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbnZpcm9ubWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7SUFBWSxTOzs7Ozs7SUFFQyxXLFdBQUEsVztBQUNYLHVCQUFZLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsU0FBSyxJQUFMLEdBQVksSUFBWjtBQUNBLFNBQUssU0FBTCxHQUFpQixVQUFVLFFBQVYsRUFBakI7QUFDRDs7OztrQ0FFYTtBQUNaLFdBQUssU0FBTCxHQUFpQixVQUFVLFFBQVYsRUFBakI7QUFDQSxXQUFLLGFBQUwsR0FBcUIsS0FBSyxTQUFMLENBQWUsSUFBZixFQUFyQjs7QUFFQSxVQUFJLGNBQWMsT0FBTyw2QkFBUCxHQUF1QyxLQUFLLFNBQUwsQ0FBZSxhQUFmLEVBQXpEO0FBQ0EsYUFBTyxXQUFQO0FBQ0Q7OzsyQkFFTTtBQUNMLFVBQUksYUFBYSxLQUFLLGFBQUwsQ0FBbUIsSUFBbkIsRUFBakI7QUFDQSxVQUFJLENBQUMsV0FBVyxJQUFoQixFQUFzQjtBQUNwQixlQUFPLFdBQVcsS0FBbEI7QUFDRDtBQUNELGFBQU8sRUFBUDtBQUNEIiwiZmlsZSI6ImVudmlyb25tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZW5jb3VudGVyIGZyb20gJy4vZW5jb3VudGVyLmpzJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5lbmNvdW50ZXIgPSBlbmNvdW50ZXIuZ2VuZXJhdGUoKTtcclxuICB9XHJcblxyXG4gIHN0dW1ibGVVcG9uKCkge1xyXG4gICAgdGhpcy5lbmNvdW50ZXIgPSBlbmNvdW50ZXIuZ2VuZXJhdGUoKTtcclxuICAgIHRoaXMucG9rZUVuY291bnRlciA9IHRoaXMuZW5jb3VudGVyLnBva2UoKTtcclxuXHJcbiAgICB2YXIgaW50ZXJhY3Rpb24gPSBuYW1lICsgXCJZb3UganVzdCBzdHVtYmxlZCB1cG9uIC4uLiBcIiArIHRoaXMuZW5jb3VudGVyLndoZW5FbmNvdW50ZXIoKTtcclxuICAgIHJldHVybiBpbnRlcmFjdGlvbjtcclxuICB9XHJcblxyXG4gIHBva2UoKSB7XHJcbiAgICB2YXIgcG9rZVJldHVybiA9IHRoaXMucG9rZUVuY291bnRlci5uZXh0KCk7XHJcbiAgICBpZiAoIXBva2VSZXR1cm4uZG9uZSkge1xyXG4gICAgICByZXR1cm4gcG9rZVJldHVybi52YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxufVxyXG4iXX0=