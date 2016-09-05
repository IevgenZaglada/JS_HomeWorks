$(function() {
'use strict';

var html = $('#test').html();


var data = {
	title: 'Тест по программированию',
	questions: ['В каком году появился язык JavaScript?', 'Кто разработал библиотеку jQuery?', 'В каком году впервые был использован термин AJAX?'],
	answers: [['1995', '1996', '2005'], ['Билл Гейтс', 'Брендан Эйх', 'Джон Резиг'], ['2005', '1996', '1995']],
	button: 'Проверить результат'
};


var str = JSON.stringify(data);

localStorage.setItem('information', str);

str = localStorage.getItem('information');

var data1 = JSON.parse(str);
console.log(data1);

var content = tmpl(html, data1);
$('body').append(content);


$('.btn').on('click', function showModalBox(e) {
	e.preventDefault();
	var $modalBox;
	var $overlay;

	var correctAnswers = [0, 5, 6];
	var correctAnswersCount = 0;
	var $getAnswer = $('.checkAnswer');

	for ( var i = 0; i < correctAnswers.length; i++) {
		if ($getAnswer[correctAnswers[i]].checked) {
		correctAnswersCount++;
		};
	};
	// console.log('correctAnswersCount = ', correctAnswersCount);

	if (correctAnswersCount === 0) {
		$modalBox = $('<div class="modalBox"><h1>Результаты теста:</h1> <p>Ваш результат ' + correctAnswersCount +'  из 3</p> <input type="submit" class="btn btn-warning btn-warning-modal" value="Закрыть"/></div>');
	} if (correctAnswersCount === 1) {
		$modalBox = $('<div class="modalBox"><h1>Результаты теста:</h1> <p>Ваш результат ' + correctAnswersCount +'  из 3</p> <input type="submit" class="btn btn-warning btn-warning-modal" value="Закрыть"/></div>');
	} if (correctAnswersCount === 2) {
		$modalBox = $('<div class="modalBox"><h1>Результаты теста:</h1> <p>Ваш результат ' + correctAnswersCount +'  из 3</p> <input type="submit" class="btn btn-warning btn-warning-modal" value="Закрыть"/></div>');
	} if (correctAnswersCount === 3) {
		$modalBox = $('<div class="modalBox"><h1>Результаты теста:</h1> <p>Поздравляем! Ваш результат ' + correctAnswersCount +'  из 3</p> <input type="submit" class="btn btn-warning btn-warning-modal" value="Закрыть"/></div>');
	}

	$overlay = $('<div class="overlay"></div>');
	$('body').append($overlay);
	$('body').append($modalBox);




	$('.btn-warning-modal').on('click', function hideModalBox() {
		for (i = 0; i < $getAnswer.length; i++) {
			$getAnswer[i].checked = false;
		}
	$modalBox.remove();
	$overlay.remove();


});
});


});