$(function() {
	var $bodyArea = $('body');
	$bodyArea.css('backgroundColor', '#9cb9ca');

	var $fieldset = $('fieldset');
	$fieldset.css({
		width: '800px',
		height: '300px',
		margin: '25px auto',
		border: '1px solid black',
		backgroundColor: '#bfdede',
		position: 'relative',
	});

	var $label = $('label');
	$label.css({
		width: '80px',
		display: 'inline-block',
		margin: '25px 10px',
		fontFamily: 'gidoleregular',
	});
	var $labelFirst = $('.first');
	var $labelLast = $('.last');
	var $labelAddress = $('.address');

	var $tooltip = $('.tooltip');
	$tooltip.css({
		padding: '5px',
		margin: '10px',
		fontFamily: 'gidoleregular',
		borderRadius: '5px',
		boxShadow: '2px 2px 15px 0px rgba(0,0,0,0.75)',
		backgroundColor: 'rgba(68,96,235,0.5)',
		color: '#4c4c4c',
		display: 'none',
	});
	var $firstnameTooltip = $('.firstnameTooltip');
	var $lastnameTooltip = $('.lastnameTooltip');
	var $addressTooltip = $('.addressTooltip');

	var $input = $('.text');
	$input.css({
		width:  '350px',
    	height: '15px',
    	padding: '5px 10px 5px 10px',
    	border: '1px solid #999',
    	fontSize: '16px',
    	fontFamily: 'Tahoma',
    	borderRadius: '5px',
	});
	var $inputFirstname = $('.textAboutFirst');
	var $inputLastname = $('.textAboutLast');
	var $inputAddress = $('.textAboutAddress');


	var $ourButton = $('button');
	$ourButton.css({
		background: 'linear-gradient(0deg, #7191da ,#9dc2e2)',
		color: '#060505',
		border: 'none',
		borderRadius: '5px',
		fontFamily: 'gidoleregular',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		cursor: 'pointer',
		width: '150px',
		height: '50px',
		margin: '0 auto',
		display: 'block',
		top: '50%',
		transform: 'translateY(50%)',
	});


	
	$ourButton.on('click', function() {
		$tooltip.show();
	});

	$inputFirstname.hover(
		function() {
			$firstnameTooltip.show();
		},
		function() {
			$firstnameTooltip.hide();
		});

	$inputLastname.hover(
		function() {
			$lastnameTooltip.show();
		},
		function() {
			$lastnameTooltip.hide();
		});
		
	$inputAddress.hover(
		function() {
			$addressTooltip.show();
		},
		function() {
			$addressTooltip.hide();
		});

	$labelFirst.on('click', function() {
		$firstnameTooltip.show();
		$lastnameTooltip.hide();
		$addressTooltip.hide();
	});

	$labelLast.on('click', function() {
		$lastnameTooltip.show();
		$firstnameTooltip.hide();
		$addressTooltip.hide();
	});

	$labelAddress.on('click', function() {
		$addressTooltip.show();
		$firstnameTooltip.hide();
		$lastnameTooltip.hide();
	});

});