/* exported filterOutStrings */
function filterOutStrings(array) {
  var newArr = [];
  var filter = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'string') {
      newArr.push(array[i]);
    } else {
      filter.push(array[i]);
    }
  }
  return newArr;
}
