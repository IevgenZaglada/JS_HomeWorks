// CAROUSEL

(function ($) {
  $(function () {
    $('.jcarousel').jcarousel();

    $('.jcarousel-control-prev')
      .on('jcarouselcontrol:active', function () {
        $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function () {
        $(this).addClass('inactive');
      })
      .jcarouselControl({
        target: '-=1'
      });

    $('.jcarousel-control-next')
      .on('jcarouselcontrol:active', function () {
        $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function () {
        $(this).addClass('inactive');
      })
      .jcarouselControl({
        target: '+=1'
      });

    $('.jcarousel-pagination')
      .on('jcarouselpagination:active', 'a', function () {
        $(this).addClass('active');
      })
      .on('jcarouselpagination:inactive', 'a', function () {
        $(this).removeClass('active');
      })
      .jcarouselPagination();
  });
})(jQuery);

// SELECTBOX

$(function () {
  $("select").selectBoxIt();
});

// custom checkbox

$(document).ready(function () {
  $('.iCheck').iCheck({
    checkboxClass: 'icheckbox_minimal-yellow',
    radioClass: 'iradio_minimal-yellow',
    increaseArea: '20%' // optional
  });
});


// dropdown menu

$('.trigger').hover(function () {
  $('.aftermath').slideToggle('fast');
  $('nav').animate({
    backgroundColor: 'rgb(93, 14, 156)'
  }, 3000);
});

$('.triggerLvlTwo').hover(function () {
  $('.aftermathLvlTwo').slideToggle('fast');
  $('nav').animate({
    backgroundColor: 'rgb(208, 19, 172)'
  }, 3000);
});

$('.triggerLvlThree').hover(function () {
  $('.aftermathLvlThree').slideToggle('fast');
  $('nav').animate({
    backgroundColor: 'rgb(235, 145, 12)'
  }, 3000);
});

$('.trigger-two').hover(function () {
  $('.aftermath-two').slideToggle('fast');
  $('nav').animate({
    backgroundColor: 'rgb(146, 45, 158)'
  }, 3000);
});

$('.secret').delay(3000).animate({
  opacity: 1,
  color: 'rgb(254, 160, 0)',
  left: '180px'
}, 5000);
$('.secret').delay(8000).animate({
  color: '#000',
  opacity: 0,
  left: '-500px'
}, 1000);
