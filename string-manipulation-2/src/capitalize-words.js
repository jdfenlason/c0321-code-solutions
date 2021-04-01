/* exported capitalizeWords */
function capitalizeWords(string) {
  var words = string.split(' ');
  var capWords = '';
  for (var i = 0; i < words.length; i++) {
    capWords += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase() + ' ';
  }
  return capWords.slice(0, capWords.length - 1);
}
