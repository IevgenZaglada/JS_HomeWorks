// DOM: ELEMENT CREATION


var element = document.createElement('li');
 element.classList.add('box');
 element.innerHTML = 'HELLO';

var wrapper = document.querySelector('.wrapper');

wrapper.appendChild(element); //insrets specified element in the end of section

wrapper.insertBefore(element, wrapper.children[0]) // insrets specified element in specified place of section

var list = wrapper.querySelector('li'); // searching of specific element, and assigning it as variable

wrapper.removeChild(list);

wrapper.replaceChild(element, list);
