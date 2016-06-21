// FUNCTIONS

var str = 'string';
str[0] = 'S';
console.log(str);


// function sayHi() {
//   alert('hello world!');
// }
//
// console.log(sayHi);

// var abc = 'global abc';
// var a = 'global a';
// console.log('String, specified in Global field:', abc);
//
// function calculate(a, b) {
//   var str = 'test';
//   var abc = 'local abc';
//   console.log('String, specified in Local field:', abc);
//   console.log('a =', a);
//   console.log('Calcalation "+"=', a + b);
//   console.log('Calcalation "-"=', a - b);
//   console.log('Calcalation "*" and custom test string added=', a * b + str);
//   console.log('Calculation global/local var a testing:', a);
// }
//
// function sum(a, b) {
//   var  test = 2;
//   console.log('Sum result: ', a + b + test);
// }
//
// calculate(2, 5);
//
// sum(1, 1);

// console.log('________________________');
//
// function calculate(a, b, c) {
//   var test = 'test';
//   // console.log('c = ', c);
//   // console.log('arguments (all arguments which pushed to fucntion wtih "CALCULATE"):', arguments);
//   // console.log('Calling for specific argument (exact as in case with massive):', arguments[1]);
//   // console.log('arguments length:', arguments.length);
//   // console.log('Calculate result =', a + b + test);
//   var result = a + b + c;
//   return  result; //this necessary method
//
// }
//
// var calculationresult = calculate(2, 5, 3);
// console.log('calculationresult', calculationresult);



// STANDART METHODS OF MASSIVES, STRINGS, NUMBERS


// var str = 'TEST';
//
// console.log(str);
// console.log(str.length);
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
//
// str = str.replace('e', 'A');
// console.log(str);
//
// str = str.toLowerCase();
// console.log(str);
//
// str = str.toUpperCase();
// console.log(str);
//
// console.log(str.substring(1, 3));
// console.log(str.substring(1));
// console.log(str.substring(2));
// console.log(str.substring(0));
//
// console.log('_________');
//
// var myStr = '12';
// var num = +myStr;
//
// console.log(myStr);
// console.log(num);
// console.log(typeof myStr);
// console.log(typeof num);
//
// var strLetter = '12px';
// var numNaN = +strLetter;
//
// console.log(numNaN);
//
// var flag = isNaN(numNaN);
//
// console.log(flag);
//
// if (flag) {
//   console.log('not a number');
// } else {
//   console.log('is a number');
// }
//
// console.log('parseInt - selects numbers only, until first non-number (letter) approached');
//
// var strLetter = '12px';
// var numNaN = parseInt(strLetter);
//
// console.log('num =', numNaN);
//
// var newStr = numNaN.toString();
//
// console.log('newStr', newStr);
// console.log(typeof newStr);
//
// console.log('Shorter version of toString (shifting number type to string type)');
//
// var newStrShorter = numNaN + ' ';
//
// console.log(newStrShorter);
// console.log(typeof newStrShorter);
//
// console.log('Math - JS global module of mathematics methods. Number rounding (2.45 ---> 2.0) - is the most popular one');
//
// var newNumber = 12.1;
//
// var roundResult = Math.floor(newNumber);
//
// console.log('"floor" method throws out fraction part of number so 12.3 becomes:', roundResult);
//
// var roundResultHigher = Math.ceil(newNumber);
//
// console.log('"ceil" method rounds nuber to higher value, so 12.3 becomes:', roundResultHigher);
//
// var roundResultHounest = Math.round(newNumber);
//
// console.log('"round" method rounds number to the value which fits the situation the most (12.1 becomes 12, 12.9 becomes 13), in our case 12.3 becomes:', roundResultHounest);
//
// console.log('___________');
// console.log('Massives methods');
//
// var strToMassive = '1,2, test, 4';
//
// console.log('strToMassive :', strToMassive);
//
// var arr = strToMassive.split(',');
//
// console.log('"split" method splits array by commas, so string becomes array:', arr);
//
//
// var arrMassive = [1, 2, 3, 4, 'test'];
//
// console.log('arrMassive', arrMassive);
//
// var massiveStr = arr.join();
//
// console.log('"join" method merges array to string, so array becomes string:', massiveStr);
//
// var strWithRule = arrMassive.join(' : ');
//
// console.log('Sometimes i can add special rules of merging strings/Massives. For example "arrMassive.join(`` : ``)" will merge merge massive to string with : sing. Lookgs like this: ', strWithRule);
//
// var arrWithRule = strWithRule.split('');
//
// console.log('Same but viseversa, turning string to massive with additional epmty space condtition: ', arrWithRule);
//
// console.log('__________');
// console.log('Sotring methods: ');
//
// var arrTest = [1, 3, 5, 2, 1.1];
//
// console.log('arrTest - unsorted array: ', arrTest);
//
// var arrSorted = arrTest.sort();
//
// console.log('"sort" method sorts array: ', arrSorted);
//
//
// arrTest.push('test string');
//
// console.log('"push" adds string in the end of array: ', arrTest);
//
// arrTest.pop();
//
// console.log('"pop" if empty - deletes the last element of the array: ', arrTest);



// OBJECTS


// var arr = ['1', true, 'false'];
//
// var obj = {
//   0: '1',
//   1: true,
//   2: 'false'
// }
//
// var student = {
//   'age': 18,
//   name: 'Vasya',
//   'my second name': 'Pupkin',
//   mySecondName: 'Mason'
// }
//
// var key = 'my second name';
//
// console.log('Age of a student:', student.age);
// console.log('Name of a student:', student.name);
// console.log('Surename of a studnet:', student[key]);
// // console.log('Second name of a studnet:', student.mySecondName);
//
// if (key in student) {
//   console.log('Light of the day');
// } else {
//   console.log('Light of the night');
// }
//
// for (var key in student) {
//   console.log('ID', key);
//   console.log('Value', student[key]);
//   console.log('_____________');
// }
//
// var keysList = Object.keys(student);
// console.log('keysList:', keysList);


// CYCLES


// var i = 0;
// var arr = ['test', 1, 2, 'hell'];
//
// console.log('array', arr);
//
// for (var i=0; i < arr.length; i++) {
//     console.log('arr[i] = ', arr[i]);
//     console.log('Iterator: ', i);
//     alert('Iteration...= '+ i)
// }
//
// while (i < 4) {
//   alert(i);
//   console.log('Iterator = ', i);
//   i++;
// }
//
// do {
//   alert('execution...' + i);
//   console.log('Iterator = ', i);
//   i++;
// } while (i < 4);
//
// for (var i = 0; i < 4; i++) {
//   console.log('Iterator =', i);
//   alert('couting...' + i);
// }
//
// console.log('out of cycle');
//
//
//
// MASSIVES
//
//
// var arr = [1, true, '3 text', 4];
//
// console.log ('arr regular', arr);
// console.log ('arr-identification_single', arr[1]);
//
// console.log ('arr.length', arr.length);
//
// arr.push ('5');
// console.log ('arr-push', arr);
//
// arr.push (5);
// console.log ('arr-push', arr);
//
// arr.push (false);
// console.log ('arr-push', arr);
//
// arr.pop ();
// console.log ('arr.pop()', arr);
//
// console.log ('arr.length', arr.length);
//
//
// arr.unshift ('5');
// console.log ('unshift', arr);
//
// console.log ('length', arr.length);
//
//
// var removedItem = arr.shift('shifted');
// console.log ('removedItem', removedItem);
// console.log ('shifted', arr);
// console.log ('length', arr.length);
//
// arr[10] = '10 element';
// console.log ('10_element_shown', arr);
//
//
//
// CONDITIONAL OPERANDS
//
//
// var user;
//
// user = prompt('Enter magic word')
//
// if (user == 'Dima') {
//     alert('hello, Dima');
// } else {
//     alert('go to hell, or heaven, creature of magic');
// }
//
// user == 'Dima' ? alert('hello, admin') : alert('good bye');
//
//
//
// OPERANDS
//
//
// var a = 4;
// var b = 9;
//
// var result;
// result = +a + b;
//
// alert(result);
// result++; //increment
// result++;
// result--; //decrement
// alert(result);
// //
// result += 5;
// alert (result);
// result -= 8;
// alert (result);
// result *= 5;
// alert (result);
// result /= 5;
// alert (result);
//
// alert(a >= b);
// alert(a == b);
// alert(a === b);
// alert(a <= b);
//
//
//
// TYPES OF DATA
//
//
// Number
//
// var myNumber = 5;
// var mySecondNumber = 5.666;
//
// // String
//
// var str = 'some text';
//
// // Boolean
//
// var flag = true;
// var flag2 = false;
//
// // null
//
// var nullVar = null;
//
// // undefined
//
// var notDefinedVar = undefined;
// var someVariable;
//
// var type;
//
// type = typeof (myNumber);
//
// alert (type)
//
// var myNewVariable = 'new variable';
// var my_new_variable = 'new variable';
//
// var $variable = 5;
//
// var MY_CONST = 100;
