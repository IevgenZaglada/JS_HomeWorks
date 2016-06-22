// var num;
// var pow;
//
//
// num = prompt ('Specify your number');
// pow = prompt ('Specify your multiplyer');
//
// pow = --pow;
//
//   function transform(num) {
//     var result = 1;
//     for (pow > 1; pow > 0; pow--) {
//     var result = result * num;
//     return result;
//   }
// }
//
// // var transformResult = transform(num);
//
// console.log();



var num;
var pow;

num = prompt ('Specify your number');
pow = prompt ('Specify your multiplyer');

function power(nym, pow){
    var result = 1;
    for(var i = 0; i < pow; i++)
    {
        result = result * base;
    }
    return(result);
}
  console.log("Output from power");


______________________
function power(base, exp){
    var result = 1;
    for(var i = 0; i <exp; i++)
    {
        result = result * base;
    }
    return(result);
}
console.log(power(2,10));
______________________
Давайте сначала алгоритм опишем. «2 в степени 10» значит, нужно 10 двоек перемножить. 2 * 2 * 2 ... * 2 — двойка десять раз, умножение 9 раз.

Чтобы не писать длинную колбасу умножений, сделаем в цикле, как просят.

Пусть будет переменная result, где хранится текущее значение умножения. И внутри цикла, который прокрутим 9 раз (сколько раз «умножение»), будем домножать на 2:

for( блаблабла) {
    result = result * 2;
}
Этот result после девяти раз будет содержать требуемый результат.

Осталось оформить цикл. Внутри идёт три выражения:

Начальные значения.
Условия, которые должны выполняться. Как только нарушатся — выйдем из цикла.
Действия на каждом повторе.
Сделаем с переменной счётчиком i. Повторим 9 раз, каждый раз уменьшаем на 1. Крутим, пока не дойдём до нуля:

for( i=9; i>0; i=i-1)
И, наконец, в самом начале надо объявить/дать начальные значения всем переменным:

var i, result, exp=10, num=2;
Дальше соберите, пожалуйста, самостоятельно. Здесь почти всё. В цикле стоит вместо фиксированного значения использовать переменную exp.
____________________________
function add(a, b) {
  return a+b; // instead of a+B can be any value : even 'test'
}

var sum = add(1, 2);
console.log(sum);
