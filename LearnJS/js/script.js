start.addEventListener('click', start_click);
pause.addEventListener('click', pause_click);
stp.addEventListener('click', stp_click);

var obj = {
  s: 'start',
  p: 'pause',
  st: 'stop'
};

var count = 0,
  timerIdб, go = 0;

function start_click() {
  for_text.innerHTML = 'start_click';
  if (go === 0) {
    timerId = setInterval(function () {
      count++;
      var msek = count%1000;
      var secs = Math.floor(count/1000)%60;
      var mins = Math.floor(count/60000)%60;
      var hours = Math.floor(count/3600000)%24;
      var str = hours + ':' + mins + ':' + secs + ':' + msek + ':';
      for_count.innerHTML = str;
    }, 1);
    go = 1;
  }
}

function pause_click() {
  clearInterval(timerId);
  go = 0;
  for_text.innerHTML = 'pause_click';
}

function stp_click() {
  clearInterval(timerId);
  go = 0;
  count = 0;
  for_count.innerHTML= count;
  for_text.innerHTML = 'stp_click';
}
