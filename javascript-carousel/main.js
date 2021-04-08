var $images = document.querySelectorAll('img');
var $leftArrow = document.querySelector('.fa-chevron-left');
var $rightArrow = document.querySelector('.fa-chevron-right');
var $circleContainer = document.querySelector('.circle-container');
var $circle = document.querySelectorAll('.circle');
var intervalId = null;
// intervalId = setInterval(autoSlide, 3000);
// console.log(intervalId);
var counter = 0;

$leftArrow.addEventListener('click', leftArrowClick);
$rightArrow.addEventListener('click', rightArrowClick);
$circleContainer.addEventListener('click', circleContainerClick);

function autoSlide() {
  counter++;
  if (counter >= 5) {
    counter = 0;
  }
  for (var i = 0; $circle.length; i++) {
    if (i === counter) {
      $images[i].className = 'active';
      $circle[i].className = 'fas fa-circle circle';
    } else {
      $images[i].className = 'hidden';
      $circle[i].className = 'far fa-circle circle';
      // console.log($images[i]);
      // console.log($circle[i]);
    }
  }
}

function leftArrowClick(event) {
  clearInterval(intervalId);
  if (!event.target.matches('.fa-chevron-left')) {
    return;
  } else {
    counter--;
  }
  if (counter < 0) {
    counter = 4;
  }
  for (var i = 0; i < $circle.length; i++) {
    if (i === counter) {
      $images[i].className = 'active';
      $circle[i].className = 'fas fa-circle circle';
    } else {
      $circle[i].className = 'far fa-circle circle';
      $images[i].className = 'hidden';
    }
  }
  intervalId = setInterval(autoSlide, 3000);
}

function rightArrowClick(event) {
  clearInterval(intervalId);
  if (!event.target.matches('.fa-chevron-right')) {
    return;
  } else {
    counter++;
  }
  if (counter >= 5) {
    counter = 0;
  }
  for (var i = 0; i < $circle.length; i++) {
    if (i === counter) {
      $images[i].className = 'active';
      $circle[i].className = 'fas fa-circle circle';
    } else {
      $circle[i].className = 'far fa-circle circle';
      $images[i].className = 'hidden';
    }
  }
  intervalId = setInterval(autoSlide, 3000);
}

function circleContainerClick(event) {
  clearInterval(intervalId);
  var targetId = event.target.getAttribute('id');
  counter = Number(targetId);
  for (var i = 0; i < $circle.length; i++) {
    if (i === counter) {
      $images[i].className = 'active';
      $circle[i].className = 'fas fa-circle circle';
    } else {
      $circle[i].className = 'far fa-circle circle';
      $images[i].className = 'hidden';
    }
  }
  intervalId = setInterval(autoSlide, 3000);
}
