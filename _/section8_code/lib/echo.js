"use strict";

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.runnableLogs = runnableLogs;

require("babel-core/register");

require("babel-polyfill");

var _run = require("./run.js");

var _marked = [echo].map(regeneratorRuntime.mark);

function echo(text) {
        var delay = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
        var caller;
        return regeneratorRuntime.wrap(function echo$(_context) {
                while (1) {
                        switch (_context.prev = _context.next) {
                                case 0:
                                        _context.next = 2;
                                        return;

                                case 2:
                                        caller = _context.sent;

                                        setTimeout(function () {
                                                return caller.success(text);
                                        }, delay);

                                case 4:
                                case "end":
                                        return _context.stop();
                        }
                }
        }, _marked[0], this);
}

function runnableLogs() {
        (0, _run.run)(regeneratorRuntime.mark(function echoes() {
                return regeneratorRuntime.wrap(function echoes$(_context2) {
                        while (1) {
                                switch (_context2.prev = _context2.next) {
                                        case 0:
                                                _context2.t0 = console;
                                                _context2.next = 3;
                                                return echo('this');

                                        case 3:
                                                _context2.t1 = _context2.sent;

                                                _context2.t0.log.call(_context2.t0, _context2.t1);

                                                _context2.t2 = console;
                                                _context2.next = 8;
                                                return echo('is');

                                        case 8:
                                                _context2.t3 = _context2.sent;

                                                _context2.t2.log.call(_context2.t2, _context2.t3);

                                                _context2.t4 = console;
                                                _context2.next = 13;
                                                return echo('a test');

                                        case 13:
                                                _context2.t5 = _context2.sent;

                                                _context2.t4.log.call(_context2.t4, _context2.t5);

                                        case 15:
                                        case "end":
                                                return _context2.stop();
                                }
                        }
                }, echoes, this);
        }));

        (0, _run.run)(regeneratorRuntime.mark(function parallelEchoes() {
                var startTime, texts;
                return regeneratorRuntime.wrap(function parallelEchoes$(_context3) {
                        while (1) {
                                switch (_context3.prev = _context3.next) {
                                        case 0:
                                                startTime = Date.now();
                                                _context3.next = 3;
                                                return [echo('this', 1000), echo('is', 900), echo('a test', 800)];

                                        case 3:
                                                texts = _context3.sent;

                                                console.log(texts); // ['this', 'is', 'a test']
                                                console.log('Time: ' + (Date.now() - startTime));

                                        case 6:
                                        case "end":
                                                return _context3.stop();
                                }
                        }
                }, parallelEchoes, this);
        }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lY2hvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O1FBVWdCLFksR0FBQSxZOztBQVZoQjs7QUFDQTs7QUFFQTs7ZUFFVSxJOztBQUFWLFNBQVUsSUFBVixDQUFlLElBQWY7QUFBQSxZQUFxQixLQUFyQix5REFBNkIsQ0FBN0I7QUFBQSxZQUNjLE1BRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDYyw4Q0FEZDs7QUFFUSxtREFBVztBQUFBLHVEQUFNLE9BQU8sT0FBUCxDQUFlLElBQWYsQ0FBTjtBQUFBLHlDQUFYLEVBQXVDLEtBQXZDOztBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtPLFNBQVMsWUFBVCxHQUF3QjtBQUM3Qiw4Q0FBSSxTQUFVLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtEQUNJLE9BREo7QUFBQTtBQUFBLHVEQUNzQixLQUFLLE1BQUwsQ0FEdEI7O0FBQUE7QUFBQTs7QUFBQSw2REFDWSxHQURaOztBQUFBLCtEQUVJLE9BRko7QUFBQTtBQUFBLHVEQUVzQixLQUFLLElBQUwsQ0FGdEI7O0FBQUE7QUFBQTs7QUFBQSw2REFFWSxHQUZaOztBQUFBLCtEQUdJLE9BSEo7QUFBQTtBQUFBLHVEQUdzQixLQUFLLFFBQUwsQ0FIdEI7O0FBQUE7QUFBQTs7QUFBQSw2REFHWSxHQUhaOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBVSxNQUFWO0FBQUEsU0FBSjs7QUFNQSw4Q0FBSSxTQUFVLGNBQVY7QUFBQSxvQkFDUSxTQURSLEVBRVEsS0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1EseURBRFIsR0FDb0IsS0FBSyxHQUFMLEVBRHBCO0FBQUE7QUFBQSx1REFFc0IsQ0FDZCxLQUFLLE1BQUwsRUFBYSxJQUFiLENBRGMsRUFFZCxLQUFLLElBQUwsRUFBVyxHQUFYLENBRmMsRUFHZCxLQUFLLFFBQUwsRUFBZSxHQUFmLENBSGMsQ0FGdEI7O0FBQUE7QUFFUSxxREFGUjs7QUFPSSx3REFBUSxHQUFSLENBQVksS0FBWixFO0FBQ0Esd0RBQVEsR0FBUixDQUFZLFlBQVUsS0FBSyxHQUFMLEtBQVcsU0FBckIsQ0FBWjs7QUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVUsY0FBVjtBQUFBLFNBQUo7QUFVRCIsImZpbGUiOiJlY2hvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiYmFiZWwtY29yZS9yZWdpc3RlclwiO1xyXG5pbXBvcnQgXCJiYWJlbC1wb2x5ZmlsbFwiO1xyXG5cclxuaW1wb3J0IHtydW59IGZyb20gXCIuL3J1bi5qc1wiO1xyXG5cclxuZnVuY3Rpb24qIGVjaG8odGV4dCwgZGVsYXkgPSAwKSB7XHJcbiAgICAgICAgY29uc3QgY2FsbGVyID0geWllbGQ7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjYWxsZXIuc3VjY2Vzcyh0ZXh0KSwgZGVsYXkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcnVubmFibGVMb2dzKCkge1xyXG4gIHJ1bihmdW5jdGlvbiogZWNob2VzKCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coeWllbGQgZWNobygndGhpcycpKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHlpZWxkIGVjaG8oJ2lzJykpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coeWllbGQgZWNobygnYSB0ZXN0JykpO1xyXG4gIH0pO1xyXG5cclxuICBydW4oZnVuY3Rpb24qIHBhcmFsbGVsRWNob2VzKCkge1xyXG4gICAgICAgICAgbGV0IHN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICBsZXQgdGV4dHMgPSB5aWVsZCBbXHJcbiAgICAgICAgICAgICAgZWNobygndGhpcycsIDEwMDApLFxyXG4gICAgICAgICAgICAgIGVjaG8oJ2lzJywgOTAwKSxcclxuICAgICAgICAgICAgICBlY2hvKCdhIHRlc3QnLCA4MDApXHJcbiAgICAgICAgICBdO1xyXG4gICAgICAgICAgY29uc29sZS5sb2codGV4dHMpOyAvLyBbJ3RoaXMnLCAnaXMnLCAnYSB0ZXN0J11cclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lOiAnKyhEYXRlLm5vdygpLXN0YXJ0VGltZSkpO1xyXG4gIH0pO1xyXG59XHJcbiJdfQ==