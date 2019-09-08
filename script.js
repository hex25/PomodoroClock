document.getElementById('reset').onclick = function() {
    document.getElementById('break-length').innerHTML = 5;
    document.getElementById('session-length').innerHTML = 25;
    // and a timer should stop
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