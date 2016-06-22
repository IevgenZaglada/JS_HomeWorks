// POW Function

function power (numberInitial) {
var numberInitial;
var multiplier;
numberInitial = prompt ('Which number you want to be build in math degree?');
multiplier = prompt ('Which вупкуу value of power you wish?');
var result = 1;
for (var i = 0; i < multiplier; i++)
  result = result * numberInitial;
  return result;
}

var end = power();
console.log('Power:', end);
