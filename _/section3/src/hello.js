import {Environment} from "./environment.js";
import {options, print} from "./additions.js";

const defaultLine = 'Start your journey now!';
const BR = "<br />";

var environment = new Environment();

function addToOutput(newLine=defaultLine) {
  let output = document.querySelector("#output");

  output.innerHTML = output.innerHTML + BR + newLine;
}

function onCommand(command) {
  if (command == "help") {
    options.outputOptions();
  } else if (command == "left") {
    addToOutput(environment.stumbleUpon());
  } else if (command == "right") {
    addToOutput(environment.stumbleUpon());
  } else if (command == "up") {
    addToOutput(environment.stumbleUpon());
  } else if (command == "down") {
    addToOutput(environment.stumbleUpon());
  } else {
    addToOutput(command);
  }
}

function onClickEnter() {
  let commands = document.querySelector("#commands");

  onCommand(commands.value)
}

function main() {
  let enterEl = document.querySelector("#enter");

  enterEl.addEventListener("click", onClickEnter, false);

  addToOutput();
}

main();

print("log", "hello");
