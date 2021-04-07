/* exported isPalindromic */
function isPalindromic(string) {
  var stringSplit = string.split(' ').join('');
  var reversedString = string.split('').reverse().join('').split(' ').join('');
  if (stringSplit === reversedString) {
    return true;
  }
  return false;
}
