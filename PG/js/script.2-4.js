// // TYPES CAST
//
// // Primitive ones:
// // number
// // string
// // boolean -> true, false
// // undefined
// // null
//
// // Ojcets:
// //objects
//
//
// // operatror + (can merge two kinds of data despite their difference of type. like number + string = string)
//
// var result = 5 + 5;
// console.log(result);
// console.log(typeof result);
//
// var result = 5 + '5';
// console.log(result);
// console.log(typeof result);
//
// var result = true + false;
// console.log(result);
// console.log(typeof result);
//
// var result = true + 1;
// console.log(result);
// console.log(typeof result);
//
// var result = 5 + {};
// console.log(result);
// console.log(typeof result);
//
// var a = 1;
// console.log('Number becomes string:', a.toString());
//
// // operators - / * (this operators merges data only to number. number + string = NaN)
//
// var result = 5 - 5;
// console.log(result);
// console.log(typeof result);
//
// var result = 5 - '5';
// console.log(result);
// console.log('Recognizable as number becase string 5 not contains any letters',typeof result);
//
// var result = 5 - '5s';
// console.log(result);
// console.log(typeof result);
//
// var result = 5 * false;
// console.log(result);
// console.log(typeof result);
//
// var result = 5 * true;
// console.log(result);
// console.log(typeof result);
//
// if (true) {
//   console.log('true');
// } else {
//   console.log('false');
// }
//
// if (false) {
//   console.log('true');
// } else {
//   console.log('false');
// }
//
// // Empty string considered as FALSE if ivoked as boolean.
// // String with any amount of symbols considered as TRYE if invoked as boolen.
//
// if ('') {
//   console.log('true');
// } else {
//   console.log('false');
// }
//
// if ('any amount of symbols') {
//   console.log('true');
// } else {
//   console.log('false');
// }
//
// var result = +' ';
// console.log(result);
//
// var result = + 'any amount of symbols';
// console.log(result);
//
// if (5) {
//   console.log('true');
// } else {
//   console.log('false');
// }
//
// if (0) {
//   console.log('true');
// } else {
//   console.log('false');
// }
//
// if (-1) {
//   console.log('true');
// } else {
//   console.log('false');
// }
//
// // when this function got invoked, a by default specified as undefined (false). Thats why var b becomes 5 after "||"  which means OR. If function is invoked with specifictation of variable a "calculate(7)" - then var b becomes 7, becase var a becoems defined (true).
// function calculate(a) {
//   console.log('a', a);
//   var b = a || 5;
//   console.log(b);
// }
//
// calculate();



// // COPYING BY REFERENCE
//
// var num = 123;
//
// var obj = {
//   test: 123
// }
//
// function updateNum(a) {
//   a = 5;
//   console.log('a', a);
// }
//
// function updateObj(a) {
//   a.test = 5;
// }
//
// updateNum(num);
// updateObj(obj);
//
// console.log('num', num);
// console.log('obj', obj);



// // CONTEXT OF EXECUTING "THIS"
//
//
// var dog = {
//   name: 'Jack',
//   age: 3,
//   bones: 50,
//   woof: function () {
//     alert('woof');
//     console.log('this -> ', this);
//   },
//   eat: function () {
//     dog.bones--;
//   },
//   balls: 3,
//   play: function () {
//     this.balls--; // this - makes reference to parental shell. In this case - dog. For clear "var a" written in general code flow this.a will be window.a
//   }
// }
//
// dog.eat();
// dog.eat();
// dog.eat();
// dog.play();
//
// dog.woof();
//
// console.log(dog);
//
// // this - executing context
//
// console.log(this);
//
// var a = 5;
//
// console.log(this.a); //window.a
