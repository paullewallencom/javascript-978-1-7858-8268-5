"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onChange = undefined;

var onChange = exports.onChange = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(files, tresCoords, treasures) {
    var processed_arr, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, results, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, result;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _onFilesSelected(files);

          case 3:
            processed_arr = _context.sent;

            (0, _additions.print)("file", processed_arr);
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 8;
            _iterator = processed_arr[Symbol.iterator]();

          case 10:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 34;
              break;
            }

            results = _step.value;
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context.prev = 15;

            for (_iterator2 = results[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              result = _step2.value;

              tresCoords.add(result.coordinates);
              treasures.set(result.coordinates, result.treasure);
            }
            _context.next = 23;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](15);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t0;

          case 23:
            _context.prev = 23;
            _context.prev = 24;

            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }

          case 26:
            _context.prev = 26;

            if (!_didIteratorError2) {
              _context.next = 29;
              break;
            }

            throw _iteratorError2;

          case 29:
            return _context.finish(26);

          case 30:
            return _context.finish(23);

          case 31:
            _iteratorNormalCompletion = true;
            _context.next = 10;
            break;

          case 34:
            _context.next = 40;
            break;

          case 36:
            _context.prev = 36;
            _context.t1 = _context["catch"](8);
            _didIteratorError = true;
            _iteratorError = _context.t1;

          case 40:
            _context.prev = 40;
            _context.prev = 41;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 43:
            _context.prev = 43;

            if (!_didIteratorError) {
              _context.next = 46;
              break;
            }

            throw _iteratorError;

          case 46:
            return _context.finish(43);

          case 47:
            return _context.finish(40);

          case 48:
            _context.next = 53;
            break;

          case 50:
            _context.prev = 50;
            _context.t2 = _context["catch"](0);

            (0, _additions.print)("file", "reading error" + _context.t2);

          case 53:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 50], [8, 36, 40, 48], [15, 19, 23, 31], [24,, 26, 30], [41,, 43, 47]]);
  }));

  return function onChange(_x, _x2, _x3) {
    return ref.apply(this, arguments);
  };
}();

require("babel-core/register");

require("babel-polyfill");

var _additions = require("./additions.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

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
  return new Promise(function (resolve, reject) {
    // If we use onloadend, we need to check the readyState.
    reader.onload = function (evt) {
      if (evt.target.readyState == FileReader.DONE) {
        // DONE == 2
        resolve(JSON.parse(evt.target.result));
      }
    };

    if (file) {
      reader.readAsText(file, "UTF-8");
    }
  });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlcHJvY2Vzc2luZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztzREFLTyxpQkFBd0IsS0FBeEIsRUFBK0IsVUFBL0IsRUFBMkMsU0FBM0M7QUFBQSxRQUVHLGFBRkgsa0ZBSVEsT0FKUix1RkFLVSxNQUxWOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUV5QixpQkFBaUIsS0FBakIsQ0FGekI7O0FBQUE7QUFFRyx5QkFGSDs7QUFHRCxrQ0FBTSxNQUFOLEVBQWMsYUFBZDtBQUhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSW1CLGFBSm5COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSVEsbUJBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLQyw4QkFBbUIsT0FBbkIsMkhBQTRCO0FBQW5CLG9CQUFtQjs7QUFDMUIseUJBQVcsR0FBWCxDQUFlLE9BQU8sV0FBdEI7QUFDQSx3QkFBVSxHQUFWLENBQWMsT0FBTyxXQUFyQixFQUFrQyxPQUFPLFFBQXpDO0FBQ0Q7QUFSRjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBV0Ysa0NBQU0sTUFBTixFQUFjLDZCQUFkOztBQVhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7O2tCQUFlLFE7Ozs7O0FBTHRCOztBQUNBOztBQUVBOzs7O0FBaUJBLFNBQVMsZ0JBQVQsQ0FBMEIsS0FBMUIsRUFBaUM7QUFDL0IsTUFBSSxVQUFVLFFBQVEsT0FBUixFQUFkO0FBQ0EsTUFBSSxlQUFlLEVBQW5CO0FBQ0EsT0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLE1BQU0sTUFBMUIsRUFBa0MsR0FBbEMsRUFBdUM7QUFDbkMsUUFBSSxPQUFPLE1BQU0sQ0FBTixDQUFYO0FBQ0EsaUJBQWEsSUFBYixDQUFrQixZQUFZLElBQVosQ0FBbEI7QUFDSDtBQUNELFNBQU8sUUFBUSxHQUFSLENBQVksWUFBWixDQUFQO0FBQ0Q7O0FBRUQsU0FBUyxXQUFULENBQXFCLElBQXJCLEVBQTJCO0FBQ3pCLE1BQUksU0FBUyxJQUFJLFVBQUosRUFBYjtBQUNBLFNBQU8sSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjs7QUFFdEMsV0FBTyxNQUFQLEdBQWdCLFVBQVMsR0FBVCxFQUFjO0FBQzFCLFVBQUksSUFBSSxNQUFKLENBQVcsVUFBWCxJQUF5QixXQUFXLElBQXhDLEVBQThDOztBQUMxQyxnQkFBUSxLQUFLLEtBQUwsQ0FBVyxJQUFJLE1BQUosQ0FBVyxNQUF0QixDQUFSO0FBQ0g7QUFDSixLQUpEOztBQU1BLFFBQUksSUFBSixFQUFVO0FBQ1IsYUFBTyxVQUFQLENBQWtCLElBQWxCLEVBQXdCLE9BQXhCO0FBQ0Q7QUFDRixHQVhNLENBQVA7QUFZRCIsImZpbGUiOiJmaWxlcHJvY2Vzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcImJhYmVsLWNvcmUvcmVnaXN0ZXJcIjtcclxuaW1wb3J0IFwiYmFiZWwtcG9seWZpbGxcIjtcclxuXHJcbmltcG9ydCB7b3B0aW9ucywgcHJpbnR9IGZyb20gXCIuL2FkZGl0aW9ucy5qc1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG9uQ2hhbmdlKGZpbGVzLCB0cmVzQ29vcmRzLCB0cmVhc3VyZXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHZhciBwcm9jZXNzZWRfYXJyID0gYXdhaXQgX29uRmlsZXNTZWxlY3RlZChmaWxlcyk7XHJcbiAgICAgIHByaW50KFwiZmlsZVwiLCBwcm9jZXNzZWRfYXJyKTtcclxuICAgICAgZm9yICh2YXIgcmVzdWx0cyBvZiBwcm9jZXNzZWRfYXJyKSB7XHJcbiAgICAgICAgZm9yICh2YXIgcmVzdWx0IG9mIHJlc3VsdHMpIHtcclxuICAgICAgICAgIHRyZXNDb29yZHMuYWRkKHJlc3VsdC5jb29yZGluYXRlcyk7XHJcbiAgICAgICAgICB0cmVhc3VyZXMuc2V0KHJlc3VsdC5jb29yZGluYXRlcywgcmVzdWx0LnRyZWFzdXJlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfSBjYXRjaCAoZSkge1xyXG4gICAgIHByaW50KFwiZmlsZVwiLCBcInJlYWRpbmcgZXJyb3JcIiArIGUpXHJcbiAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gX29uRmlsZXNTZWxlY3RlZChmaWxlcykge1xyXG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgdmFyIGFycl9wcm9taXNlcyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGZpbGUgPSBmaWxlc1tpXTtcclxuICAgICAgYXJyX3Byb21pc2VzLnB1c2gocEZpbGVSZWFkZXIoZmlsZSkpO1xyXG4gIH1cclxuICByZXR1cm4gUHJvbWlzZS5hbGwoYXJyX3Byb21pc2VzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcEZpbGVSZWFkZXIoZmlsZSkge1xyXG4gIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAvLyBJZiB3ZSB1c2Ugb25sb2FkZW5kLCB3ZSBuZWVkIHRvIGNoZWNrIHRoZSByZWFkeVN0YXRlLlxyXG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgIGlmIChldnQudGFyZ2V0LnJlYWR5U3RhdGUgPT0gRmlsZVJlYWRlci5ET05FKSB7IC8vIERPTkUgPT0gMlxyXG4gICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UoZXZ0LnRhcmdldC5yZXN1bHQpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChmaWxlKSB7XHJcbiAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUsIFwiVVRGLThcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIl19