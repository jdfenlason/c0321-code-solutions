/* exported pick */
function pick(source, keys) {
  var pickObj = {};
  for (var key in source) {
    if (keys.includes(key) && source[key] !== undefined) {
      pickObj[key] = source[key];
    }
  }
  return pickObj;
}
