/* exported findIndex */
function findIndex(array, value) {
  var filter = [];
  var notValue = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      filter.push([i]);
      return filter[0];
    }
  }
  if (array[i] !== value) {
    notValue.push(array[i]);
  }
  return -1;
}
