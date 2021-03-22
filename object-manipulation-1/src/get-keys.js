/* exported getKeys */
function getKeys(object) {
  var values = [];
  for (var keys in object) {
    values.push(keys);
  }
  return values;
}
