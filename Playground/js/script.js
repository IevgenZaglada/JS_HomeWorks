var date = new Date();

function difference(now, diff) {

 var output = date - diff;
 return output;
}

var result = difference(date, 2);

console.log(date);
console.log(result);
