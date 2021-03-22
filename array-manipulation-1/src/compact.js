/* exported compact */
function compact(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

// null, undefined, NaN, 0 -0, undefined,'',
