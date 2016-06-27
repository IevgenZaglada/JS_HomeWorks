// EVENTS


var link = document.querySelector('a');
var listItem = document.querySelector('li');

// function handlerLink(event) {
//   console.log('handlerLink event target', event.target);
//   event.preventDefault();
// }
//
// function handlerListItem(event) {
//   console.log('handlerlistItem event target', event.target);
//   event.preventDefault();
// }
//
// link.addEventListener('click', handlerLink);
// listItem.addEventListener('click', handlerListItem);
//
//
//
// // handler or callback
// link.onclick = function () {
//   console.log('Basic example of click event: "onclick" method, adressed to variable "link" ');
// }
//
// // the most correct example of  handler
// function handlerClick() {
//   console.log('it works on click');
// }
//
// function handlerMO() {
//   console.log('it works on mouseover');
// }
//
function handlerCrossbrowser() {
  console.log('it works on click crossbrowser');
}
//
// function handlerWindow(event) {
//   console.log('it works on click in entire window');
//   console.log('event:', event);
//   console.log('event:', event.keyCode);
//   if (event.keyCode === 13){
//     alert('ENTER');
//   }
// }
//
//   function handlerlink(event) {
//     console.log('event X Y', event.clientX, event.clientY);
//     console.log('event target', event.target);
//     event.preventDefault();
//   }
//
// // // Old method of event stopping by returning 'false' boolean value
// // link.onclick = function (event) {
// //   console.log('link.onclick handler');
// //   return false;
// // }
//
// link.addEventListener('mouseover', handlerMO);
// link.addEventListener('click', handlerClick);
// // link.removeEventListener('mouseover', handlerMO);

// (if lte IE 8)
// link.attachEvent('onlick', handler);
// link.detachlink('onlick', handler);

function addEvent(link, event, callback) {
  if (window.attachedEvent) { // IE 8--
    link.attachEvent('on' + event, callback);
    console.log("IE!!!!!");
  } else {
    link.addEventListener(event, callback);
    console.log("not IE!!!!!");
  }
}

addEvent(link, 'click', handlerCrossbrowser);
