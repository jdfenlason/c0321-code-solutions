var x = 3012;
var y = 410;
var z = 123;

var maximumValue = Math.max(x, y, z);

console.log("The maximumValue is: ", maximumValue);

var heroes = ["Spider-man", "Thor", "Iron-man", "Wolverine"];

var randomNumber = Math.random();

randomNumber *= heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log("My random Index is: ", randomIndex);

var randomHero = heroes[randomIndex];

console.log("My random hero is: ", randomHero);

var library = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K Rowling",
  },
  {
    title: "Game of Thrones",
    author: "J.R.R Martin",
  },
];

var lastBook = library.pop();
console.log('The last book is: ', lastBook);

var firstBook = library.shift();
console.log('The first book is: ', firstBook);

var js = {
  title: "JavaScript for Impatient Programmers",
  author: "Dr. Axel Rauschmayer",
};
var css = {
  title: "CSS Secrets",
  author: "Lea Verou",
};

library.push(js);

library.unshift(css);

library.splice([2]);

console.log("The value of library is now: ", library);

var fullName = 'Jake Fenlason';

var firstAndLastName = fullName.split(' ');

console.log('My first and last name is: ', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('Say my name: ', sayMyName)
