// Name program

var arr = [];
var name;
var trueName;
var index;
var trueName;
var flag = false; // Тут я прописал все переменные которые буду юзать

console.log('arr initial state:', arr);

for (var i = 0; i < 5; i++) {
  name = prompt('Name, please.');
  arr.push(name);
} // Первый цикл - заполнение массива

console.log('arr filled:', arr);

trueName = prompt('Please enter true name.'); // Введение проверочного имени

console.log('True name:', trueName);

for (index = 0; index < arr.length; ++index) {
  if (trueName === arr[index]) {
    flag = true;
  }
} // Проверочный цикл через boolean.

if (flag === true) {
alert(trueName +', you have been logged in successfully');
console.log(trueName,', you have been logged in successfully');
} else {
alert('Error');
console.log('Error');
} // Результат
