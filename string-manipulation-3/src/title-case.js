/* exported titleCase */

function titleCase(string) {
  var titleWords = [
    'and',
    'or',
    'nor',
    'but',
    'a',
    'an',
    'the',
    'as',
    'at',
    'by',
    'for',
    'in',
    'of',
    'on',
    'per',
    'to'
  ];
  var newString = '';
  var titleArray = string.split(' ');
  var hasColon = true;
  for (var i = 0; i < titleArray.length; i++) {
    var word = titleArray[i].toLowerCase();
    if (word.includes('-')) {
      var words = word.split('-');
      var firstWord = words[0][0].toUpperCase() + words[0].slice(1);
      var secondWord = words[1][0].toUpperCase() + words[1].slice(1);
      word = firstWord + '-' + secondWord;
    } else if (word.includes('javascript')) {
      word = word.replace('javascript', 'JavaScript');
    } else if (word.includes('api')) {
      word = word.replace('api', 'API');
    } else if (!titleWords.includes(word) || i === 0 || hasColon) {
      word = word[0].toUpperCase() + word.slice(1);
    }
    newString += word + ' ';
    hasColon = false;
    if (word.includes(':')) {
      hasColon = true;
    }
  }
  return newString.slice(0, newString.length - 1);
}
