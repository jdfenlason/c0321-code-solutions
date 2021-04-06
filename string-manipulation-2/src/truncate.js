/* exported truncate */
function truncate(length, string) {
  string = string.substr(0, length);
  return string + '...';
}
