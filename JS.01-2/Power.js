// POW Function

function power(numberInitial) {
  var multipliedNumber;
  var multiplier;
  multipliedNumber = prompt('Which number you want to be build in math degree?');
  multiplier = prompt('Which вупкуу value of power you wish?');
  var output = 1;
  for (var i = 0; i < multiplier; i++) {
    output = output * multipliedNumber;
  }
  return output;
}

var result = power();
console.log('Power:', result);
