const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log('Even Numbers:', evenNumbers);

const overFive = numbers.filter(number => number > 5);
console.log('Numbers that are over 5:', overFive);

const startWithE = names.filter(words => words.startsWith('E'));
console.log('Names that start with E:', startWithE);

const haveD = names.filter(words => words.includes('d' || 'D'));
console.log('Names that have a D:', haveD);
