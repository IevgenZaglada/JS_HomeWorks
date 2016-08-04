(function ($) {
  $.fn.modal = function () {

    var $btn = this;
    var $modalBox;
    var $overlay;
    var $body = $('body');


    function showModal(e) {
      e.preventDefault();

      var correctAnswers = [2, 3, 6];
      var correctAnswersCounter = 0;
      var $answersOptions = $('.for-checking');

      for (var i = 0; i < correctAnswers.length; i++) {
        if ($answersOptions[correctAnswers[i]].checked)
          correctAnswersCounter++;
      }

      var test = correctAnswersCounter;

      $modal = $('<div class="modal-box">' +  test  + '</div>');
      $overlay = $('<div class="modal-overlay"></div>');
      $($body).append($overlay);
      $($body).append($modal);
      $($overlay).one('click', hideModal);

      correctAnswersCounter = 0;
    }

    function hideModal() {
      var $answersOptions = $('.for-checking');
      $modal.remove();
      $overlay.remove();
      for (var i = 0; i < $answersOptions.length; i++) {
        $answersOptions[i].checked = false;
      }
    }



    $($btn).on('click', showModal);

  };
  return this;

})(jQuery);


// PLUGINS

// повесить обработчик событий
// при клике - создавать html, и вставлять в DOM

(function ($) {

  $.fn.fancybox = function (options) {

    var defaults = {
      overlayColor: 'black',
      fonSize: '13px'
    };

    var settings = $.extend(defaults, options);

    console.log('defaults', defaults);
    console.log('options', options);
    console.log('settings', settings);

    var $link = $(this);
    var $body = $('.container');
    var $modal;
    var $overlay;

    function showModal(e) {
      e.preventDefault();
      var href = $link.attr('href');

      $modal = $('<div class="fancybox-modal"><img src=" ' + href + ' "><p style="font-size: ' + settings.fontSize + ';">some text</p></div>');
      $overlay = $('<div class="fancybox-overlay">');
      $overlay.css({
        'background-color': settings.overlayColor
      });

      $overlay.one('click', hideModal);
      $body.append($overlay);
      $body.append($modal);
    }

    function hideModal() {
      $modal.remove();
      $overlay.remove();
    }

    $link.on('click', showModal);

    return this;
  };

})(jQuery);
