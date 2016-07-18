// // FUNCTION EXPRESSION/FUNCTION DECLARATION
//
//
// // expression
// // double(1); // ERROR
// var double = function (a) {
//   console.log(a * 2);
// };
// double(4);
//
// // function expression use case
// var userFunction;
//
// if (+prompt('Enter any number')) {
//   userFunction = function () {
//     console.log('true');
//   };
// } else {
//   userFunction = function () {
//     console.log('false');
//   };
// }
//
// userFunction();
//
// // declaration
// triple(5);
//
// function triple(a) {
//   console.log(a * 3);
// }
// triple(3);
//
// // anonymus function
//
// var element = document.getElementById('text');
// element.addEventListener('click', function () {
//   console.log('anonymus function test');
// });

// // new Function
// 
// function constructor(a) {
//   console.log('Contructed function test');
// }
//
// var constructor = new Function('a', 'console.log("Contructed function test 666")');
//
// constructor();


// Closures, modularity
