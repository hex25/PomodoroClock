let timerValue = 1500;

document.getElementById('time-left').innerHTML = timeFormat(timerValue);

document.getElementById('reset').onclick = function() {
    stopTimer();
    document.getElementById('break-length').innerHTML = 5;
    document.getElementById('session-length').innerHTML = 25;
    timerValue = 1500;
    document.getElementById('time-left').innerHTML = timeFormat(timerValue);

  }
  document.getElementById('break-decrement').onclick = function() {
    
    if (parseInt(document.getElementById('break-length').innerHTML) > 1) {
  
    document.getElementById('break-length').innerHTML = parseInt(document.getElementById('break-length').innerHTML) - 1;
    }
  }
  document.getElementById('break-increment').onclick = function() {
    if (parseInt(document.getElementById('break-length').innerHTML) < 60) {
    document.getElementById('break-length').innerHTML = parseInt(document.getElementById('break-length').innerHTML) + 1;
    }
  }
  document.getElementById('session-decrement').onclick = function() {
    if (parseInt(document.getElementById('session-length').innerHTML) > 1) {
    document.getElementById('session-length').innerHTML = parseInt(document.getElementById('session-length').innerHTML) - 1;
    }
  }
  document.getElementById('session-increment').onclick = function() {
    if (parseInt(document.getElementById('session-length').innerHTML) < 60) {
    document.getElementById('session-length').innerHTML = parseInt(document.getElementById('session-length').innerHTML) + 1;
  }
  }
    
  function timeFormat(time) {
    let minutes =  Math.floor(time/60);
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }   
    let seconds = time%60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`
 }   


let startTimer;

function stopTimer() {
    clearInterval(startTimer);
}

function countDown() {
    if (timerValue > 0) { 
  timerValue -= 1;
  document.getElementById('time-left').innerHTML = timeFormat(timerValue);
    }
}

let isClicked = false;

document.getElementById('start_stop').onclick = function() {
    if (isClicked === false) {
        startTimer = setInterval(countDown, 1000);
        document.getElementById('play-icon').src = './pause.png';
        document.getElementById('play-icon').style.width = '90%';
        isClicked = true;
    } else {
        stopTimer();
        document.getElementById('play-icon').src = './play.png';
        document.getElementById('play-icon').style.width = '100%';
        isClicked = false;
    }
    
  }

