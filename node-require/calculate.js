const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const firstNum = Number(process.argv[2]);
const secondNum = Number(process.argv[4]);
const operator = process.argv[3];

if (operator === 'plus') {
  console.log('return:', add(firstNum, secondNum));
} else if (operator === 'minus') {
  console.log('return:', subtract(firstNum, secondNum));
} else if (operator === 'times') {
  console.log('return:', multiply(firstNum, secondNum));
} else if (operator === 'over') {
  console.log('return:', divide(firstNum, secondNum));
}
