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


var arr = [];

for (var i = 2; i < 100; i++) {
  arr[i] = true;
}

var p = 2;

do {
  for (i = 2 * p; i < 100; i += p) {
    arr[i] = false;
  }

  for (i = p + 1; i < 100; i++) {
    if (arr[i]) break;
  }

p = i;

} while ( p * p < 100 );

console.log(arr);

var sum = 0;

for (i = 0; i <= arr.length; i++) {
  if (arr[i]) {
    sum += i;
  }
}

console.log(sum);
