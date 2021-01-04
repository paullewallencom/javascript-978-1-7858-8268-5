import "babel-core/register";
import "babel-polyfill";

import {options, print} from "./additions.js";

export async function onChange(files, tresCoords, treasures) {
    try {
      var processed_arr = await _onFilesSelected(files);
      print("file", processed_arr);
      for (var results of processed_arr) {
        for (var result of results) {
          tresCoords.add(result.coordinates);
          treasures.set(result.coordinates, result.treasure);
        }
      }
   } catch (e) {
     print("file", "reading error" + e)
   }
}

function _onFilesSelected(files) {
  var promise = Promise.resolve();
  var arr_promises = [];
  for (var i = 0; i < files.length; i++) {
      var file = files[i];
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
