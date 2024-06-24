let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let lapBtn = document.getElementById('lap'); // Add a button for lap time

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let lapStartTime = 0; // Variable to store lap start time

startBtn.addEventListener('click', function () {
	timer = true;
	lapStartTime = Date.now(); // Record the start time for the first lap
	stopWatch();
});

stopBtn.addEventListener('click', function () {
	timer = false;
});

resetBtn.addEventListener('click', function () {
	timer = false;
	hour = 0;
	minute = 0;
	second = 0;
	count = 0;
	document.getElementById('hr').innerHTML = "00";
	document.getElementById('min').innerHTML = "00";
	document.getElementById('sec').innerHTML = "00";
	document.getElementById('count').innerHTML = "00";
});

lapBtn.addEventListener('click', function () {
	if (timer) {
		const currentTime = Date.now();
		const lapTime = currentTime - lapStartTime;
		const lapMinutes = Math.floor(lapTime / 60000);
		const lapSeconds = Math.floor((lapTime % 60000) / 1000);
		const lapMilliseconds = lapTime % 1000;

		// Display lap time
		document.getElementById('lapTime').innerHTML = `${lapMinutes}:${lapSeconds}.${lapMilliseconds}`;
		lapStartTime = currentTime; // Update lap start time for the next lap
	}
});

function stopWatch() {
	if (timer) {
		count++;

		if (count == 100) {
			second++;
			count = 0;
		}

		if (second == 60) {
			minute++;
			second = 0;
		}

		if (minute == 60) {
			hour++;
			minute = 0;
			second = 0;
		}

		let hrString = hour < 10 ? "0" + hour : hour;
		let minString = minute < 10 ? "0" + minute : minute;
		let secString = second < 10 ? "0" + second : second;
		let countString = count < 10 ? "0" + count : count;

		document.getElementById('hr').innerHTML = hrString;
		document.getElementById('min').innerHTML = minString;
		document.getElementById('sec').innerHTML = secString;
		document.getElementById('count').innerHTML = countString;

		setTimeout(stopWatch, 10);
	}
}

