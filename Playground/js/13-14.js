// // JSON
//
// var animal = {
//   name: 'Jack',
//   color: 'white',
//   age: 12
// };
//
// var str = JSON.stringify(animal);
//
// console.log(str);
//
// var obj = JSON.parse('{"name": "dima", "age": "24"}');
// 
// console.log(obj.age);
//
//
//
// // LocalStorage
//
//
// var dog = {
//   name: 'Jack',
//   color: 'white',
//   age: 2
// };
//
// localStorage.setItem('animal', JSON.stringify(dog));
//
// var test = localStorage.getItem('animal');
//
// test = JSON.parse(test);
//
// console.log(test);
//
//
//
// use strict
//
//
// var a = 5;
// console.log('a', a);
//
// (function () {
//   'use strict';
//   // b = 6;
//   console.log('b', b);
// })();
//
//
//
// // try/catch
//
// var str = '{"name: "John"}';
//
// try {
//   var obj = JSON.parse(str);
//   console.log('obj name:', obj.name);
// } catch (e) {
//   console.log('error is here!!!!!!', e);
// }
