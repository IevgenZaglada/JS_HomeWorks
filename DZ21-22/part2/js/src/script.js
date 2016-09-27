$(function() {
	let html = $('#test').html();

	const data = {
	title: 'Тест по программированию',
	questions: ['В каком году появился язык JavaScript?', 'Кто разработал библиотеку jQuery?', 'В каком году впервые был использован термин AJAX?'],
	answers: [['1995', '1996', '2005'], ['Билл Гейтс', 'Брендан Эйх', 'Джон Резиг'], ['2005', '1996', '1995']],
	button: 'Проверить результат'
	};

	let str = JSON.stringify(data);
	let dataWrite = localStorage.setItem('information', str);
	let dataGet = localStorage.getItem('information');
	let data1 = JSON.parse(str);
	let content = tmpl(html, data1);

	$('body').append(content);

	let $modalBox;
	let $overlay;
	let $getAnswer = $('.checkAnswer');


	 let showModalBox = (e) => {
		e.preventDefault();
		const correctAnswers = [0, 5, 6];
		let correctAnswersCount = 0;
		let allAnswersRight = '<div class="modalBox"><h1>Результаты теста:</h1> <p>Поздравляем! Ваш результат ';
		let closeModal = '  из 3</p> <input type="submit" class="btn btn-warning btn-warning-modal" value="Закрыть"/></div>';
		let allAnswers = '<div class="modalBox"><h1>Результаты теста:</h1> <p>Ваш результат ';

		for ( let i = 0; i < correctAnswers.length; i++) {
		if ($getAnswer[correctAnswers[i]].checked) {
		correctAnswersCount++;
		};
	};

	if (correctAnswersCount === 3) {
		$modalBox = $(`${allAnswersRight}` + correctAnswersCount + `${closeModal}`);
	}
	else {
		$modalBox = $(`${allAnswers}` + correctAnswersCount + `${closeModal}`);
	}
	$overlay = $('<div class="overlay"></div>');

	$('body').append($overlay);
	$('body').append($modalBox);

	$('.btn-warning-modal').one('click', hideModalBox);
	}

	$('.btn').on('click', showModalBox);

	let hideModalBox = () => {
		for (let i = 0; i < $getAnswer.length; i++) {
			$getAnswer[i].checked = false;
		}
		$modalBox.remove();
		$overlay.remove();
	};

	});
