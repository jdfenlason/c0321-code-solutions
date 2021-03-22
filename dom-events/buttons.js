function handleclick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target', event.target);
}

var $click = document.querySelector('.click-button');

$click.addEventListener('click', handleclick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event', event);
  console.log('event.target', event.target);
}

var $hoverBtn = document.querySelector('.hover-button');

$hoverBtn.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}

var $doubleClickBtn = document.querySelector('.double-click-button');

$doubleClickBtn.addEventListener('dblclick', handleDoubleClick);
