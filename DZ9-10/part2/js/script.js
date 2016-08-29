$(function() {
	var $links = $('a');
	$links.on('click', function(e) {
		e.preventDefault();
	});

	var $submenu = $('.submenu');
	var $dropDown = $('.dropDown');
	$dropDown.hover(
		function() {
			$(this).children('.submenu')
			.animate({
				height: '260px',
				backgroundColor: 'rgb(128,128,255)'
			}, 200)
			.show();
		},
		function() {
			$(this).children('.submenu')
			.animate({
				height: '0',
				backgroundColor: 'rgba(78,33,41,0.8)'
			}, 200)
			.hide(0);
		}
		);
});