var $text = document.querySelectorAll('span');
var index = 0;

document.addEventListener('keydown', function (event) {
  if (index < $text.length) {
    if ($text[index].textContent === event.key) {
      $text[index].className = 'spanText correct';

      index++;
      if (index < $text.length) {
        $text[index].className = 'spanText current';
      }
    } else {
      $text[index].className = 'spanText incorrect';
    }
  }
});
