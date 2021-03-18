/* exported countdown */
function countdown(number) {
  var myArr = [];
  while (number >= 0) {
    myArr.push(number);
    number--;
  }
  return myArr;
}
