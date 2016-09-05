// console.log(Math.random(10));

// function getMax(min, max) {
//   console.log(Math.round(min + Math.random() * (max - min)));
// }
//
// for (i = 0; i < 50; i++) {
//
//   getMax(2, 10);
//
// }

var collection = [1, 'test', 'hello'];

function search(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      console.log(arr.indexOf(value));
    } else {
      console.log('-1');
    }
    // break;
  }
}

search(collection, 'test');
