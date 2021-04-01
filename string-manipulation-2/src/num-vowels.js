/* exported numVowels */
function numVowels(string) {
  var vCount = 0;
  for (var i = 0; i < string.length; i++) {
    var capLetter = string[i].toLowerCase();
    if (capLetter === 'a' ||
    capLetter === 'e' ||
    capLetter === 'i' ||
    capLetter === 'o' ||
    capLetter === 'u') {

      vCount++;
    }
  }
  return vCount;
}
