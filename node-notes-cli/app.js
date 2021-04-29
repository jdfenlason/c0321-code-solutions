const fs = require('fs');
const data = require('./data.json');
const argV = process.argv;

if (argV[2] === 'read') {
  for (const key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
} else if (argV[2] === 'create') {
  data.notes[data.nextId] = argV[3];
  data.nextId++;
} else if (argV[2] === 'delete') {
  delete data.notes[argV[3]];
} else if (argV[2] === 'update') {
  data.notes[argV[3]] = argV[4];
} else console.log('Not a valid entry');

const writeData = JSON.stringify(data, null, 2);
fs.writeFile('data.json', writeData, err => {
  if (err) throw err;
});
