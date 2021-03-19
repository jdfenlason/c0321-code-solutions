/* exported filterOutStrings */
function filterOutStrings(array) {
  var newArr = [];
  var filter = [];
  for (var i = 0; i < array.length; i++) {
    if ((array[i] === '') === true) {
      filter.push(array[i]);
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
