function pow(x, n) {

	

	var x = prompt('Введите число x');

		if (x === null) {
			alert('error');
			return;
		} 

		while (x === '') {
			alert('Вы не ввели значение, повторите попытку');
			x = prompt('Введите число x');
		}

	var n = prompt('Введите степень n');

		if (n === null) {
			alert('error');
			return;
		}

		while (n === '') {
			alert('Вы не ввели значение, повторите попытку');
			n = prompt('Введите степень n');
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
	var answerContainer = document.getElementById("answer");
	answerContainer.innerHTML = '';
	answerContainer.innerHTML = result;

	console.log('result', result);
	return result;

}

