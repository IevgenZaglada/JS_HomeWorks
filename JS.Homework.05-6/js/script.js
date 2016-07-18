start.addEventListener('click', timer_start);
stp.addEventListener('click', timer_stop);

var count = 0,
  go = 0,
  switcher = 0,
  timerId;

function timer_start() {
  if (switcher === 0) {
    if (go === 0) {
      timerId = setInterval(function () {
        count++;
        var msek = count % 100;
        var sek = Math.floor(count / 100) % 60;
        var min = Math.floor(count / 6000) % 60;
        var hours = Math.floor(count / 360000) % 24;
        start.innerHTML = 'Start';
        start.className = 'button-success pure-button button-foo-start';
        ms.innerHTML = msek;
        s.innerHTML = sek;
        m.innerHTML = min;
        h.innerHTML = hours;
      }, 1);
      go = 1;
      switcher = 1;
    }
  } else if (switcher === 1) {
    clearInterval(timerId);
    go = 0;
    switcher = 0;
    start.className = 'button-success pure-button button-foo-pause';
    start.innerHTML = 'Pause';
  }
}

function timer_stop() {
  clearInterval(timerId);
  go = 0;
  count = 0;
  switcher = 0;
  ms.innerHTML = 0;
  s.innerHTML = 0;
  m.innerHTML = 0;
  h.innerHTML = 0;
}
