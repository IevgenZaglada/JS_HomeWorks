
var obj = {a: 1};

var increment = function(obj ) { obj = {a: 2} ;}  ;

increment(obj);

console.log(obj.a);
