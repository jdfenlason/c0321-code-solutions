/* exported isPalindromic */
function isPalindromic(string) {
  var stringSplit = string.split(' ').join('');
  var reversedString = stringSplit.split('').reverse().join('');
  return (stringSplit === reversedString);
}
