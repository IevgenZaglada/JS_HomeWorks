$(function() {
	var $input = $('.text');
	var $button = $('.myButton');
	var $content = $('.content');

	function searchInfo() {
		$('a').remove();
		$('p').remove();

		$.ajax({
			url: "https://pixabay.com/api/?key=3257095-9ba73a171b86ba863f1b822f8&q=" + encodeURIComponent($input.val()),
			dataType: 'jsonp',
			success: function(data) {
				if (parseInt(data.totalHits) > 0) 
					$.each(data.hits, function(i, hit) {
						var preview = hit.previewURL;
						var page = hit.pageURL;

						$content.append('<a href="'+ page +'"><img src="'+ preview +'"></a>');
					});
				else {
					$content.append('<p>Страница не найдена</p>');
				}
			}
		});
	};
		$button.on('click', searchInfo);

		$input.keydown(function(event) {
			if (event.keyCode == 13) {
				searchInfo();
			}
		});
});