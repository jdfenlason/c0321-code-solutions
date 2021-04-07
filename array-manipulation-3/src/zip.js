/* exported zip */
function zip(first, second) {
  var newArr = [];
  if (first.length <= second.length) {
    for (var i = 0; i < first.length; i++) {
      newArr.push([first[i], second[i]]);
    }
  } else {
    for (var k = 0; k < second.length; k++) {
      newArr.push([first[k], second[k]]);
    }
  }
  return newArr;
}
