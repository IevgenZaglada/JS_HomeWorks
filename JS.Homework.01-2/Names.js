// NAMES

var arr = [];
var name;
var trueName;
var index;
var trueName = new Boolean(false);

console.log('arr initial state:', arr);

for (var i = 0; i < 5; i++) {
  name = prompt('Name, please.');
  arr.push(name);
}

console.log('arr filled:', arr);

trueName = prompt('Please enter true name.');

console.log('True name: ', trueName);

for (index = 0; index < arr.length; ++index) {
  trueName === arr[index]
}

if (trueName = true) {
  alert('You have been logged in successfully');
  console.log('You have been logged in successfully');
} else {
  alert('Error');
  console.log('Error');
}
