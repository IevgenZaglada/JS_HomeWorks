function pow(x, n) {


	// var x = prompt('Введите число x, не больше 999');

		while (x === '') {
			alert('Вы не ввели значение, повторите попытку');
			x = prompt('Введите число x, не больше 999');
			while (isNaN(x)) {
			alert('Нужно ввести число');
			x = prompt('Введите число x, не больше 999');
		}
		}

		while (isNaN(x)) {
			alert('Нужно ввести число');
			x = prompt('Введите число x, не больше 999');
			while (x === '') {
			alert('Вы не ввели значение, повторите попытку');
			x = prompt('Введите число x, не больше 999');
		}
		}

		if (x > 999) {
			alert('Слишком большое число');
			return;
		}

		if (x === null) {
			alert('error');
			return;
		}


	// var n = prompt('Введите степень n, не больше 9');

		while (n === '') {
			alert('Вы не ввели значение, повторите попытку');
			n = prompt('Введите степень n, не больше 9');
			while (isNaN(n)) {
			alert('Нужно ввести число');
			n = prompt('Введите степень n, не больше 9');
		}
		}

		while (isNaN(n)) {
			alert('Нужно ввести число');
			n = prompt('Введите степень n, не больше 9');
			while (n === '') {
			alert('Вы не ввели значение, повторите попытку');
			n = prompt('Введите степень n, не больше 9');
		}
		}

		if (n > 9) {
			alert('Слишком большая степень');
			return;
		}

		if (n === null) {
			alert('error');
			return;
		}


	var result;


	if ( +n === 0 ) {
		result = 1;
	}

	if ( +n > 0 ) {
		result = +x;
	for (var i = 1; i < +n; i++) {
		result *= +x;
	}
}

	if ( +n < 0 ) {
		result = (1/+x);
	for (var j = -1; j > +n; j--) {
		result *= (1/+x); 
	}
}
	// var answerContainer = document.getElementById("answer");
	// answerContainer.innerHTML = '';
	// answerContainer.innerHTML = result;

	// console.log('result', result);
	return result;

}



try {
  module.exports = pow;
} 
catch (e) {
};
