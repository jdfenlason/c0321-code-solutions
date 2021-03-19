/* exported filterOutNulls */
function filterOutNulls(values) {
  var newArray = [];
  var filter = [];
  for (var i = 0; i < values.length; i++) {
    if (values !== null) {
      newArray += newArray.push(values[i]);
    } else {
      filter += filter.push(values[i]);
    }
  }
  return newArray;
}
