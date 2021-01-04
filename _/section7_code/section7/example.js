// Maps
var m = new Map();
m.set("hello", "something");
m.set(s, 34);
m.get(s) == 34;

// Sets
var s = new Set();
s.add("hello").add("something").add("hello");
s.size === 2;
s.has("hello") === true;

// Weak Maps
var wm = new WeakMap();
wm.set("sss", { extra: 42 }); // not allowed, needs to be a object reference
var objRef = new Object();
wm.set(objRef, { extra: 42 });

// Weak Sets
var ws = new WeakSet();
ws.add({ data: 42 });
// Because the added object has no other references, it will not be held in the set

// list matching
var [a, ,b] = [1,2,3];
a === 1;
b === 3;

// object matching
var o = {p: 42, q: true};
var {p, q} = o;

console.log(p); // 42
console.log(q); // true

// object matching, new variables
var o = {p: 42, q: true};
var {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true

// object matching, default variables
var {a=10, b=5} = {a: 3};

console.log(a); // 3
console.log(b); // 5

// Destructuring + defaults arguments
function r({x, y, w = 10, h = 10}) {
  return x + y + w + h;
}
r({x:1, y:2}) === 23

// multiline
`string text line 1
 string text line 2`

// unescaped template strings
String.raw`In ES5 "\n" is a line-feed.`

// Interpolate variable bindings
var name = "Bob", enemy = "Py";
`Hello ${name}, are you ${enemy}?`

// SYMBOLS
var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");

Symbol("foo") === Symbol("foo"); // false

var sym = new Symbol(); // TypeError
