console.log('Lodash is loaded:', typeof _ !== 'undefined');

// var players = [
//   {
//     name: 'Balder',
//     hand: []
//   },
//   {
//     name: 'Thor',
//     hand: []
//   },

//   {
//     name: 'Odin',
//     hand: []
//   },

//   {
//     name: 'Loki',
//     hand: []
//   }
// ];

// var cards = {
//   rank: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'king', 'queen', 'ace'],
//   suit: ['clubs', 'diamonds', 'hearts', 'spades']
// };

// function shuffleDeck() {
//   var cardDeck = [];
//   for (var i = 0; i < cards.suit.length; i++) {
//     for (var x = 0; x < cards.rank.length; x++) {
//       var shuffleCards = {};
//       shuffleCards.rank = cards.rank[x];
//       shuffleCards.suit = cards.suit[i];
//       cardDeck.push(shuffleCards);
//     }
//   }
//   var shuffledDeck = _.shuffle(cardDeck);
//   return shuffledDeck;
// }

// function deal(playersArray, cardsPerHand, deck) {
//   var hands = _.chunk(deck, cardsPerHand);
//   for (var i = 0; i < playersArray.length; i++) {
//     playersArray[i].hand = hands.shift();
//   }
// }

// function handValues(playersArray, handSize) {
//   for (var i = 0; i < playersArray.length; i++) {
//     var cardValue = 0;
//     for (var x = 0; x < handSize; x++) {
//       if (playersArray[i].hand[x].rank === 'ace') {
//         cardValue += 11;
//       } else if (_.isString(playersArray[i].hand[x].rank)) {
//         cardValue += 10;
//       } else {
//         cardValue += playersArray[i].hand[x].rank;
//       }
//       playersArray[i].value = cardValue;
//     }
//   }
// }
