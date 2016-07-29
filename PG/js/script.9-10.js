// jQuery plugin activation


$(function () {
  $('.fancybox').fancybox();
});

$( function() {
    var state = true;
    $( ".jQuery-color" ).on( "click", function() {
      if ( state ) {
        $( ".jQuery-color" ).animate({
          backgroundColor: "#9fe38f",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( ".jQuery-color" ).animate({
          backgroundColor: "#84e",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  } );



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


// ANIMATION SMOOTHING

$('.easing-box').on('click', function () {
    $(this).animate({left: '+=520'}, 1000, 'easeOutElastic');
});
