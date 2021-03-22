/* exported getWords */
function getWords(string) {
  var array = [];
  var newStr = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      newStr += string[i];
    }
    if (string[i] === ' ' || i === string.length - 1) {
      array.push(newStr);
      newStr = '';
    }
  }
  return array;
}
