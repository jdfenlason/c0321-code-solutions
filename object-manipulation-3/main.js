console.log('Lodash is loaded:', typeof _ !== 'undefined');
function Player(name) {
  this.name = name;
  this.playerHand = [];
}
function Deck() {
  this.cards = [];
}

Deck.prototype.createDeck = function (suits, ranks) {
  suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var value = [];
  for (var i = 0; i < suits.length; i++) {
    for (var k = 0; k < ranks.length; k++) {
      if (ranks[k] === 'ace') {
        value.push(11);
      } else if (_.isString(ranks[k])) {
        value.push(10);
      } else {
        value.push(ranks[k]);
      }
      this.cards.push((suits[i], ranks[k], value[k]));
    }
  }
};

Deck.prototype.deal = function (cardsPerHand) {
  var deckHands = [];
  while (deckHands.length < cardsPerHand) {
    var shuffled = _.shuffle(this.cards);
    deckHands.push(shuffled.pop(cardsPerHand));
  }
  return deckHands;
};

// var deck = new Deck();
// deck.createDeck();
// console.log(deck.deal(4));

var gamePlayers = [
  new Player('Odin'),
  new Player('Thor'),
  new Player('Loki'),
  new Player('Balder')
];

function gameHandler(playersArray, cardsPerHand) {
  var deck = new Deck();
  deck.createDeck();
  var score = [];
  var counter = 0;
  for (var i = 0; i < playersArray.length; i++) {

    playersArray[i].playerHand = (deck.deal(cardsPerHand));
    counter = playersArray[i].playerHand.reduce(function (a, b) {
      return a + b;
    });
    score.push(counter);
  }
  console.log(playersArray);
  return playersArray[indexOfMax(score)].name;
}

function indexOfMax(array) {
  var max = array[0];
  var maxIndex = 0;
  for (var i = 1; i < array.length; i++) {
    if (array[i] > max) {
      maxIndex = i;
      max = array[i];
    }
  }
  return maxIndex;
}
console.log(
  'Winner Winner Chicken Dinner,',
  gameHandler(gamePlayers, 5) + '!'
);
