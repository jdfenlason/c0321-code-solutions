/* exported omit */
function omit(source, keys) {
  var omitedObject = {};
  for (var key in source) {
    if (!keys.includes(key)) {
      omitedObject[key] = source[key];
    }
  }
  return omitedObject;
}
