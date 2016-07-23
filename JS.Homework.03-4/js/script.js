var testQuiz = {

  QUESTIONS_QUANTITY: 3,
  ANSWERS_QUANTITY: 3,

  title: 'Тест по программированию',
  questions: '. Вопрос № ',
  answers: 'Вариант ответа № ',

  generateNewElement: function (newElemTag, newElemClass, newElemParent, newElemContent) {
    var newElem = document.createElement(newElemTag);
    newElem.className = newElemClass;
    var parent = document.getElementsByClassName(newElemParent);
    if (parent.length) {
      parent[0].appendChild(newElem);
    } else {
      document.body.appendChild(newElem);
    }
    if (newElemContent) {
      newElem.innerHTML = newElemContent;
    }
  },

  generate: function () {
    this.generateNewElement('div', 'container');
    this.generateNewElement('h1', 'heading', 'container', this.title);
    this.generateNewElement('form', 'quiz_form', 'container');
    this.generateNewElement('ul', 'list-group', 'quiz_form');

    for (var q = 1; q <= this.QUESTIONS_QUANTITY; q++) {
      this.generateNewElement('li', 'list-group-item ' + q, 'list-group', q + this.questions + q);
      for (var a = 1; a <= this.ANSWERS_QUANTITY; a++) {
        this.generateNewElement('p', 'answer ' + a, 'list-group-item ' + q,  this.answers + a);
      }
    }

    // var ul = document.createElement('ul');
    // ul.className = 'list-group';
    // selectForm[0].appendChild(ul);

    // //content: questions
    // for (var i = 0; i < this.questions.length; i++) {
    //   var selectUl = document.getElementsByClassName('list-group');
    //   console.log(selectUl);
    //   var li_question = document.createElement('li');
    //   li_question.className = 'list-group-item count--' + i;
    //   li_question.innerHTML = i + 1 + '. ' + this.questions[i];
    //   selectUl[0].appendChild(li_question);

    //   //content: answers
    //   var k = this.answers[i].length;
    //   for (var j = 0; j < k; j++) {
    //     var li_answer = document.createElement('li');
    //     li_answer.className = 'li list-group-item-' + j;
    //     li_answer.innerHTML = '<input type = checkbox>' + this.answers[i][j];
    //     var selectLi = document.getElementsByClassName('list-group-item');
    //     selectLi[i].appendChild(li_answer);
    // }
  }

  // button creation
  // var buttonSubmit = document.createElement('input');
  // buttonSubmit.className = 'btn btn-primary';
  // var buttonSubmitType = document.createAttribute('type');
  // buttonSubmitType.value = 'submit';
  // var buttonSubmitValue = document.createAttribute('value');
  // buttonSubmitValue.value = 'Проверить мои результаты';
  // buttonSubmit.setAttributeNode(buttonSubmitType);
  // buttonSubmit.setAttributeNode(buttonSubmitValue);
  // var insertButton = document.getElementsByClassName('quiz_form');
  // console.log(insertButton);
  // insertButton[0].appendChild(buttonSubmit);

  // minor styling
  // var visualLi = document.getElementsByTagName('li');
  // for (var y = 0; y < visualLi.length; y++) {
  //   visualLi[y].style.listStyle = 'none';
  // }
  // }

};

testQuiz.generate();



// var wrapper = document.createElement('div');
// wrapper.className = 'container';
// document.body.appendChild(wrapper);
// var selectContainer = document.getElementsByClassName('container');

// var quizTitle = document.createElement('h1');
// quizTitle.className = 'heading';
// quizTitle.innerHTML = this.title;
// selectContainer[0].appendChild(quizTitle);
//
// var form = document.createElement('form');
// form.className = 'quiz_form';
// selectContainer[0].appendChild(form);
// var selectForm = document.getElementsByClassName('quiz_form');
