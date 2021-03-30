var $openBtn = document.querySelector('.modalBtn');
var $modal = document.querySelector('.modal');
var $container = document.querySelector('.container');

$openBtn.addEventListener('click', function (e) {
  $modal.classList.toggle('active');
  $openBtn.classList.toggle('inactive');
  $container.classList.toggle('active');
});

var $nobtn = document.querySelector('.nobtn');
$nobtn.addEventListener('click', function (e) {
  $modal.classList.toggle('active');
  $openBtn.classList.toggle('inactive');
  $container.classList.toggle('active');
});
