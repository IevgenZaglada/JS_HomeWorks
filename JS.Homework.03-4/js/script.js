var testQuiz = {
  title: 'Тест по программированию',
  questions: ['Вопрос № 1', 'Вопрос № 2', 'Вопрос № 3'],
  answers: [
    ['Вариант ответа № 1', 'Вариант ответа № 2', 'Вариант ответа № 3'],
    ['Вариант ответа № 1', 'Вариант ответа № 2', 'Вариант ответа № 3'],
    ['Вариант ответа № 1', 'Вариант ответа № 2', 'Вариант ответа № 3']
  ],

  generate: function () {
    var wrapper = document.createElement('div');
    wrapper.className = 'container';
    document.body.appendChild(wrapper);
    var selectContainer = document.getElementsByClassName('container');

    var quizTitle = document.createElement('h1');
    quizTitle.className = 'heading';
    quizTitle.innerHTML = this.title;
    selectContainer[0].appendChild(quizTitle);

    var form = document.createElement('form');
    form.className = 'quiz_form';
    selectContainer[0].appendChild(form);
    var selectForm = document.getElementsByClassName('quiz_form');

    ul = document.createElement('ul');
    ul.className = 'list-gruop';
    selectForm[0].appendChild(ul);

    for (var i = 0; i < this.questions.length; i++) {
      var selectUl = document.getElementsByClassName('list-gruop');
      console.log(selectUl);
      var li_question = document.createElement('li');
      li_question.className = 'li questions list-group-item-' + i;
      li_question.innerHTML = i + 1 + '. ' + this.questions[i];
      selectUl[0].appendChild(li_question);

      var k = this.answers[i].length;
      for (var j = 0; j < k; j++) {
        var li_answer = document.createElement('li');
        li_answer.className = 'li list-group-item-' + j;
        li_answer.innerHTML = '<input type = checkbox>' + this.answers[i][j];
        var selectLi = document.getElementsByClassName('questions');
        selectLi[i].appendChild(li_answer);
      }
    }
    
    var visualLi = document.getElementsByTagName('li');
      for (var y = 0; y < visualLi.length; y++) {
        visualLi[y].style.listStyle = 'none';
      }
  }


};

testQuiz.generate();
