"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.run = run;
/**
* Run the generator object `genObj`,
* report results via the callbacks in `callbacks`.
*/
function runGenObj(genObj) {
    var callbacks = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];

    handleOneNext();

    /**
     * Handle one invocation of `next()`:
     * If there was a `prevResult`, it becomes the parameter.
     * What `next()` returns is what we have to run next.
     * The `success` callback triggers another round,
     * with the result assigned to `prevResult`.
     */
    function handleOneNext() {
        var prevResult = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

        try {
            var yielded = genObj.next(prevResult); // may throw
            if (yielded.done) {
                if (yielded.value !== undefined) {
                    // Something was explicitly returned:
                    // Report the value as a result to the caller
                    callbacks.success(yielded.value);
                }
            } else {
                setTimeout(runYieldedValue, 0, yielded.value);
            }
        }
        // Catch unforeseen errors in genObj
        catch (error) {
            if (callbacks) {
                callbacks.failure(error);
            } else {
                throw error;
            }
        }
    }
    function runYieldedValue(yieldedValue) {
        if (yieldedValue === undefined) {
            // If code yields `undefined`, it wants callbacks
            handleOneNext(callbacks);
        } else if (Array.isArray(yieldedValue)) {
            runInParallel(yieldedValue);
        } else {
            // Yielded value is a generator object
            runGenObj(yieldedValue, {
                success: function success(result) {
                    handleOneNext(result);
                },
                failure: function failure(err) {
                    genObj.throw(err);
                }
            });
        }
    }

    function runInParallel(genObjs) {
        var resultArray = new Array(genObjs.length);
        var resultCountdown = genObjs.length;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            var _loop = function _loop() {
                var _step$value = _slicedToArray(_step.value, 2);

                var i = _step$value[0];
                var genObj = _step$value[1];

                runGenObj(genObj, {
                    success: function success(result) {
                        resultArray[i] = result;
                        resultCountdown--;
                        if (resultCountdown <= 0) {
                            handleOneNext(resultArray);
                        }
                    },
                    failure: function failure(err) {
                        genObj.throw(err);
                    }
                });
            };

            for (var _iterator = genObjs.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                _loop();
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
}

function run(genFunc) {
    runGenObj(genFunc());
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7UUEyRWdCLEcsR0FBQSxHOzs7OztBQXZFaEIsU0FBUyxTQUFULENBQW1CLE1BQW5CLEVBQWtEO0FBQUEsUUFBdkIsU0FBdUIseURBQVgsU0FBVzs7QUFDMUM7Ozs7Ozs7OztBQVNBLGFBQVMsYUFBVCxHQUEwQztBQUFBLFlBQW5CLFVBQW1CLHlEQUFOLElBQU07O0FBQ3RDLFlBQUk7QUFDQSxnQkFBSSxVQUFVLE9BQU8sSUFBUCxDQUFZLFVBQVosQ0FBZCxDO0FBQ0EsZ0JBQUksUUFBUSxJQUFaLEVBQWtCO0FBQ2Qsb0JBQUksUUFBUSxLQUFSLEtBQWtCLFNBQXRCLEVBQWlDOzs7QUFHN0IsOEJBQVUsT0FBVixDQUFrQixRQUFRLEtBQTFCO0FBQ0g7QUFDSixhQU5ELE1BTU87QUFDSCwyQkFBVyxlQUFYLEVBQTRCLENBQTVCLEVBQStCLFFBQVEsS0FBdkM7QUFDSDtBQUNKOztBQUVELGVBQU8sS0FBUCxFQUFjO0FBQ1YsZ0JBQUksU0FBSixFQUFlO0FBQ1gsMEJBQVUsT0FBVixDQUFrQixLQUFsQjtBQUNILGFBRkQsTUFFTztBQUNILHNCQUFNLEtBQU47QUFDSDtBQUNKO0FBQ0o7QUFDRCxhQUFTLGVBQVQsQ0FBeUIsWUFBekIsRUFBdUM7QUFDbkMsWUFBSSxpQkFBaUIsU0FBckIsRUFBZ0M7O0FBRTVCLDBCQUFjLFNBQWQ7QUFDSCxTQUhELE1BR08sSUFBSSxNQUFNLE9BQU4sQ0FBYyxZQUFkLENBQUosRUFBaUM7QUFDcEMsMEJBQWMsWUFBZDtBQUNILFNBRk0sTUFFQTs7QUFFSCxzQkFBVSxZQUFWLEVBQXdCO0FBQ3BCLHVCQURvQixtQkFDWixNQURZLEVBQ0o7QUFDWixrQ0FBYyxNQUFkO0FBQ0gsaUJBSG1CO0FBSXBCLHVCQUpvQixtQkFJWixHQUpZLEVBSVA7QUFDVCwyQkFBTyxLQUFQLENBQWEsR0FBYjtBQUNIO0FBTm1CLGFBQXhCO0FBUUg7QUFDSjs7QUFFRCxhQUFTLGFBQVQsQ0FBdUIsT0FBdkIsRUFBZ0M7QUFDNUIsWUFBSSxjQUFjLElBQUksS0FBSixDQUFVLFFBQVEsTUFBbEIsQ0FBbEI7QUFDQSxZQUFJLGtCQUFrQixRQUFRLE1BQTlCO0FBRjRCO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUEsb0JBR2xCLENBSGtCO0FBQUEsb0JBR2hCLE1BSGdCOztBQUl4QiwwQkFBVSxNQUFWLEVBQWtCO0FBQ2QsMkJBRGMsbUJBQ04sTUFETSxFQUNFO0FBQ1osb0NBQVksQ0FBWixJQUFpQixNQUFqQjtBQUNBO0FBQ0EsNEJBQUksbUJBQW1CLENBQXZCLEVBQTBCO0FBQ3RCLDBDQUFjLFdBQWQ7QUFDSDtBQUNKLHFCQVBhO0FBUWQsMkJBUmMsbUJBUU4sR0FSTSxFQVFEO0FBQ1QsK0JBQU8sS0FBUCxDQUFhLEdBQWI7QUFDSDtBQVZhLGlCQUFsQjtBQUp3Qjs7QUFHNUIsaUNBQXVCLFFBQVEsT0FBUixFQUF2Qiw4SEFBMEM7QUFBQTtBQWF6QztBQWhCMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlCL0I7QUFDUjs7QUFFTSxTQUFTLEdBQVQsQ0FBYSxPQUFiLEVBQXNCO0FBQ3pCLGNBQVUsU0FBVjtBQUNIIiwiZmlsZSI6InJ1bi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4qIFJ1biB0aGUgZ2VuZXJhdG9yIG9iamVjdCBgZ2VuT2JqYCxcclxuKiByZXBvcnQgcmVzdWx0cyB2aWEgdGhlIGNhbGxiYWNrcyBpbiBgY2FsbGJhY2tzYC5cclxuKi9cclxuZnVuY3Rpb24gcnVuR2VuT2JqKGdlbk9iaiwgY2FsbGJhY2tzID0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaGFuZGxlT25lTmV4dCgpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBIYW5kbGUgb25lIGludm9jYXRpb24gb2YgYG5leHQoKWA6XHJcbiAgICAgICAgICogSWYgdGhlcmUgd2FzIGEgYHByZXZSZXN1bHRgLCBpdCBiZWNvbWVzIHRoZSBwYXJhbWV0ZXIuXHJcbiAgICAgICAgICogV2hhdCBgbmV4dCgpYCByZXR1cm5zIGlzIHdoYXQgd2UgaGF2ZSB0byBydW4gbmV4dC5cclxuICAgICAgICAgKiBUaGUgYHN1Y2Nlc3NgIGNhbGxiYWNrIHRyaWdnZXJzIGFub3RoZXIgcm91bmQsXHJcbiAgICAgICAgICogd2l0aCB0aGUgcmVzdWx0IGFzc2lnbmVkIHRvIGBwcmV2UmVzdWx0YC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVPbmVOZXh0KHByZXZSZXN1bHQgPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgeWllbGRlZCA9IGdlbk9iai5uZXh0KHByZXZSZXN1bHQpOyAvLyBtYXkgdGhyb3dcclxuICAgICAgICAgICAgICAgIGlmICh5aWVsZGVkLmRvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeWllbGRlZC52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNvbWV0aGluZyB3YXMgZXhwbGljaXRseSByZXR1cm5lZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVwb3J0IHRoZSB2YWx1ZSBhcyBhIHJlc3VsdCB0byB0aGUgY2FsbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5zdWNjZXNzKHlpZWxkZWQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChydW5ZaWVsZGVkVmFsdWUsIDAsIHlpZWxkZWQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIENhdGNoIHVuZm9yZXNlZW4gZXJyb3JzIGluIGdlbk9ialxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3MuZmFpbHVyZShlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJ1bllpZWxkZWRWYWx1ZSh5aWVsZGVkVmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKHlpZWxkZWRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBjb2RlIHlpZWxkcyBgdW5kZWZpbmVkYCwgaXQgd2FudHMgY2FsbGJhY2tzXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVPbmVOZXh0KGNhbGxiYWNrcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh5aWVsZGVkVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBydW5JblBhcmFsbGVsKHlpZWxkZWRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBZaWVsZGVkIHZhbHVlIGlzIGEgZ2VuZXJhdG9yIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgcnVuR2VuT2JqKHlpZWxkZWRWYWx1ZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU9uZU5leHQocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZhaWx1cmUoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlbk9iai50aHJvdyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcnVuSW5QYXJhbGxlbChnZW5PYmpzKSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHRBcnJheSA9IG5ldyBBcnJheShnZW5PYmpzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHRDb3VudGRvd24gPSBnZW5PYmpzLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yIChsZXQgW2ksZ2VuT2JqXSBvZiBnZW5PYmpzLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgcnVuR2VuT2JqKGdlbk9iaiwge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdEFycmF5W2ldID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRDb3VudGRvd24tLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdENvdW50ZG93biA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVPbmVOZXh0KHJlc3VsdEFycmF5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbHVyZShlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VuT2JqLnRocm93KGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcnVuKGdlbkZ1bmMpIHtcclxuICAgIHJ1bkdlbk9iaihnZW5GdW5jKCkpO1xyXG59XHJcbiJdfQ==