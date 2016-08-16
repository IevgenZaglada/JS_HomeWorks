(function ($) {
  $(function () {
    $('.jcarousel')
      .jcarousel({
        // Options go here
      });
    $('.jcarousel-pagination')
      .on('jcarouselpagination:active', 'a', function () {
        $(this).attr('id', 'active');
      })
      .on('jcarouselpagination:inactive', 'a', function () {
        $(this).removeAttr('id');
      })
      .jcarouselPagination({

      });
  });
})(jQuery);
