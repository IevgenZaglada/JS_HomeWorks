// EVENTS


// var link = document.querySelector('a');
// var listItem = document.querySelector('li');
//
// // function handlerLink(event) {
// //   console.log('handlerLink event target', event.target);
// //   event.preventDefault();
// // }
// //
// // function handlerListItem(event) {
// //   console.log('handlerlistItem event target', event.target);
// //   event.preventDefault();
// // }
// //
// // link.addEventListener('click', handlerLink);
// // listItem.addEventListener('click', handlerListItem);
// //
// //
// //
// // // handler or callback
// // link.onclick = function () {
// //   console.log('Basic example of click event: "onclick" method, adressed to variable "link" ');
// // }
// //
// // // the most correct example of  handler
// // function handlerClick() {
// //   console.log('it works on click');
// // }
// //
// // function handlerMO() {
// //   console.log('it works on mouseover');
// // }
// //
// // function handlerCrossbrowser() {
// //   console.log('it works on click crossbrowser');
// // }
// //
// // function handlerWindow(event) {
// //   console.log('it works on click in entire window');
// //   console.log('event:', event);
// //   console.log('event:', event.keyCode);
// //   if (event.keyCode === 13){
// //     alert('ENTER');
// //   }
// // }
// //
// //   function handlerlink(event) {
// //     console.log('event X Y', event.clientX, event.clientY);
// //     console.log('event target', event.target);
// //     event.preventDefault();
// //   }
// //
// // // // Old method of event stopping by returning 'false' boolean value
// // // link.onclick = function (event) {
// // //   console.log('link.onclick handler');
// // //   return false;
// // // }
// //
// // link.addEventListener('mouseover', handlerMO);
// // link.addEventListener('click', handlerClick);
// // // link.removeEventListener('mouseover', handlerMO);
//
// // (if lte IE 8)
// // link.attachEvent('onlick', handler);
// // link.detachlink('onlick', handler);
//
// // function addEvent(link, event, callback) {
// //   if (window.attachedEvent) { // IE 8--
// //     link.attachEvent('on' + event, callback);
// //     console.log("IE!!!!!");
// //   } else {
// //     link.addEventListener(event, callback);
// //     console.log("not IE!!!!!");
// //   }
// // }
// //
// // addEvent(link, 'click', handlerCrossbrowser);



// setTimeout, setInterval

// var counter = 0;
//
// var someFunction = function () {
//   console.log('It works dealyed!');
//   clearTimeout();
// }
//
// var timeout = setTimeout(someFunction, 500);
//
// var someFunctionTwo = function () {
//   console.log('It works dealyed with some interval! Conunter =' + ' ' + counter);
//   counter ++;
//   if (counter === 60) {
//     clearInterval(interval);
//   }
// }
//
// var interval = setInterval(someFunctionTwo, 200);



// Constructors, operator "NEW"


var a = {};
var b = [666, 'twelwe'];

var c = new Object(); // Object in this example serves as calss
console.log('New Object:', c);

var d = new Array(1, 2, 3, 'string');
console.log('New Array:', d);

function Animal(newName, newColor) {
  var self = this;
  var abc = 'internal variable " abc " '; //local, internal variable represented in local scope
  console.log('Internal varibale inside of a function:', abc);

  console.log('I`m constructiong an animal!');

  newName = newName.toUpperCase(); // makes string UPPERCASE
  self.name = newName;
  self.color = newColor;
  self.noise = function() {
    console.log('this is public method');
    self._noise();
  }
  self._noise = function() { // this means that ._noise is private mothod
    alert('Hello, I am ' + self.name);
  }
}


var dog = new Animal('Jack', 'white');
console.log('Function becomes object:', dog);
dog.noise();
var dog = new Animal('Mark', 'brown');
console.log('Function becomes object:', dog);
dog.noise(); // .noise - public method

console.log(dog.name); // .name - public property

console.log('Internal varibale inside of a function:', abc);
