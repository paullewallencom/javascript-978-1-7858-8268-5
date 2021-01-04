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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hZGRpdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxJQUFNLHdCQUFRLFNBQVIsS0FBUTtBQUFBLG9DQUFJLElBQUo7QUFBSSxRQUFKO0FBQUE7O0FBQUEsU0FBYSxRQUFRLEdBQVIsQ0FBWSxLQUFLLENBQUwsRUFBUSxXQUFSLEtBQXdCLElBQXhCLEdBQStCLEtBQUssQ0FBTCxDQUEzQyxDQUFiO0FBQUEsQ0FBZDs7QUFFQSxJQUFJLDRCQUFVO0FBQ25CLFVBQVEsY0FEVztBQUVuQixZQUFVLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsSUFBbEIsRUFBd0IsTUFBeEIsRUFBZ0MsTUFBaEMsQ0FGUztBQUduQixlQUhtQiwyQkFHSDtBQUFBOztBQUNkLFNBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0I7QUFBQSxhQUNwQixZQUFZLE1BQUssTUFBTCxHQUFjLEdBQWQsR0FBb0IsQ0FBaEMsQ0FEb0I7QUFBQSxLQUF0QjtBQUVEO0FBTmtCLENBQWQiLCJmaWxlIjoiYWRkaXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByaW50ID0gKC4uLmFyZ3MpID0+IGNvbnNvbGUubG9nKGFyZ3NbMF0udG9VcHBlckNhc2UoKSArIFwiOiBcIiArIGFyZ3NbMV0pO1xyXG5cclxuZXhwb3J0IHZhciBvcHRpb25zID0ge1xyXG4gIF9pbnRybzogXCJZb3UgY2FuIHR5cGVcIixcclxuICBfb3B0aW9uczogW1wibGVmdFwiLCBcInJpZ2h0XCIsIFwidXBcIiwgXCJkb3duXCIsIFwiaGVscFwiXSxcclxuICBvdXRwdXRPcHRpb25zKCkge1xyXG4gICAgdGhpcy5fb3B0aW9ucy5mb3JFYWNoKGYgPT5cclxuICAgICAgYWRkVG9PdXRwdXQodGhpcy5faW50cm8gKyBcIiBcIiArIGYpKTtcclxuICB9XHJcbn07XHJcbiJdfQ==