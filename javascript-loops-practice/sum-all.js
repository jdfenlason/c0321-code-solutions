/* exported sumAll */
function sumAll(number) {
  var arr = 0;
  for (var i = 0; i < number.length; i++) {
    arr += number[i];
  }
  return arr;
}
