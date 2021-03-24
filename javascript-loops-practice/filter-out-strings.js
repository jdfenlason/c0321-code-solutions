/* exported filterOutStrings */
function filterOutStrings(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'string') {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
