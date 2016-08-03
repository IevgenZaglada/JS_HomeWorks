(function ($) {

  $.fn.delayed = function () {

  $(this).on('click', function () {
    var url = "test/next.html";
    $('.wrapper').animate({
      'opacity': '0'
    }, 1000);
    $('.link').delay(1500).attr('href', url);
    // $('.link').

  });
  };

  return this;

})(jQuery);

$('.link').delayed();
