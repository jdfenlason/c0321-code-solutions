var $openBtn = document.querySelector('button');
var $modal = document.querySelector('.modal');
var $container = document.getElementsByClassName('.container');

$openBtn.addEventListener('click', function event() {
  if ($openBtn.clickevent() === true) {
    $container.classList.toggle('on');
    $modal.style.display = 'flex';
  }
});

var $nobtn = document.querySelector('.nobtn');

$nobtn.addEventListener('click', function e() {
  $modal.style.display = 'none';
  $container.classList.toggle('off');
});
