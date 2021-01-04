export const print = (...args) => console.log(args[0].toUpperCase() + ": " + args[1]);

export var options = {
  _intro: "You can type",
  _options: ["left", "right", "up", "down", "help"],
  outputOptions() {
    this._options.forEach(f =>
      addToOutput(this._intro + " " + f));
  }
};
