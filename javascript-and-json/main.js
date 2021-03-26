var myArr = [
  {
    isbn: '121551-85858',
    title: 'Harry Potter and the Order of Pheonix',
    Author: 'J.K Rowling'
  },
  {
    isbn: '121551-87787',
    title: 'Harry Potter and Deathly Hallows',
    Author: 'J.K Rowling'
  },
  {
    isbn: '121551-585858',
    title: 'Harry Potter and the Half-Blood Prince',
    Author: 'J.K Rowling'
  }
];

console.log('My array of books: ', myArr);
console.log('Type of myArray ', typeof myArr);

console.log('   JSON string of book array: ', JSON.stringify(myArr));
console.log('Type of JSON string: ', typeof JSON.stringify(myArr));

console.log('String in JSON FORM with single quotes ', '{ "name":"John", "id": 37883}');
console.log('Student typeof ', typeof '{ "name":"John", "id": 37883}');

console.log('JSON.Parse: ', JSON.parse('{ "name":"John", "id": 37883}'));
