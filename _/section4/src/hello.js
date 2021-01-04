import {Environment} from "./environment.js";
import {options, print} from "./additions.js";

const defaultLine = 'Start your journey now!';
const BR = "<br />";

var environment = new Environment();
var x = 0, y = 0;
var treasures = new WeakMap();
var tresCoords = new Set();

function addToOutput(newLine=defaultLine) {
  let output = document.querySelector("#output");

  output.innerHTML = output.innerHTML + BR + newLine;
}

function navigate(stepX, stepY) {
  [x, y] = [x+stepX, y+stepY];

  let coordinates = document.querySelector("#coordinates");
  coordinates.innerHTML = `${x} , ${y}`;
}

function catchTreasure() {
  // find treasure coordinates
  let findCoords;
  for (let coords of tresCoords) {
    if (coords.x == x && coords.y == y) {
       findCoords = coords;
    }
  }
  if (findCoords) {
    var {name, value} = treasures.get(findCoords);
    addToOutput(`you found ${name}, it's ${value} gold`);
  }
}

function onCommand(command) {
  if (command == "help") {
    options.outputOptions(addToOutput);
  } else if (command == "left") {
    navigate(-1, 0);
    addToOutput(environment.stumbleUpon());
  } else if (command == "right") {
    navigate(1, 0);
    addToOutput(environment.stumbleUpon());
  } else if (command == "up") {
    navigate(0, 1);
    addToOutput(environment.stumbleUpon());
  } else if (command == "down") {
    navigate(0, -1);
    addToOutput(environment.stumbleUpon());
  } else {
    addToOutput(command);
  }
  catchTreasure();
}

function onClickEnter() {
  let commands = document.querySelector("#commands");

  onCommand(commands.value)
}

function main() {
  let enterEl = document.querySelector("#enter");
  enterEl.addEventListener("click", onClickEnter, false);

  addToOutput();

  // fill in some treasures
  var coordinate1 = {x: 2, y: 2};
  tresCoords.add(coordinate1);
  treasures.set(coordinate1, {name:"treasure chest", value:100});
  var coordinate2 = {x: 2, y: 0};
  tresCoords.add(coordinate2);
  treasures.set(coordinate2, {name:"medaillon", value:10});
}

main();

print("log", "hello");
print("symbols", Object.getOwnPropertySymbols(options))
