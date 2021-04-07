var heading = document.querySelector('h1');
var timerId = setInterval(countDown, 1000);

function countDown() {
  var number = heading.textContent;
  if (number > 1) {
    number--;
    heading.textContent = number;
  } else {
    heading.textContent = '~Earth Beeeeloooowww Us ~';
    clearInterval(timerId);
  }
}
