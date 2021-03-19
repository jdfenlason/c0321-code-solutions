/* exported filterOutNulls */
function filterOutNulls(values) {
  var newArr = [];
  var filter = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      newArr.push(values[i]);
    } else {
      filter.push(values[i]);
    }
  }
  return newArr;
}
