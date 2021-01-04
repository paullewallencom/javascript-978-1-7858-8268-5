import "babel-core/register";
import "babel-polyfill";

import {run} from "./run.js";

function* echo(text, delay = 0) {
        const caller = yield;
        setTimeout(() => caller.success(text), delay);
}

export function runnableLogs() {
  run(function* echoes() {
          console.log(yield echo('this'));
          console.log(yield echo('is'));
          console.log(yield echo('a test'));
  });

  run(function* parallelEchoes() {
          let startTime = Date.now();
          let texts = yield [
              echo('this', 1000),
              echo('is', 900),
              echo('a test', 800)
          ];
          console.log(texts); // ['this', 'is', 'a test']
          console.log('Time: '+(Date.now()-startTime));
  });
}
