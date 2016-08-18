// console.log(userData);
//
//
// // 1
//
// // Sorting out `skills` key
//
// var sortSkills = _.map(userData, 'skills');
//
// // Setting up one-level array
//
// var keyFlat = _.flattenDeep(sortSkills);
//
//
// // Alphabetical sorting
//
// var flatSorted = _.sortBy(keyFlat);
//
// // Sorting out duplciates
//
// /**/var sortedOutDuplcates = _.uniq(flatSorted);
//
// console.log(sortedOutDuplcates);
//
//
// //2
//
// // 3
//
// // Sotring out 'friends' key
//
// var sortFriends = _.map(userData, 'friends');
// console.log(sortFriends);
//
// var friendsFlat = _.flattenDeep(sortFriends);
//
// console.log(friendsFlat);

// 1
for (var i = 0; i < 5; i++) {
  console.log('testing for');
}

_.times(5, function () {
  console.log('testing dash');
});

// 2

var ownerArr = [{
    "owner": "Colin",
    "pets": [{"name":"dog1"}, {"name": "dog2"}]
}, {
    "owner": "John",
    "pets": [{"name":"dog3"}, {"name": "dog4"}]
}];

console.log(_.map(ownerArr, 'pets[0].name'));

// 3

console.log(_.times(7, _.uniqueId.bind(null, 'testCell_')));

console.log(_.times(7, _.partial(_.uniqueId, 'testCell_')));

// 4

var objA = {
    "name": "colin"
};

var objB = _.cloneDeep(objA);
console.log(objB === objA); //false

// 5

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumber(15,20));

console.log('Lodash random: ', _.random(15, 20));
//or simply
console.log('Lodash random simplified:', _.random(20));
//or even
console.log('Lodash random float: ', _.random(5, 20, true));

// 6 extending object
//  Adding extend function to Object.prototype <-------------- ???????????????????
// Object.prototype.extend = function(obj) {
//     for (var i in obj) {
//         if (obj.hasOwnProperty(i)) {
//             this[i] = obj[i];
//         }
//     }
// };
//
// var objA = {"name": "colin", "car": "suzuki"};
// var objB = {"name": "james", "age": 17};
//
// objA.extend(objB);
// objA; // {"name": "james", "age": 17, "car": "suzuki"};
//
// // Lodash
// _.assign(objA, objB);

// Also exctending multiple objects
// var objA = {"name": "colin", "car": "suzuki"};
// var objB = {"name": "james", "age": 17};
// var objC = {"pet": "dog"};
//
// // Lodash
// _.assign(objA, objB, objC)
// // {"name": "james", "car": "suzuki", "age": 17, "pet": "dog"}


// 7 Removingproperties from object
// // Naive method: Remove an array of keys from object
// Object.prototype.remove = function(arr) {
//     var that = this;
//     arr.forEach(function(key){
//         delete(that[key]);
//     });
// };
//
// var objA = {"name": "colin", "car": "suzuki", "age": 17};
//
// objA.remove(['car', 'age']);
// objA; // {"name": "colin"}
//
// // Lodash
// objA = _.omit(objA, ['car', 'age']); // {"name": "colin"}
// // or single parameter, not array, or even comparator
// objA = _.omit(objA, 'car'); // {"name": "colin", "age": 17};
// objA = _.omit(objA, _.isNumber); // {"name": "colin"};

// 8 Select properties from another object to form new object (_.pick is oposite for _.omit)

// // Naive method: Returning a new object with selected properties
// Object.prototype.pick = function(arr) {
//     var _this = this;
//     var obj = {};
//     arr.forEach(function(key){
//         obj[key] = _this[key];
//     });
//
//     return obj;
// };
//
// var objA = {"name": "colin", "car": "suzuki", "age": 17};
//
// var objB = objA.pick(['car', 'age']);
// // {"car": "suzuki", "age": 17}
//
// // Lodash
// var objB = _.pick(objA, ['car', 'age']);
// // {"car": "suzuki", "age": 17}

// 9 Selecting a random item from a list

var luckyDraw = ["Colin", "John", "James", "Lily", "Mary"];

function pickRandomPerson(luckyDraw) {
  var index = Math.floor(Math.random() * (luckyDraw.length));
  return luckyDraw[index];
}

pickRandomPerson(luckyDraw);

_.sample(luckyDraw);
// or
_.sample(luckyDraw, 2);

// 10 Error handling for JSON.parse

// Using try-catch to handle the JSON.parse error

function parse(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return false;
  }
}

function parseLodash(str) {
  return _.attempt(JSON.parse.bind(null, str));
}

parse('a'); //false
parseLodash('a'); // Return an error object

parse('{"name": "colin"}'); // Return {"name": "colin"}
parseLodash('{"name": "colin"}'); // Return {"name": "colin"}
