var testQuiz = {

  questionsQuantity: 3,
  answersQuantity: 3,

  title: 'Тест по программированию',
  questions: '. Вопрос № ',
  answers: 'Вариант ответа № ',

  generateNewElement: function (newElemTag, newElemClass, newElemParent, newElemContent, order) {
    var newElem = document.createElement(newElemTag);
    newElem.className = newElemClass;
    if (newElemParent) {
      var parent = document.getElementsByClassName(newElemParent);
      if (parent.length) {
        var ordNum = (order > 0 && order < parent.length) ? order : 0;
        if (ordNum) {
          parent[ordNum].appendChild(newElem);
        } else {
          parent[0].appendChild(newElem);
        }
      } else {
        console.log('Error! Wrong parentElemClassName');
      }
    } else {
      document.body.appendChild(newElem);
    }
    if (newElemContent) {
      newElem.innerHTML = newElemContent;
    }
  },

  addAttribute: function (attrName, attrValue, attrParent) {
    var attr = document.createAttribute(attrName);
    attr.value = attrValue;
    var parent = document.getElementsByClassName(attrParent);
    if (parent.length) {
      parent[0].setAttribute(attr);
    }
  },

  generate: function () {
    this.generateNewElement('div', 'container');
    this.generateNewElement('h1', 'heading', 'container', this.title);
    this.generateNewElement('form', 'quiz_form', 'container');
    this.generateNewElement('ul', 'list-group', 'quiz_form');

    var k = 1;
    for (var q = 1; q <= this.questionsQuantity; q++) {
      this.generateNewElement('li', 'list-group-item ' + q, 'list-group', q + this.questions + q);
      for (var a = 1; a <= this.answersQuantity; a++) {
        this.generateNewElement('p', 'answer-container ' + k, 'list-group-item ' + q, 0, a);
        this.generateNewElement('label', 'check-label ' + k, 'answer-container ' + k, 0, 0);
        this.generateNewElement('input', 'checkbox-input ' + k, 'check-label ' + k);
        this.generateNewElement('span', 'answer ' + a, 'check-label ' + k, this.answers + a);
        k++;
        this.addAttribute('input', 'checkbox', 'checkbox-input ' + k);
      }
    }
    this.generateNewElement('input', 'btn btn-primary', 'quiz_form');
    this.addAttribute('type', 'submit', 'btn');
    this.addAttribute('value', 'Проверить мои результаты', 'btn');
  }
};

testQuiz.generate();
