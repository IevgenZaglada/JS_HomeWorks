var arr = [];
var i = 0;


for (i; i < 10;  i++) {
  arr[i] = document.createElement('div');
  arr[i].innerHTML = 'Of the Wand and the Moon for the ' + i + ' time';
  arr[i].className = 'test__class__' + i;

  document.body.appendChild(arr[i]);
}
