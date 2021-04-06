/* exported numVowels */
function numVowels(string) {
  var vCount = 0;
  for (var i = 0; i < string.length; i++) {
    var vowel = string[i].toLowerCase();
    if (vowel === 'a' ||
    vowel === 'e' ||
    vowel === 'i' ||
    vowel === 'o' ||
    vowel === 'u') {

      vCount++;
    }
  }
  return vCount;
}
