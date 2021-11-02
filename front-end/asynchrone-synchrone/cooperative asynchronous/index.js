// timer

function displayTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.getElementById('demo').textContent = time;
}
displayTime();
const createClock = setInterval(displayTime, 1000);
// clearInterval(createClock);


/*--------------------- stopwatch---------------------- */

// Start button to start the stopwatch running

const displayElem = document.getElementById('stopwatch');
let countSeconds = 0;
let stopWatch;

const showTimer = () => {
    let hours = Math.floor(countSeconds / 3600);
    let min = Math.floor((countSeconds % 3600) / 60);
    let secs = Math.floor(countSeconds % 3600);

    let displayHours = (hours < 10) ? '0' + hours : hours;
    let displayMinutes = (min < 10) ? '0' + min : min;
    let displaySeconds = (secs < 10) ? '0' + secs : secs;

    displayElem.textContent = displayHours + ':' + displayMinutes + ':' + displaySeconds;

    countSeconds++
}
const startBtn = document.getElementById('btn-start');
const stopBtn = document.getElementById('btn-stop');
const resetBtn = document.getElementById('btn-reset');

startBtn.addEventListener('click', ()=> {
    stopWatch = setInterval(showTimer, 1000);
    startBtn.disabled = true;
})

stopBtn.addEventListener('click', ()=> {
    clearInterval(stopWatch);
    startBtn.disabled = false;
})

resetBtn.addEventListener('click', ()=> {
    clearInterval(stopWatch);
    startBtn.disabled = false;
    countSeconds = 0;
    showTimer();
})
//Stop button tu pause/stop it
//Reset buton to reset the time back to 0
// The time display to show the number of seconds elapsed, rather than actual time

showTimer()