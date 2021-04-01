/* exported ransomCase */
function ransomCase(string) {
  var ranString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ranString += string[i].toLowerCase();

      return ranString;
    }
  }
}
