var amntClicks = 0;

var $btn = document.querySelector('.hot-button');
var $clicks = document.querySelector('.click-count');

$btn.addEventListener('click', function () {
  amntClicks++;

  $clicks.textContent = 'Clicks: ' + amntClicks;
  if (amntClicks < 4) {
    $btn = $btn.class.name('.hot-button.cold');
  }
  if (amntClicks < 7) {
    $btn = $btn.className('.hot-button.cool');
  }
  if (amntClicks < 10) {
    $btn = $btn.className = '.hot-button tempid';
  }
  if (amntClicks < 13) {
    $btn = $btn.className = '.hot-button.warm';
  }
  if (amntClicks < 16) {
    $btn = $btn.className = '.hot-button.hot';
  } else {
    $btn = $btn.className = '.hot-button.nuclear';
  }
});
