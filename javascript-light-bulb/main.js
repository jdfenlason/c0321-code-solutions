var $btn = document.querySelector('button');

$btn.addEventListener('click', function (e) {
  var $body = document.querySelector('body');
  $btn.classList.toggle('off');
  $body.classList.toggle('off');
});
