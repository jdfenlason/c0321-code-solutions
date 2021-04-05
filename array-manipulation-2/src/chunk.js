/* exported chunk */
function chunk(array, size) {
  var resArray = [];
  var otherArray = [];
  for (var i = 0; i < array.length; i++) {
    otherArray.push(array[i]);

    if (otherArray.length === size) {
      resArray.push(otherArray);
      otherArray = [];
    }
  }
  if (otherArray.length > 0) {
    resArray.push(otherArray);
  }
  return resArray;
}
