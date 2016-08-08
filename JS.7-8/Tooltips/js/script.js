var $trigger = $(".trigger"),
  $hov1 = $(".hover-1"),
  $hov2 = $(".hover-2"),
  $hov3 = $(".hover-3"),
  $tip1 = $(".tooltip-1"),
  $tip2 = $(".tooltip-2"),
  $tip3 = $(".tooltip-3");

$($trigger).hover(function () {
  if ($(this).next().hasClass('activetip')){
    // $(this).next().removeClass('activetip');
    console.log('yes');
  } else {
  $(this).next().toggleClass('activetip');
}
});


$(".btn").click(function () {
  $(".tip").addClass("activetip");
});
