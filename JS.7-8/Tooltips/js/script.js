$('.hover-1').hover(function () {
  $('.tooltip-1').toggleClass('activetip');
});

$('.hover-2').hover(function () {
  $('.tooltip-2').toggleClass('activetip');
});

$('.hover-3').hover(function () {
  $('.tooltip-3').toggleClass('activetip');
});

$('.btn').click(function () {
  $('.tip').toggleClass('activetip');
});


// $( "#clickme" ).click(function() {
//   $( "#book" ).animate({
//     opacity: 0.25,
//     left: "+=50",
//     height: "toggle"
//   }, 5000, function() {
//     // Animation complete.
//   });
// });
