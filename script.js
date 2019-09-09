let timerValue = 1500;

let breakValue = 300;

document.getElementById('time-left').innerHTML = timeFormat(timerValue);

document.getElementById('reset').onclick = function() { resetTimer() };

document.getElementById('break-decrement').onclick = function () {

    if (parseInt(document.getElementById('break-length').innerHTML) > 1) {

        document.getElementById('break-length').innerHTML = parseInt(document.getElementById('break-length').innerHTML) - 1;
        breakValue -= 60;
    }
}
document.getElementById('break-increment').onclick = function () {
    if (parseInt(document.getElementById('break-length').innerHTML) < 60) {
        document.getElementById('break-length').innerHTML = parseInt(document.getElementById('break-length').innerHTML) + 1;
        breakValue += 60;
    }
}
document.getElementById('session-decrement').onclick = function () {
    if (parseInt(document.getElementById('session-length').innerHTML) > 1) {
        document.getElementById('session-length').innerHTML = parseInt(document.getElementById('session-length').innerHTML) - 1;
        timerValue -= 60;
        document.getElementById('time-left').innerHTML = timeFormat(timerValue);
    }
}
document.getElementById('session-increment').onclick = function () {
    if (parseInt(document.getElementById('session-length').innerHTML) < 60) {
        document.getElementById('session-length').innerHTML = parseInt(document.getElementById('session-length').innerHTML) + 1;
        timerValue += 60;
        document.getElementById('time-left').innerHTML = timeFormat(timerValue);

    }
}

function timeFormat(time) {
    let minutes = Math.floor(time / 60);
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let seconds = time % 60;
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`
}

function resetTimer() {
    stopTimer();
    document.getElementById('beep').load();
    document.getElementById('break-length').innerHTML = 5;
    document.getElementById('session-length').innerHTML = 25;
    timerValue = 1500;
    breakValue = 300;
    document.getElementById('time-left').innerHTML = timeFormat(timerValue);
    document.getElementById('timer-label').innerHTML = 'Session';
}

function initiateSession() {

    timerValue = document.getElementById('session-length').innerHTML * 60;
    breakValue = document.getElementById('break-length').innerHTML * 60;
    document.getElementById('time-left').innerHTML = timeFormat(timerValue);
}


let startTimer;

function stopTimer() {
    clearInterval(startTimer);
    startTimer = undefined;
}
function sessionCountDown() {
    timerValue -= 1;
    document.getElementById('time-left').innerHTML = timeFormat(timerValue);
    document.getElementById('timer-label').innerHTML = 'Session';
    if (timerValue === 0) {
        document.getElementById('beep').play();
    }
}

function breakCountDown() {
    breakValue -= 1;
    document.getElementById('time-left').innerHTML = timeFormat(breakValue);
    document.getElementById('timer-label').innerHTML = 'Break';
    if (breakValue === 0) {
        document.getElementById('beep').play();
    }
}

function countDown() {
    if (timerValue > 0) {
        document.getElementById('time-left').innerHTML = timeFormat(timerValue);
        sessionCountDown();
    } else {
        if (breakValue > 0) {
            document.getElementById('time-left').innerHTML = timeFormat(breakValue);
            breakCountDown();
        } else {
            initiateSession();
            sessionCountDown();
        }
    }
}

document.getElementById('start_stop').onclick = function() {
    if (!startTimer) {
        startTimer = setInterval(countDown, 1000);
        document.getElementById('play-icon').src = './pause.png';
        document.getElementById('play-icon').style.width = '90%';
    } else {
        stopTimer();
        document.getElementById('play-icon').src = './play.png';
        document.getElementById('play-icon').style.width = '100%';
    }
}


document.getElementById('tomato').onclick = function() {
    document.getElementById('stylesheet').href = './style-tomato.css';
}
document.getElementById('beach').onclick = function() {
    document.getElementById('stylesheet').href = './style-beach.css';
}
document.getElementById('city').onclick = function() {

    document.getElementById('stylesheet').href = './style-city.css';
}
