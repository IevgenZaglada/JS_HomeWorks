var content = {
  newElement: function(newElemType, newElemClassName, parentClassName,  index, newElemContent) {

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
    var element = (index) ? (document.getElementsByClassName(className[index])) : (document.getElementsByClassName(className[0]));

    var att = document.createAttribute(attrName);
    att.value = attrValue;
    element.setAttributeNode(att);
  },

  generate: function () {

    this.newElement('div', 'container', 'wrapper', 0, 'FUCK!');

  }

};

content.generate();
