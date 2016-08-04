'use strict';

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

      switch (correctAnswersCounter) {
        case 0:
          $modal = $('<div class="modal-box">Your score is: ' + correctAnswersCounter + '. <p>You can try again.</p><div class="start_again"><input type="submit" class="btn btn-danger again" value="Начать заново"></div></div>');
          break;
        case 1:
          $modal = $('<div class="modal-box">Your score is: ' + correctAnswersCounter + '. <p>A bit closer. You can try again.</p><div class="start_again"><input type="submit" class="btn btn-warning again" value="Начать заново"></div></div>');
          break;
        case 2:
          $modal = $('<div class="modal-box">Your score is: ' + correctAnswersCounter + '. <p>Almost here. You can try again.</p><div class="start_again"><input type="submit" class="btn btn-warning again" value="Начать заново"></div></div>');
          break;
        case 3:
          $modal = $('<div class="modal-box">Your score is: ' + correctAnswersCounter + '. <p>Woho! Correct! Victory!</p><div class="start_again"><input type="submit" class="btn btn-success again" value="Начать заново again"></div></div>');
          break;
      }

      $overlay = $('<div class="modal-overlay"></div>');
      $($body).append($overlay);
      $($body).append($modal);
      $($overlay).animate({
        'opacity': '1'
      }, 1000);
      $($modal).animate({
        'opacity': '1',
        'top': '40%'
      }, 1000);
      $('.again').one('click', hideModal);
      correctAnswersCounter = 0;
    }

    function hideModal() {
      var $answersOptions = $('.for-checking');
      $modal.animate({
        'opacity': '0',
        'top': '-50%'
      }, 1000);
      $overlay.animate({
        'opacity': '0'
      }, 1000);
      setTimeout(function () {
        $modal.remove();
        $overlay.remove();
      }, 1000);
      for (var i = 0; i < $answersOptions.length; i++) {
        $answersOptions[i].checked = false;
      }
    }

    $($btn).on('click', showModal);

  };
  return this;

})(jQuery);
