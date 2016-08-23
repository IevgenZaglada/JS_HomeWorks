'use strict';

// let a = 'hello world';

// if (true) {
//   let a = 7;
//   console.log('a ', a);
// }

// console.log('a ', a);


// const a = 5;
// a = 10;

// let a = 2;
// let b = 3;
// console.log(`${a} + ${b} = ${a + b}`);


// function showText(title = 'Default value which is unset', a = 666, b = 777) {
//   console.log(`${title} ${a} ${b}`);
// }
//
// showText('hello world', 2, 3);
// showText();
// showText('hello world');

// let sum = (a = 3, b = 10) => a + b;
// console.log(sum());

var arr = [1, 2, 3];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var value = _step.value;

    console.log('value', value);
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
