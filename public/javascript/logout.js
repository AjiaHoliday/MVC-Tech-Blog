async function logout() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}
// logout timer


var warningTimeout = 15000;
var timeoutNow = 10000;
var warningTimerID, timeoutTimerID

function startTimer() {
  warningTimerID = window.setTimeout(warningInactive, warningTimeout);
}

window.onmousemove = resetTimer; // catches mouse movements
window.onmousedown = resetTimer; // catches mouse movements
window.onclick = resetTimer;     // catches mouse clicks
window.onscroll = resetTimer;    // catches scrolling
window.onkeypress = resetTimer;  //catches keyboard actions

function warningInactive() {
  window.clearTimeout(warningTimerID);
  timeoutTimerID = window.setTimeout(logout, timeoutNow);
  $(".modal").addClass("is-active");
}

function resetTimer() {
    window.clearTimeout(timeoutTimerID); 
    window.clearTimeout(warningTimerID);
    startTimer(); 
}

// close modal & restart timer
$(".modal-close").click(function() {
  $(".modal").removeClass("is-active")
  resetTimer();
});

$("#warningBtn").click(function() {
  $('.modal').removeClass("is-active")
  resetTimer();
});

startTimer()

document.querySelector('#logout').addEventListener('click', logout);