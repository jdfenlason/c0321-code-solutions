var amntClicks = 0;

var $hotBtn = document.querySelector('.hot-button');
var $clickCounter = document.querySelector('.click-count');

$hotBtn.addEventListener('click', function (e) {
  amntClicks++;
  var tempChange;
  $clickCounter.textContent = 'Clicks: ' + amntClicks;
  if (amntClicks < 4) {
    tempChange = 'cold';
  } else if (amntClicks < 7) {
    tempChange = 'cool';
  } else if (amntClicks < 10) {
    tempChange = 'tempid';
  } else if (amntClicks < 13) {
    tempChange = 'warm';
  } else if (amntClicks < 16) {
    tempChange = 'hot';
  } else {
    tempChange = 'nuclear';
  }
  $hotBtn.className = 'hot-button ' + tempChange;
});
