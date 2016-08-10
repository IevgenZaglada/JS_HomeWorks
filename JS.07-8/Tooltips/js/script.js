var $trigger = $(".trigger");

$($trigger).hover(function () {
  $(this).next().addClass('activetip');
}, function () {
  $(this).next().removeClass('activetip');
});

$(".btn").click(function () {
  $(".tip").addClass("activetip");
});
