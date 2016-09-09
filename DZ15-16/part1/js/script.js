$(function() {
	var $input = $('.text');
	var $button = $('.myButton');
	var $content = $('.content');
	var preview;
	var page;

	function searchInfo() {
		$('a').remove();
		$('p').remove();

		function outputResult() {
			$content.append('<a href="'+ page +'"><img src="'+ preview +'"></a>');
		};

		function notFoundResult() {
			$content.append('<p>Страница не найдена</p>');
		};

		$.ajax({
			url: "https://pixabay.com/api/?key=3257095-9ba73a171b86ba863f1b822f8&q=" + encodeURIComponent($input.val()),
			dataType: 'jsonp',
			success: function(data) {
				if ($input.val() == '') {
					$content.append('<p>Нужно ввести слово</p>');
				} else
				if (parseInt(data.totalHits) > 0) 
					$.each(data.hits, function(i, hit) {
						preview = hit.previewURL;
						page = hit.pageURL;

						outputResult();
					});
				else {
					notFoundResult();
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