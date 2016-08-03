var time = 0;
var running = 0;

function start() {
	if (running == 0) {
		running = 1;
		increase();
		document.getElementById('start').innerHTML = 'Pause';

	} else {
		running = 0;
		document.getElementById('start').innerHTML = 'Continue';
	}
}

function reset() {
	running = 0;
	time = 0;
	document.getElementById('start').innerHTML = 'Start';
	document.getElementById('output').innerHTML = '00:00:00';
	document.getElementById('outputMili').innerHTML = '000';
}

function increase() {
	if (running == 1) {
		setTimeout(function() {
			time++;
			var seconds = Math.floor(time/100 % 60);
			var minutes = Math.floor(time/100/60);
			var hours = Math.floor(time/100/60/60);
			var miliseconds = time % 100;

			if(seconds < 10) {
				seconds = '0' + seconds;
			}
			if(minutes < 10) {
				minutes = '0' + minutes;
			}
			if(hours < 10) {
				hours = '0' + hours;
			}
			document.getElementById('output').innerHTML = hours + ':' + minutes + ':' + seconds;
			document.getElementById('outputMili').innerHTML = miliseconds + '0';
			increase();

		}, 10)
	}
}