/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var string1 = firstString.split('').sort().join('').trim();
  var string2 = secondString.split('').sort().join('').trim();
  return (string1 === string2);
}
