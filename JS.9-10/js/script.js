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

$(document).ready(function () {

  //
  // Enable selectBox control and bind events
  //

  $('#create').click(function () {
    $('SELECT').selectBox();
  });

  $('#destroy').click(function () {
    $('SELECT').selectBox('destroy');
  });

  $('#enable').click(function () {
    $('SELECT').selectBox('enable');
  });

  $('#disable').click(function () {
    $('SELECT').selectBox('disable');
  });

  $('#serialize').click(function () {
    $('#console').append('<br />-- Serialized data --<br />' +
      $('FORM').serialize().replace(/&/g, '<br />') + '<br /><br />');
    $('#console')[0].scrollTop = $('#console')[0].scrollHeight;
  });

  $('#value-1').click(function () {
    $('SELECT').selectBox('value', 1);
  });

  $('#value-2').click(function () {
    $('SELECT').selectBox('value', 2);
  });

  $('#value-2-4').click(function () {
    $('SELECT').selectBox('value', [2, 4]);
  });

  $('#options').click(function () {
    $('SELECT').selectBox('options', {
      'Opt Group 1': {
        '1': 'Value 1',
        '2': 'Value 2',
        '3': 'Value 3',
        '4': 'Value 4',
        '5': 'Value 5'
      },
      'Opt Group 2': {
        '6': 'Value 6',
        '7': 'Value 7',
        '8': 'Value 8',
        '9': 'Value 9',
        '10': 'Value 10'
      },
      'Opt Group 3': {
        '11': 'Value 11',
        '12': 'Value 12',
        '13': 'Value 13',
        '14': 'Value 14',
        '15': 'Value 15'
      }
    });
  });

  $('#default').click(function () {
    $('SELECT').selectBox('settings', {
      'menuTransition': 'default',
      'menuSpeed': 0
    });
  });

  $('#fade').click(function () {
    $('SELECT').selectBox('settings', {
      'menuTransition': 'fade',
      'menuSpeed': 'fast'
    });
  });

  $('#slide').click(function () {
    $('SELECT').selectBox('settings', {
      'menuTransition': 'slide',
      'menuSpeed': 'fast'
    });
  });

  $('select')
    .selectBox({
      mobile: true
    })
    .focus(function () {
      $('#console').append('Focus on ' + $(this).attr('name') + '<br />');
      $('#console')[0].scrollTop = $('#console')[0].scrollHeight;
    })
    .blur(function () {
      $('#console').append('Blur on ' + $(this).attr('name') + '<br />');
      $('#console')[0].scrollTop = $('#console')[0].scrollHeight;
    })
    .change(function () {
      $('#console').append('Change on ' + $(this).attr('name') + ': ' + $(this).val() + '<br />');
      $('#console')[0].scrollTop = $('#console')[0].scrollHeight;
    });

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
