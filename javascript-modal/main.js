var $openBtn = document.querySelector('.modalBtn');
var $modal = document.querySelector('.modal');
var $container = document.querySelector('.container');

$openBtn.addEventListener('click', function event() {
  $container.classList.toggle('active');
  $modal.style.display = 'flex';
  $openBtn.classList.toggle('inactive');
});

var $nobtn = document.querySelector('.nobtn');
$nobtn.addEventListener('click', function e() {
  $modal.style.display = 'none';
  $openBtn.classList.toggle('inactive');
  $container.classList.toggle('active');
});
