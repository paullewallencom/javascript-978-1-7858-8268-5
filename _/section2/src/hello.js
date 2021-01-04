const defaultLine = 'Start your journey now!';
const BR = "<br />";

const print = (...args) => console.log(args[0].toUpperCase() + ": " + args[1]);

var options = {
  _intro: "You can type",
  _options: ["left", "right", "up", "down", "help"],
  outputOptions() {
    this._options.forEach(f =>
      addToOutput(this._intro + " " + f));
  }
};

function addToOutput(newLine=defaultLine) {
  let output = document.querySelector("#output");

  output.innerHTML = output.innerHTML + BR + newLine;
}

function onClickEnter() {
  let commands = document.querySelector("#commands");

  if (commands.value == "help") {
    options.outputOptions();
  } else {
    addToOutput(commands.value);
  }
}

function main() {
  let enterEl = document.querySelector("#enter");

  enterEl.addEventListener("click", onClickEnter, false);

  addToOutput();
}

main();

print("log", "hello");
