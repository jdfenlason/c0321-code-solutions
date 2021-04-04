/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var string1 = firstString.split('');
  var string2 = secondString.split('');
  string1.sort();
  string2.sort();
  var newString1 = '';
  var newString2 = '';
  for (var i = 0; i < string1.length; i++) {
    if (string1[i] !== ' ') {
      newString1 += string1[i];
    }
  }
  for (var k = 0; k < string2.length; k++) {
    if (string2[k] !== ' ') {
      newString2 += string2[k];
    }
  }
  return newString1 === newString2;
}
