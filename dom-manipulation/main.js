var amntClicks = 0;

var $btn = document.querySelector('.hot-button');
var $clicks = document.querySelector('.click-count');

$btn.addEventListener('click', function () {
  amntClicks++;

  $clicks.textContent = 'Clicks: ' + amntClicks;
  if (amntClicks < 4) {
    $btn.className = 'cold';
  }
  if (amntClicks < 7) {
    $btn.className = 'cool';
  }
  if (amntClicks < 10) {
    $btn.className = 'tepid';
  }
  if (amntClicks < 13) {
    $btn.className = 'warm';
  }
  if (amntClicks < 16) {
    $btn.className = '.hot';
  } else {
    $btn.className = '.hot-button.nuclear';
  }
});
