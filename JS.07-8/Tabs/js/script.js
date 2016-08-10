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
  $('.btn').removeClass('selected');
  $(this).removeClass('btn-warning');
  $(this).addClass('btn-info selected');

  if ($btn1.hasClass('selected')) {
    $($tab1).show();
    $($tab2).hide();
    $($tab3).hide();
  } else if ($btn2.hasClass('selected')) {
    $($tab1).hide();
    $($tab2).show();
    $($tab3).hide();
  } else if ($btn3.hasClass('selected')) {
    $($tab1).hide();
    $($tab2).hide();
    $($tab3).show();
  }

});
