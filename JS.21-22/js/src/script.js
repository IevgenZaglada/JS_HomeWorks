'use strict'

// Data

const questionProp = "question";
const answerProp = "answer";

const quizTitle = 'Тест по програмированию';
const quizButton = 'Проверить мои результаты';
const storedQuestions = [{[questionProp]: "Релиз какой OS состоялся раньше всего?"},{[questionProp]: "Кто являеться создателем JavaScript?"},{[questionProp]: "Как называеться самый первый в мире веб-браузер?"}];
const storedAnswers = [[{[answerProp]: "OS X"},{[answerProp]: "Linux"},{[answerProp]: "Windows"},],[{[answerProp]: "Брендад Эйх"},{[answerProp]: "Ларри Уолл"},{[answerProp]: "Билл Гейтс"},],[{[answerProp]: "Mosaic"},{[answerProp]: "Internet Explorer"},{[answerProp]: "Netscape"}]];
const parsedQuestions = [];
const parsedAnswers = [[],[],[]];

// Adding data to local storage

(writeToLocalStorage => {
  for (let i = 0; i < storedQuestions.length; i++) {
    localStorage.setItem(`q ${i + 1}`, JSON.stringify(storedQuestions[i]));
    for (let j = 0; j < storedAnswers.length; j++) {
      localStorage.setItem(`a ${i + 1}-${j + 1}`, JSON.stringify(storedAnswers[i][j]));
    }
  }
})();

// Generating HTML using template

(getFromLocalStorage => {
  for (let i =0; i < storedQuestions.length; i++) {
    parsedQuestions[i] = JSON.parse(localStorage.getItem(`q ${i + 1}`));
    for (let j = 0; j < storedAnswers.length; j++) {
      parsedAnswers[i][j] = JSON.parse(localStorage.getItem(`a ${i + 1}-${j + 1}`));
    }
  }
})();


const html = $('#testQuiz').html();

const quiz = tmpl(html, {
  headTitle: quizTitle,
  q_data: parsedQuestions,
  a_data: parsedAnswers,
  submitValue: quizButton
});

$('body').append(quiz);

$('.btn').modal(); // Separate plugin calling modal window
