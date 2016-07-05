var programmingTest = document.getElementsByTagName('body');

var wrapper = document.createElement('div');
wrapper.classList.add('container');
programmingTest[0].appendChild(wrapper); //container created in body
//
//
var testHeader = document.createElement('h1');
testHeader.classList.add('heading');
testHeader.innerHTML = 'Тест по программированию';
var testHeaderIns = document.querySelector('.container');
testHeaderIns.appendChild(testHeader); // Head added

var quizSection = document.createElement('ul');
quizSection.classList.add('quiz');
var quizSectionIns = document.querySelector('.container');
quizSectionIns.appendChild(quizSection); // ul added

var quizQuestionFirst = document.createElement('li');
quizQuestionFirst.classList.add('question1');
quizQuestionFirst.innerHTML = '1. Вопрос №1';
var quizQuestionFirstInst = document.querySelector('.quiz');
quizQuestionFirstInst.appendChild(quizQuestionFirst);

var content = {
head: 'Тест по программированию',
content: 'question',

myFunction: function (newElemType, newElemClassName, parentClassName, newElemContent) {
    var newElement = document.createElement(newElementType);

    if (newElememClass) {
      newElement.classList.add (newElemClassName);
    }

    if (parentClassName) {
      var parentElem = document.getElementsByClassName(parentClassName);
    }

    if (parentClassName) {
      newElement.innerHTML = newElemContent;
    }
},

generate: function() {

},

};
