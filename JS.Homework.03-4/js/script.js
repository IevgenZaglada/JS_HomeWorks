// var testQuiz = {
//
//   questionsQuantity: 3,
//   answersQuantity: 3,
//
//   title: 'Тест по программированию',
//   questions: 'Вопрос № ',
//   answers: 'Вариант ответа № ',
//
//   generateNewElement: function (newElemTag, newElemClass, newElemParent, newElemContent, order) {
//     var newElem = document.createElement(newElemTag);
//     newElem.className = newElemClass;
//     if (newElemParent) {
//       var parent = document.getElementsByClassName(newElemParent);
//       if (parent.length) {
//         var ordNum = (order > 0 && order < parent.length) ? order : 0;
//         if (ordNum) {
//           parent[ordNum].appendChild(newElem);
//         } else {
//           parent[0].appendChild(newElem);
//         }
//       } else {
//         console.log('Error! Wrong parentElemClassName');
//       }
//     } else {
//       document.body.appendChild(newElem);
//     }
//     if (newElemContent) {
//       newElem.innerHTML = newElemContent;
//     }
//   },
//
//   addAttribute: function (attrName, attrValue, className, ordinalNum) {
//     var element = (ordinalNum) ? (document.getElementsByClassName(className)[ordinalNum]) :
//       (document.getElementsByClassName(className)[0]);
//
//     var att = document.createAttribute(attrName);
//     att.value = attrValue;
//     element.setAttributeNode(att);
//   },
//
//   generate: function () {
//     this.generateNewElement('div', 'container');
//     this.generateNewElement('div', 'page-header', 'container');
//     this.generateNewElement('h1', 'heading', 'page-header', this.title);
//     this.generateNewElement('form', 'quiz_form', 'container');
//     this.generateNewElement('ul', 'list-group', 'quiz_form');
//
//     var k = 1;
//     for (var q = 1; q <= this.questionsQuantity; q++) {
//       this.generateNewElement('li', 'list-group-item count-li-' + q, 'list-group', this.questions + q);
//       for (var a = 1; a <= this.answersQuantity; a++) {
//         this.generateNewElement('p', 'checkbox count-check-' + k, 'count-li-' + q, 0, a);
//         this.generateNewElement('label', 'check-label ' + k, 'count-check-' + k, 0, 0);
//         this.generateNewElement('input', 'checkbox-input ' + k, 'check-label ' + k);
//         this.generateNewElement('span', 'answer ' + a, 'check-label ' + k, ' ' + this.answers + a);
//         this.addAttribute('type', 'checkbox', 'checkbox-input ' + k);
//         k++;
//       }
//     }
//     this.generateNewElement('input', 'btn btn-primary', 'quiz_form');
//     this.addAttribute('type', 'submit', 'btn');
//     this.addAttribute('value', 'Проверить мои результаты', 'btn');
//   }
// };
//
// testQuiz.generate();

var obj = {
  createElement: function (newElemTag, newElemClass, newElemContent) {
    var newElement = document.createElement(newElemTag);
    newElement.className = newElemClass;
    newElement.innerHTML = newElemContent;
    return newElement;
  },
  generateElement: function (newElemParent, order) {
    var el = this.createElement(); // вот здесь я взял элемент который создал через createElement и передал его в generateElement чтобы сделать append
    if (newElemParent) {
      var parent = document.getElementsByClassName(newElemParent);
      if (parent.length) {
        var ordNum = (order > 0 && order < parent.length) ? order : 0;
        if (ordNum) {
          parent[ordNum].appendChild(el);
        } else {
          parent[0].appendChild(el);
        }
      } else {
        console.log('Error! Wrong parentElemClassName');
      }
    } else {
      document.body.appendChild(el);
    }
  },

  generate: function () {
    this.createElement('div', 'cover', 'testing');
    console.log(this.createElement('div', 'cover', 'testing'));
    this.generateElement('body');
  }

};
obj.generate();
