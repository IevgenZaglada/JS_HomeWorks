'use strict';

// Data

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var questionProp = "question";
var answerProp = "answer";

var quizTitle = 'Тест по програмированию';
var quizButton = 'Проверить мои результаты';
var storedQuestions = [_defineProperty({}, questionProp, "Релиз какой OS состоялся раньше всего?"), _defineProperty({}, questionProp, "Кто являеться создателем JavaScript?"), _defineProperty({}, questionProp, "Как называеться самый первый в мире веб-браузер?")];
var storedAnswers = [[_defineProperty({}, answerProp, "OS X"), _defineProperty({}, answerProp, "Linux"), _defineProperty({}, answerProp, "Windows")], [_defineProperty({}, answerProp, "Брендад Эйх"), _defineProperty({}, answerProp, "Ларри Уолл"), _defineProperty({}, answerProp, "Билл Гейтс")], [_defineProperty({}, answerProp, "Mosaic"), _defineProperty({}, answerProp, "Internet Explorer"), _defineProperty({}, answerProp, "Netscape")]];
var parsedQuestions = [];
var parsedAnswers = [[], [], []];

// Adding data to local storage

(function (writeToLocalStorage) {
  for (var i = 0; i < storedQuestions.length; i++) {
    localStorage.setItem("q " + (i + 1), JSON.stringify(storedQuestions[i]));
    for (var j = 0; j < storedAnswers.length; j++) {
      localStorage.setItem("a " + (i + 1) + "-" + (j + 1), JSON.stringify(storedAnswers[i][j]));
    }
  }
})();

// Generating HTML using template

(function (getFromLocalStorage) {
  for (var i = 0; i < storedQuestions.length; i++) {
    parsedQuestions[i] = JSON.parse(localStorage.getItem("q " + (i + 1)));
    for (var j = 0; j < storedAnswers.length; j++) {
      parsedAnswers[i][j] = JSON.parse(localStorage.getItem("a " + (i + 1) + "-" + (j + 1)));
    }
  }
})();

var html = $('#testQuiz').html();

var quiz = tmpl(html, {
  headTitle: quizTitle,
  q_data: parsedQuestions,
  a_data: parsedAnswers,
  submitValue: quizButton
});

$('body').append(quiz);

$('.btn').modal(); // Separate plugin calling modal window
