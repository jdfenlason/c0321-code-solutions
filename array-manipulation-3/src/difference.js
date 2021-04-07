/* exported difference */
function difference(first, second) {
  var diffArray = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      diffArray.push(first[i]);
    }
  }
  for (var k = 0; k < second.length; k++) {
    if (!first.includes(second[k])) {
      diffArray.push(second[k]);
    }
  }
  return diffArray;
}
