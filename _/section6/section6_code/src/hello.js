import {Environment} from "./environment.js";
import {options, print} from "./additions.js";
import {MultiplyList} from "./multiply_list.js";
import {runnableLogs} from "./echo.js";

const defaultLine = 'Start your journey now!';
const BR = "<br />";

var environment = new Environment();
var x = 0, y = 0;
var treasures = new WeakMap();
var tresCoords = new Set();
var _fileInput;

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
  } else if (command == "poke") {
    addToOutput(environment.poke());
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

  _fileInput = document.querySelector("#files");
  _fileInput.onchange = function() {
    _onFilesSelected().then(function(processed_arr) {
      print("file", processed_arr);
      for (var results of processed_arr) {
        for (var result of results) {
          tresCoords.add(result.coordinates);
          treasures.set(result.coordinates, result.treasure);
        }
      }
    }).catch(function(err) {
      print("file", err);
    });
  };
  // fill in some treasures
  var coordinate1 = {x: 2, y: 2};
  tresCoords.add(coordinate1);
  treasures.set(coordinate1, {name:"treasure chest", value:100});
  var coordinate2 = {x: 2, y: 0};
  tresCoords.add(coordinate2);
  treasures.set(coordinate2, {name:"medaillon", value:10});
}

function _onFilesSelected() {
  var promise = Promise.resolve();
  var arr_promises = [];
  for (var i = 0; i < _fileInput.files.length; i++) {
      var file = _fileInput.files[i];
      arr_promises.push(pFileReader(file));
  }
  return Promise.all(arr_promises);
}

function pFileReader(file) {
  var reader = new FileReader();
  return new Promise((resolve, reject) => {
    // If we use onloadend, we need to check the readyState.
    reader.onload = function(evt) {
        if (evt.target.readyState == FileReader.DONE) { // DONE == 2
            resolve(JSON.parse(evt.target.result));
        }
    };

    if (file) {
      reader.readAsText(file, "UTF-8");
    }
  });
}

main();

print("log", "hello");
print("symbols", Object.getOwnPropertySymbols(options));

// RUN as a list ...
var multiplyList = new MultiplyList([1, 4, "", 5, 1], 2);

for (var value of multiplyList) {
  print("list", value);
}

// Asynchronous generators
runnableLogs();
