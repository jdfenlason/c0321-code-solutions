const fs = require('fs');
const file = process.argv[2];

fs.writeFile('note.txt', file + '\n', 'utf8', err => {
  if (err) throw err;
});
