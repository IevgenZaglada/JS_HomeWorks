// Name program

var nameList = [];
var name;
var trueName;
var flag = false; // Тут я прописал все переменные которые буду юзать

console.log('arr initial state:', nameList);

for (var i = 0; i < 5; i++) {
  name = prompt('Name, please.');
  nameList.push(name);
} // Первый цикл - заполнение массива

console.log('arr filled:', nameList);

trueName = prompt('Please enter true name.'); // Введение проверочного имени

console.log('True name:', trueName);

for (var index = 0; index < nameList.length; ++index) {
  if (trueName === nameList[index]) {
    flag = true;
  }
} // Проверочный цикл через boolean.

if (flag) {
alert(trueName +', you have been logged in successfully');
console.log(trueName,', you have been logged in successfully');
} else {
alert('Error');
console.log('Error');
} // Результат
