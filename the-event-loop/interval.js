let counter = 3;
const countDown = setInterval(() => {
  if (counter > 0) {
    console.log(counter);
    counter--;
  } else {
    console.log('Blast Off!');
    clearInterval(countDown);
  }
}, 1000);
