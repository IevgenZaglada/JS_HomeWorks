(function($) {

	$.fn.carousel = function() {

		var $leftUIEl = $('.carouselArrowLeft');
		var $rightUIEl = $('.carouselArrowRight');
		var $elementsList = $('.carouselList');

		var pixelsOffset = 170;
		var currentLeftValue = 0;
		
		var elementsCount = $elementsList.find('li').length;
		var minimumOffset = - ((elementsCount - 4) * pixelsOffset);
		var maximumOffset = 0;


		$leftUIEl.on('click', function() {
		if (currentLeftValue != maximumOffset) {
		currentLeftValue += 170;
		$elementsList.animate ({ left: currentLeftValue + 'px'}, 500);
		}
		});

		$rightUIEl.on('click', function() {
		if (currentLeftValue != minimumOffset) {
		currentLeftValue -= 170;
		$elementsList.animate ({ left: currentLeftValue + 'px'}, 500);
		}
		});


		return this;
	}


})(jQuery);