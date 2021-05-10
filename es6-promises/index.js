const takeAChance = require('./take-a-chance');

const name = takeAChance('Jake');
name.then(resolve => {
  console.log(resolve);
});
name.catch(reject => {
  console.log(reject.message);
});
