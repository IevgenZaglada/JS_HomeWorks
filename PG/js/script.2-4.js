// TYPES CAST

// number
// string
// boolean -> true, false
// undefined
// null
// objects


// operatror + (can merge two kinds of data despite their difference of type. like number + string = string)

var result = 5 + 5;
console.log(result);
console.log(typeof result);

var result = 5 + '5';
console.log(result);
console.log(typeof result);

var result = true + false;
console.log(result);
console.log(typeof result);

var result = true + 1;
console.log(result);
console.log(typeof result);

var result = 5 + {};
console.log(result);
console.log(typeof result);

var a = 1;
console.log('Number becomes string:', a.toString());

// operators - / * (this operators merges data only to number. number + string = NaN)

var result = 5 - 5;
console.log(result);
console.log(typeof result);

var result = 5 - '5';
console.log(result);
console.log('Recognizable as number becase string 5 not contains any letters',typeof result);

var result = 5 - '5s';
console.log(result);
console.log(typeof result);

var result = 5 * false;
console.log(result);
console.log(typeof result);

var result = 5 * true;
console.log(result);
console.log(typeof result);

if (true) {
  console.log('true');
} else {
  console.log('false');
}

if (false) {
  console.log('true');
} else {
  console.log('false');
}

// Empty string considered as FALSE if ivoked as boolean.
// String with any amount of symbols considered as TRYE if invoked as boolen.

if ('') {
  console.log('true');
} else {
  console.log('false');
}

if ('any amount of symbols') {
  console.log('true');
} else {
  console.log('false');
}

var result = +' ';
console.log(result);

var result = + 'any amount of symbols';
console.log(result);

if (5) {
  console.log('true');
} else {
  console.log('false');
}

if (0) {
  console.log('true');
} else {
  console.log('false');
}

if (-1) {
  console.log('true');
} else {
  console.log('false');
}

function calculate(a) {
  console.log('a', a);
  var b = a || 5;
  console.log(b);
}

calculate();
