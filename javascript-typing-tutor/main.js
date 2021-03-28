var $text = document.querySelectorAll('span');
var index = 0;

window.addEventListener('keydown', function (event) {

  var $currentChar = $text.item(index).textContent;

  if ($currentChar === event.key) {
    $text.item(index).className = 'spanText correct';

    index++;
    $text.item(index).className = 'spanText current';

  } else {
    $text.item(index).className = 'spanText incorrect';

  }

});
