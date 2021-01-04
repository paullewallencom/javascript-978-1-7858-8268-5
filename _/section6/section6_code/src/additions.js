export const print = (...args) => console.log(args[0].toUpperCase() + ": " + args[1]);

export const INPUT_OPTIONS = Symbol('input_options');

export var options = {
  _intro: "You can type",
  [INPUT_OPTIONS]: ["left", "right", "up", "down", "help", "poke"],
  outputOptions(writeFn) {
    this[INPUT_OPTIONS].forEach(f =>
      writeFn(this._intro + " " + f));
  }
};
