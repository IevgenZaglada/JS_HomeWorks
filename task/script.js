(function ($) {

  $.fn.delay = function () {

  $(this).on('click', function () {
    var url = "test/next.html";
    $('.link').animate({
      'opacity': '0'
    }, 1000).attr('href', url);
    // $('.link').

  });
  };

  return this;

})(jQuery);

$('.link').delay();
