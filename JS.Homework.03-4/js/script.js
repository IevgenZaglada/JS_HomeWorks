var content = {

  LI_NUM: 3,
  CHECKBOX_NUM: 3,


  newElement: function (newElemType, newElemClassName, parentClassName, index, newElemContent) {

    var newElement = document.createElement(newElemType);

    if (newElemClassName) {
      newElement.classList.add(newElemClassName);
    }

    if (parentClassName) {
      var parentElem = document.getElementsByClassName(parentClassName);
      console.log(document.getElementsByClassName(parentClassName));
      if (parentElem.length) {
        var sequence = (index > 0 && index < parentElem.length) ? index : 0;
        if (index) {
          parentElem[index].appendChild(newElement);
        } else {
          parentElem[0].appendChild(newElement);
        }
      }
    } else {
      document.body.appendChild(newElement);
    }

    if (newElemContent) {
      newElement.innerHTML = newElemContent;
    }
  },


  attribute: function (attrName, attrValue, className, index) {
    var element = (index) ? (document.getElementsByClassName(className)[index]) : (document.getElementsByClassName(className)[0]);

    var att = document.createAttribute(attrName);
    att.value = attrValue;
    element.setAttributeNode(att);
  },


  generate: function () {

    this.newElement('div', 'container', 'wrapper', 0, 0);
    this.newElement('h1', 'title', 'container', 0, 'Тест по программированию');
    this.newElement('form', 'test__container', 'container');
    this.attribute('action', '#', 'test__container');
    this.attribute('method', 'GET', 'test__container');

    this.newElement('ul', 'test__list', 'test__container');

    var k = 1;
    for (var i = 0; i < this.LI_NUM; i++) {
      var question = 'Вопрос #' + (i + 1);
      this.newElement('li', 'list__group__tem count__li' + (i + 1), 'test__list', 0, question);

      for (var j = 0; j < this.CHECKBOX_NUM; j++) {
        var answer = 'Вариант ответа #' + (j + 1);
        this.newElement('div', 'checkbox count__check' + k, 'list__group__tem count-li' + (i + 1), j);
        this.newElement('label', 'check__label' + k, 'checkbox count__check' + k, 0);
        this.newElement('input', 'checkbox__input' + k, 'check__label' + k);
        tihs.newElement('span', 'answer', 'check__label' + k, 1, answer);
        this.attribute('type', 'checkbox', 'checkbox__input' + k);

        var checkboxValue = (i + 1) + '_' + (j + 1);
        this.attribute('value', checkboxValue, 'checkbox__input' + k);
        k++;

      }
    }
    this.newElement('input', 'button btn__primary', 'test__container');
    this.attribute('type', 'submit', 'button');
    this.attribute('value', 'Проверить мои результаты', 'button');
  }
};

content.generate();
