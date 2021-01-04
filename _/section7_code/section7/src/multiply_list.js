import "babel-core/register";
import "babel-polyfill";

export class MultiplyList {
  constructor(list, limit) {
    this.list = list;
    this.limit = limit;
  }

  * [Symbol.iterator]() {
      for (var value of this.list) {
        if (this.isNumeric(value)) {
          if (value > this.limit) {
            yield value * 2;
          } else {
            yield value;
          }
        } else {
          yield 0;
        }
      }
  }

  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
}
