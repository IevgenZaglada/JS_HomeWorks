$(function() {
	var $input = $('.text');
	var $button = $('.myButton');
	var $content = $('.content');
	var preview;
	var page;

		function addResultInHtml(page, preview) {
			$content.append('<a href="'+ page +'"><img src="'+ preview +'"></a>');
		};

		function didNotFindResult() {
			$content.append('<p>Страница не найдена</p>');
		};

		function  clearResultsFromHtml() {
			$('a').remove();
			$('p').remove();
		};

		function didNotEnterWord() {
			$content.append('<p>Нужно ввести слово</p>');
		};

	function receiveQueryResult() {

		clearResultsFromHtml();

		$.ajax({
			url: "https://pixabay.com/api/?key=3257095-9ba73a171b86ba863f1b822f8&q=" + encodeURIComponent($input.val()),
			dataType: 'jsonp',
			success: function(data) {
				if ($input.val() == '') {
					didNotEnterWord();
				} else
				if (parseInt(data.totalHits) > 0) 
					$.each(data.hits, function(i, hit) {

						addResultInHtml(hit.pageURL, hit.previewURL);
					});
				else {
					didNotFindResult();
				}

			}
		});
	};
		$button.on('click', receiveQueryResult);

		$input.keydown(function(event) {
			if (event.keyCode == 13) {
				receiveQueryResult();
			}
		});
});