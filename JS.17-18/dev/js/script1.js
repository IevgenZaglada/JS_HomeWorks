// var start = document.getElementById('start');
var stp = document.getElementById('stp');
var ms = document.getElementById("ms");
var s = document.getElementById("s");
var min = document.getElementById("m");
var hours = document.getElementById("h");

start.addEventListener('click', timer_start);
stp.addEventListener('click', timer_stop);

var count = 0,
  go = 0,
  timerId;
