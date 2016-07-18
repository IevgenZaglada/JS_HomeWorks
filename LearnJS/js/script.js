var test = document.getElementsByTagName('div');

console.log(test[0]);

test[3].innerHTML += 'modified';


var aaa = document.createElement('h1');
aaa.innerHTML = 'test1';
var bbb = document.createElement('h1');
bbb.innerHTML = 'test2';
var ccc = document.createElement('h1');
ccc.innerHTML = 'test3';
var ddd = document.createElement('h1');
ddd.innerHTML = 'test4';

console.log(aaa);

test[0].appendChild(aaa);
