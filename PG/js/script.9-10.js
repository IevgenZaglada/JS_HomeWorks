// jQuery plugin activation


$(function () {
  $('.fancybox').fancybox();
});



// ANIMATION

// javascript animation
function slideLeft(el, duration, slideLength) {
  var initialPosition = parseInt(el.style.left) || 0;
  var time = 0;
  var fps = 50;
  console.log(initialPosition);

  var interval = setInterval(function () {
    if (time > duration) {
      clearInterval(interval);
    }
    console.log(slideLength/(duration/fps));
    initialPosition += slideLength/(duration/fps);
    time += duration/fps;
    el.style.left = initialPosition + 'px';
  }, duration/fps);
}

var box = document.querySelector('.js-box');

box.addEventListener('click', function () {
  slideLeft(box, 1000, 200);
});

// jQuery animation

$('.jquery-box').on('click', function () {
  $(this).animate({
    left: '+=520',
    // opacity: 0
  }, 1000);
});

// CSS animation

$('.css-box').on('click', function () {
  $(this).addClass('css-box-animated');
});
