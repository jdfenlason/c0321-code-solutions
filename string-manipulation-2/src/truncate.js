/* exported truncate */
function truncate(length, string) {
  for (var i = 0; i < string.length; i++) {
    string = string.substr(0, length);
  }
  return string + '...';
}
