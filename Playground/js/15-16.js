// // AJAX
//
// function GoogleCallback(jqueryObj, data) {
//   console.log('arguments', arguments);
// }
//
// $(function () {
//
//   $.ajax({
//     url: "http://ajax.googleapis.com/ajax/services/search/web?v=1.0?key=your-key&q=PHP&callback=GoogleCallback&context=?",
//     dataType: 'jsonp',
//     data: {
//       abc: 123
//     },
//     method: 'GET',
//     success: function () {
//
//     },
//     error: function () {
//
//     }
//   });
// });



// OOP

// prototypes with __proto__
var animal = {
  name: 'Jack',
  age: 2
};

var cat = {
  age: 3
};

cat.__proto__ = animal;
console.log('cat.name', cat.name);

function World() {
  this.sky = 'blue';
}

var newWorld = new World();

function Company() {
  this.name = 'Google';
  this.people = 10000;
  this.sayHello = function () {
    console.log('Hello, world.');
  };
}

Company.prototype = new World();

var newCompany = new Company();
console.log('newCompany.sky',newCompany.sky);
console.log(newCompany);

newCompany.sayHello();

function Vehicle() {
  this.wheels = '4';
}

function Ford() {
  this.name = 'Shelby';
  this.power = 10000;
}

Ford.prototype.honk = function () {
  console.log('beep');
};

var newFord = new Ford();

newFord.honk();
