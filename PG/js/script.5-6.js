// // EVENTS
//
//
// // handler, callback
//
// // easy way
// var elem = document.querySelector('a');
// elem.onclick = function () {
//   alert('test');
// };
//
// // the most correct way
// var element =  document.getElementsByTagName('a');
//
// function handlerClick() {
//   console.log('Event triggered on click, even crossbrowserly');
// }
// function handlerMouseOver() {
//   console.log('Event triggered on mouseover, even crossbrowserly');
// }
//
// element[1].addEventListener('click', handlerClick);
// element[3].addEventListener('mouseover', handlerMouseOver);
//
// var remove = prompt('Removem y/n?', '');
//
// if (remove === 'y') {
//   element[1].removeEventListener('click', handlerClick);
//   element[3].removeEventListener('mouseover', handlerMouseOver);
// }
//
// // crossbrowser event handler method
// function addEvent (el, event, callback) {
//   if (window.attachEvent) { // IE8-
//     el.attachEvent('on' + event, callback); //  IE8 remove listener: el.detachEvent('onclick', hanlderClick);
//   } else {
//     el.addEventListener(event, callback);
//   }
// }
// addEvent(element[4], 'click', handlerClick);
//
// window.addEventListener('click', handlerClick); // event can be addet to entire Window scope
// window.addEventListener('keydown', handlerClick); // same but for key press
//
// //////////////////////////////////////////////
// // function handlerClick(event) {
// //   console.log('Window scope events list:', event);
// // } // lsit of events
// //////////////////////////////////////////////
//
//
// // function handlerClick(event) {
// //   console.log('Window scope events list:', event.keyCode);
// //   if (event.keyCode === 13) {
// //     console.log('Enter is pressed');
// //   }
// // }
//
//
// //////////////////////////////////////////////
// // function handlerClick(event) {
// //   console.log('Window scope events list:', event); // shows mouse events
// //   console.log('event X Y', event.clientX, event.clientY); // shows coordinates ( clientX, clientY)
// // }
// // element[4].addEventListener('click', handlerClick);
// //////////////////////////////////////////////
//
// //////////////////////////////////////////////
// // function handlerClick(event) {
// //   console.log('DOM target:', event.target); // shows DOM TARGET
// // }
// // element[4].addEventListener('click', handlerClick);
// //////////////////////////////////////////////
//
// //////////////////////////////////////////////
// // function handlerClick(event) {
// //   console.log('DOM target:', event.target); // shows DOM TARGET
// //   event.preventDefault(); //prevents specific action such as redirection to referenced link web adress or sending data from some form
// // }
// // element[4].addEventListener('click', handlerClick);
// //////////////////////////////////////////////
//
// ////////////////////////////////////////////// Antother way to do this
// // element[4].onclick = function (event) {
// //   console.log('lnik.onclick handler');
// //   event.preventDefault(); // or: return false - used on old projects
// // };
// //////////////////////////////////////////////
//
// //////////////////////////////////////////////
// // lnik.addEventListener('click', handlerLink, true); // unnecessary third parameter for handling 'bubbling' effect 30:30
// //////////////////////////////////////////////



// seTimeout, setInterval

// var counter = 0;
//
// var functionTimeout = function () {
//   console.log('Timeout works in 5 seconds.');
//   // clearTimeout(timerTimeout);
// };
//
// var functionInterval = function () {
//   counter++;
//   console.log('Interval works every 2 seconds! ' + 'Counter:', counter);
//     if (counter === 10) {
//       clearInterval(timerInterval);
//     }
// };
//
// var timerTimeout = setTimeout(functionTimeout, 5000);
// var timerInterval = setInterval(functionInterval, 2000);
//
// // clearTimeout(timerTimeout);
// // clearInterval(timerInterval);



// CONSTRUCTORS, operator "new"


// var a ={};
// var b = [];
//
// var c = new Object();
// var d = new Array(1, 2, 3, 'test');
//
// console.log(c);
// console.log(d);
//
// function Animal(newName, newColor, newAge) {
//   var self = this;
//   var abc = 'internal variable'; //tihs is local variable
//
//   console.log('I am constructing an animal');
//
//   newName = newName.toUpperCase();
//   self.name = newName;
//   self.color = newColor;
//   self.age = newAge;
//
//   self.noise = function() {
//     self._noise();
//   };
//   self._noise = function () {
//     alert('Hello, I am ' + self.name + '. This is private method, invoked by public method method. Such kind of method are writte starting with underline. For example: _privateMethod');
//   }
// }
//
// var dog = new Animal('Daneil', 'Color of the night', 3);
//
// console.log(dog);
// console.log(dog.name); // tihs is public property
//
// dog.noise(); //this is public method
