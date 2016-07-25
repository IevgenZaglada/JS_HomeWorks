// jQuery plugin activation


$(function () {
  $('.fancybox').fancybox();
});



// ANIMATION


function slideLeft(el) {
  var initialPosition = parseInt(el.style.left) || 0;
  var time = 0;
  console.log(initialPosition);

  var interval = setInterval(function () {
    if (time > 1000) {
      clearInterval(interval);
    }
    initialPosition += 1;
    time += 10;
    el.style.left = initialPosition + 'px';
  }, 10);
}

var box = document.querySelector('.js-box');

box.addEventListener('click', function () {
  slideLeft(box);
});

// 13:40
