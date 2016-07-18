function searchName() {
	var names = [];

	for (i = 0; i < 5; i++) {
		names[i] = prompt('Введите Ваше имя');

		if (names[i] === null) {
			alert('Прощайте');
			return;
		}

		while (names[i] === '') {
			alert('Вы не ввели имя');
			names[i] = prompt('Введите Ваше имя');
		}
	}
	var answerContainer = document.getElementById("answer");
	answerContainer.innerHTML = '';
	answerContainer.innerHTML = names;
	
	console.log('names', names);

	var userName = prompt('Введите имя пользователя');

	for (i = 0; i < 5; i++) {
		if (userName === null) {
			alert('Прощайте');
			return;
		}
		while (userName === '') {
			alert('Вы не ввели имя пользователя');
			userName = prompt('Введите имя пользователя');
		}
		if (userName === names[i]) {
			alert(userName + ', вы успешно вошлы');
			return;
		}
	}
		if (userName != names[i]) {
			alert('ошибка данных');
		}


}


