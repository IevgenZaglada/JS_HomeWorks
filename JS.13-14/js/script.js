// 'use strict';

// Adding data to local storage

var questionsQuantity = 3;
var answersQuantity = 3;
var storedQuestions = new Array(questionsQuantity);
var storedAnswers = new Array(answersQuantity);
for (var i = 0; i < answersQuantity; i++) {
  storedAnswers[i] = new Array(answersQuantity);
}



storedQuestions[0] = {"question": "Релиз какой OS состоялся раньше всего?"};
storedQuestions[1] = 'Кто являеться создателем JavaScript?';
storedQuestions[2] = 'Как называеться самый первый в мире веб-браузер?';

storedAnswers[0][0] = 'OS X';
storedAnswers[0][1] = 'Linux';
storedAnswers[0][2] = 'Windows';

storedAnswers[1][0] = 'Брендад Эйх';
storedAnswers[1][1] = 'Ларри Уол';
storedAnswers[1][2] = 'Билл Гейтс';

storedAnswers[2][0] = 'Mosaic';
storedAnswers[2][1] = 'Internet Explorer';
storedAnswers[2][2] = 'Netscape';

for (i = 0; i < questionsQuantity; i++) {
  localStorage.setItem('q ' + (i + 1), storedQuestions[i]);
  for (var j = 0; j < answersQuantity; j++) {
    localStorage.setItem('a ' + (i + 1) + '-' + (j + 1), storedAnswers[i][j]);
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
  parsedQuestions[i] = JSON.parse(localStorage.getItem('q' + (i + 1)));
  for (j = 0; i < answersQuantity; i++) {
    parsedAnswers[i][j] = JSON.parse(localStorage.getItem('a' + (i + 1) + '-' + (j + 1)));
  }
}

var quiz = tmpl(html, {
  headTitle: quizTitle,
  q_data: parsedQuestions,
  a_data: parsedAnswers,
  submitValue: quizButton
});

$('body').append(quiz);


// var articles =  [
//   {
//     title: 'I want to be a frontend developer becuase',
//     listItemOne: 'It is really good to make something instead of breaking something ',
//     listItemTwo: 'It is good to make things beautiful using high technologies.',
//     listItemThree: 'Finally i`ll able to make a website with a content under restriction'
//   },
//   {
//     title: 'My phone is: +3080930373861',
//     content: 'Feel free to poke me at my VK profile.'
//   },
//   {
//     title: 'My feedback:',
//     content: 'I wish more offline meeting. Offline makes a party.'
//   }
// ];
// var content = tmpl(html,{
//   data: articles
// });
// $('body').append(content);
