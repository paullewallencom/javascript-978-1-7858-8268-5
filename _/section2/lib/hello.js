"use strict";

var defaultLine = 'Start your journey now!';
var BR = "<br />";

var print = function print() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return console.log(args[0].toUpperCase() + ": " + args[1]);
};

var options = {
  _intro: "You can type",
  _options: ["left", "right", "up", "down", "help"],
  outputOptions: function outputOptions() {
    var _this = this;

    this._options.forEach(function (f) {
      return addToOutput(_this._intro + " " + f);
    });
  }
};

function addToOutput() {
  var newLine = arguments.length <= 0 || arguments[0] === undefined ? defaultLine : arguments[0];

  var output = document.querySelector("#output");

  output.innerHTML = output.innerHTML + BR + newLine;
}

function onClickEnter() {
  var commands = document.querySelector("#commands");

  if (commands.value == "help") {
    options.outputOptions();
  } else {
    addToOutput(commands.value);
  }
}

function main() {
  var enterEl = document.querySelector("#enter");

  enterEl.addEventListener("click", onClickEnter, false);

  addToOutput();
}

main();

print("log", "hello");
//# sourceMappingURL=hello.js.map