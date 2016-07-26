var globalObject = {
	createTitle: function(text) {
		var title = document.createElement('h1');
		var wrapper = document.querySelector('body');
		wrapper.appendChild(title);
		title.innerHTML = text;
		title.className = 'text-center alert alert_title alert-success col-lg-6 col-lg-offset-3';
	},
	createQuestion: function(textNew) {
		var questionOne = document.createElement('p');
		var wrapper = document.querySelector('body');
		wrapper.appendChild(questionOne);
		questionOne.innerHTML = textNew;
		questionOne.className = 'lead alert alert-danger col-lg-4 col-lg-offset-4';
	},
	createAnswer: function(textAnswer) {
		var answerBox = document.createElement('div');
		var wrapper = document.querySelector('body');
		wrapper.appendChild(answerBox);
		answerBox.className = 'alert alert-danger col-lg-4 col-lg-offset-4';


		var answerOne = document.createElement('input');
		answerBox.appendChild(answerOne);
		answerOne.setAttribute('type', 'checkbox');
		answerOne.className = 'col-lg-2 col-lg-offset-2';

		var answerOneText = document.createElement('label');
		answerBox.appendChild(answerOneText);
		answerOneText.className = 'col-lg-6';
		answerOneText.innerHTML = textAnswer;
	},
	createButton: function(newText) {
		var checkResult = document.createElement('button');
		var wrapper = document.querySelector('body');
		wrapper.appendChild(checkResult);
		checkResult.innerHTML = newText;
		checkResult.setAttribute('type', 'submit' );
		checkResult.className = 'btn btn-primary col-lg-2 col-lg-offset-5';
	},
	globalFunction: function() {
		this.createTitle('Тест по программированию');
		for (var i = 1; i <=  3; i++) {
			this.createQuestion(i+ '. Вопрос № ' +i);
		for (var j = 1; j <= 4; j++) {
			this.createAnswer('Вариант ответа №' + j);
	}
	}
		this.createButton('Проверить мои результаты');
	}
}

/*globalObject.createTitle('Тест по программированию');

	for (var i = 1; i <=  3; i++) {
		globalObject.createQuestion(i+ '. Вопрос № ' +i);
			for (var j = 1; j <= 3; j++) {
		globalObject.createAnswer('Вариант ответа №' + j);
	}
	}


globalObject.createButton('Проверить мои результаты');*/

globalObject.globalFunction();
