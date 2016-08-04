'use strict'
// Adding data to local storage

var questionsQuantity = 3;
var answersQuantity = 3;
var storedQuestions = new Array(questionsQuantity);
var storedAnswers = new Array(answersQuantity);
for (var i = 0; i < answersQuantity; i++) {
  storedAnswers[i] = new Array(answersQuantity);
}

storedQuestions[0] = {"question": "Релиз какой OS состоялся раньше всего?"};
storedQuestions[1] = {"question": "Кто являеться создателем JavaScript?"};
storedQuestions[2] = {"question": "Как называеться самый первый в мире веб-браузер?"};

storedAnswers[0][0] = {"answer": "OS X"};
storedAnswers[0][1] = {"answer": "Linux"};
storedAnswers[0][2] = {"answer": "Windows"};

storedAnswers[1][0] = {"answer": "Брендад Эйх"};
storedAnswers[1][1] = {"answer": "Ларри Уолл"};
storedAnswers[1][2] = {"answer": "Билл Гейтс"};

storedAnswers[2][0] = {"answer": "Mosaic"};
storedAnswers[2][1] = {"answer": "Internet Explorer"};
storedAnswers[2][2] = {"answer": "Netscape"};

for (i = 0; i < questionsQuantity; i++) {
  localStorage.setItem('q ' + (i + 1), JSON.stringify(storedQuestions[i]));
  for (var j = 0; j < answersQuantity; j++) {
    localStorage.setItem('a ' + (i + 1) + '-' + (j + 1), JSON.stringify(storedAnswers[i][j]));
  }
}

// Generating HTML using template

var html = $('#testQuiz').html();

var quizTitle = 'Тест по програмированию';
var quizButton = 'Проверить мои результаты';

var parsedQuestions = new Array(questionsQuantity);
var parsedAnswers = new Array(answersQuantity);
for (var i = 0; i < answersQuantity; i++) {
  parsedAnswers[i] = new Array(answersQuantity);
}

for (i = 0; i < questionsQuantity; i++) {
  parsedQuestions[i] = JSON.parse(localStorage.getItem('q ' + (i + 1)));
  for (j = 0; j < answersQuantity; j++) {
    parsedAnswers[i][j] = JSON.parse(localStorage.getItem('a ' + (i + 1) + '-' + (j + 1)));
  }
}

var quiz = tmpl(html, {
  headTitle: quizTitle,
  q_data: parsedQuestions,
  a_data: parsedAnswers,
  submitValue: quizButton
});

$('body').append(quiz);


$('.btn').modal(); // Separate plugin calling modal window
