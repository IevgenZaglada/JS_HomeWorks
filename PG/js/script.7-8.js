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


// var a = 100;
//
// function calculateLength(r) {
//   // Lexical_Environment = {PI: 3.14, length: undefined, r: ...}
//   // Lexical_Environment.[[Scope]] = window;
//   // length  = 2 * Pi * r;
//   // a = 1;
//   var PI = 3.14;
//   var length = 2 * PI * r;
//   console.log(length * a);
//
//   function showMessage() {
//     // showMessage - is function which is nested inside of calculateLength function. It has it`s own Lexical_Environment.
//     //Lexical_Environment = {};
//     console.log('Hello ' + a);
//   }
//   showMessage();
// }
//
// calculateLength(5);
//
// ////////////////////////////////////////////////////////////////////////
//
// function createCounter() {
//   // Lexical_Environment
//   var count = 1;
//
//   return function () {
//     return count++;
//   };
// }
//
// var newCounter = createCounter();
// var newCounter2 = createCounter();
// console.log(newCounter);
//
// newCounter();
// newCounter();
// newCounter();
// var result = newCounter();
// console.log('result:', result);
//
// newCounter2();
// newCounter2();
// var result2 = newCounter2();
// console.log('result2:', result2);
//
// ////////////////////////////////////////////////////////////////////////
//
// var abc = 7;
// console.log('Global variable abc:', abc);
//
// // anonymus function expression, which is being invoked immediately
// (function (num) {
//   var abc = 6;
//   console.log(num);
//   console.log('Local variable abc:', abc);
// })(666);
//
// var shop = (function () {
//
//   var appleAmmount = 100;
//
//   function privateMethod() {
//     console.log('private');
//   }
//
//   function getTotalApplesAmmount() {
//     return appleAmmount;
//   }
//
//   function sellApples(ammount) {
//     appleAmmount = appleAmmount - ammount;
//   }
//
//   function buyApples(ammount) {
//     appleAmmount = appleAmmount + ammount;
//   }
//
//   function setApples(n) {
//     appleAmmount = n;
//   }
//
//   function getApples() {
//     return appleAmmount;
//   }
//
//   return {
//     getApples: getApples,
//     setApples: setApples,
//     sellApples: sellApples,
//     buyApples: buyApples,
//     getTotalApplesAmmount: getTotalApplesAmmount
//   };
//
// })();
//
// shop.sellApples(24);
//
// var apples = shop.getTotalApplesAmmount();
//
// console.log('Apples ammount:', apples);
