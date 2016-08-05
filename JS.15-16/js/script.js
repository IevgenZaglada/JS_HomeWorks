var $searchForm = $('.searchForm');
var $searchSubmit = $('.searchSubmit');
var $content = $('content');
var API_KEY = '3044055-26f05a0ce42eac2412c64079c';

(function ($) {

  $.fn.search = function () {

    $('a').remove();
    $('p').remove();

    $.ajax({
      url: "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent($searchForm.val()),
      dataType: 'jsonp',

      success: function (data) {
        if (parseInt(data.totalHits) > 0)
          $.each(data.hits, function (i, hit) {

            var image = hit.previewURL;
            var page = hit.pageURL;
            $content.append('<a href="' + page + '"><img class="foundImages" src="' + image + '"></a>');
          });
        else
          $content.append('<p>No images found.</p>');
      }
    });
  };
})(jQuery);

$searchForm.keydown(function (event) {
  if (event.keyCode == 13) {
    $searchSubmit.search();
  }
});

$searchSubmit.on('click', function () {
  $(this).search();
});
