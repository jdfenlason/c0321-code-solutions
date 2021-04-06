/* exported capitalizeWords */
function capitalizeWords(string) {
  var words = string.split(' ');
  var capWords = [];
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].toLowerCase();
    capWords.push(words[i][0].toUpperCase() + words[i].slice(1));
  }
  return capWords.join(' ');
}
