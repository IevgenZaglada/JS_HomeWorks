$(function() {
	var $field = $('#tabs');
	$field.css({
		width: '600px',
		height: '400px',
		margin: '50px auto',
		border: '0px solid black',
		boxShadow: '0 0 10px rgba(0,0,0,0.5)',
		backgroundColor: '#f5caac',
	});

	var $columns = $('.tabs');
	$columns.css({
		width: '100%',
		height: '12%',
		backgroundColor: 'white',
	});

	var $tab = $('.tab');
	$tab.css({
		display: 'inline-block',
		width: '25%',
		height: '100%',
		textAlign: 'center',
		lineHeight: '47px',
		float: 'left',
		cursor: 'pointer',
		margin: '0 5px',
		backgroundColor: '#e2e2e2',
	});

	var $links = $('.links');
	$links.css({
		display: 'block',
		textDecoration: 'none',
		fontFamily: 'oswald_regularregular',
		fontSize: '16px',
		color: 'rgb(88, 110, 175)',
	});

	var $text = $('.text_about');
	$text.css({
		padding: '20px',
		fontFamily: 'oswald_regularregular',
		fontSize: '20px',
		color: 'rgb(121, 134, 171)',
	});


	var $tabs = $('#tabs');
	$('.tabsContent div', $tabs).each(function(i){
		if (i != 0) $(this).hide(0);
	});

	$tabs.on('click', '.tabs a', function(e) {
		e.preventDefault();

		var tabId = $(this).attr('href');

		$('.tabs a', $tabs).removeClass();
		$(this).addClass('active');

		$('.tabsContent div', tabs).hide();
		$(tabId).show();
	});
});

