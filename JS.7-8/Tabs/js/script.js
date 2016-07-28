var $btn1 = $('.btn-1'),
$btn2 = $('.btn-2'),
$btn3 = $('.btn-3'),
$tab1 = $('.tab-1'),
$tab2 = $('.tab-2'),
$tab3 = $('.tab-3');

$($tab2).hide();
$($tab3).hide();

$('.btn').click(function () {
  $('.btn').addClass('btn-warning');
  $(this).removeClass('btn-warning');
  $(this).addClass('btn-info');
});

// Show first tab
$($btn1).click(function () {
  $($tab1).show();
  $($tab2).hide();
  $($tab3).hide();
});

//show second tab
$($btn2).click(function () {
  $($tab1).hide();
  $($tab2).show();
  $($tab3).hide();
});

//Show third tab
$($btn3).click(function () {
  $($tab1).hide();
  $($tab2).hide();
  $($tab3).show();
});
