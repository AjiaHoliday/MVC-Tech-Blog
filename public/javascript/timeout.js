async function logout() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
});

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }

}
// logout timer
function showWarning() {
    console.log('should be showing warning');
  var warning = document.getElementById('timeoutWarning');
  warning.classList.add("is-active");
}

var timoutWarning = 14*60*1000; // Display warning in 14 Mins.
var timoutNow = 60+1000; // Warning has been shown, give the user 1 minute to interact

var warningTimer;
var timeoutTimer;

// Start warning timer.
function StartWarningTimer() {
    warningTimer = setTimeout(IdleWarning, timoutWarning);
}

// Reset timers.
function ResetTimeOutTimer() {
    clearTimeout(timeoutTimer);
    StartWarningTimer();
}

// Show idle timeout warning dialog.
function IdleWarning() {
    clearTimeout(warningTimer);
    timeoutTimer = setTimeout(logout, timoutNow);
    showWarning();
}

function activityTracker () {
  window.onmousemove = ResetTimeOutTimer; // catches mouse movements
  window.onmousedown = ResetTimeOutTimer; // catches mouse movements
  window.onclick = ResetTimeOutTimer;     // catches mouse clicks
  window.onscroll = ResetTimeOutTimer;    // catches scrolling
  window.onkeypress = ResetTimeOutTimer;  //catches keyboard actions
}

// close modal & restart timer
function hideWarning() {
  var warning = document.getElementById('timeoutWarning');
  warning.classList.remove("is-active");
  ResetTimeOutTimer();
}

document.querySelector(".modal-close").addEventListener('click', hideWarning);
document.querySelector(".modal-background").addEventListener('click', hideWarning);

StartWarningTimer();
