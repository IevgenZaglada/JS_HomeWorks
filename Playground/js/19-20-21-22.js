// var a = {
//   b: 11,
//   foo: function () {
//     return this.b - 1;
//   },
// };
//
// var test = a.foo;
//
// test();  ?
//
// console.log(test());
//
// /////////////
//
// var y = 23;
// var x = function () {
//   return y;
// };
//
// var z = function (z) {
//   var y = 10;
//   return z;
// };
//
// console.log(z(x));
//
// /////////////
//
// var y = 5;
//
// var x = function () {
//   return y;
// };
//
// var z = function (t) {
//   var y = 10;
//   return t();
// };
//
// y = 15;
//
// console.log(z(x));
//
// ///////////// proto
//
// var animal = {
//   eats: true
// };
//
// var rabbit = {
//   jumps: true,
//   eats: false
// };
//
// rabbit.__proto__ = animal;
//
// console.log(rabbit.eats);
//
// var base = {
//   x: 100,
//   y: 100,
//   name: "base name",
//   honor: 0,
//   damage: 0,
//   health: 100
// };
//
// var unit1 = {
//   name: "unit1"
// };
//
// unit1.__proto__ = base;
//
// console.log(unit1.health);
//
// var own;
// console.log(unit1);
// for (var key in unit1) {
//   console.log(key + " = " + unit1[key]);
// }
//
// for (var key in unit1) {
//   own = unit1.hasOwnProperty(key);
//   console.log(key + " = " + unit1[key] + " own = " + own);
// }

var animal = {
  jumps: null
};

var rabbit = {
  jumps: true
};

rabbit.__protob__ = animal;
console.log(rabbit.jumps);
delete rabbit.jumps;
console.log(rabbit.jumps);
delete animal.jumps;
console.log(rabbit.jumps);
