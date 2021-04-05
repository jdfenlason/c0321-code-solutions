/* exported invert */
function invert(source) {
  var invertObject = {};
  for (var key in source) {
    invertObject[source[key]] = key;
  }
  return invertObject;
}
