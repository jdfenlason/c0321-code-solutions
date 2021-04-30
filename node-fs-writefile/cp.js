const fs = require('fs');
const read = process.argv[2];
const write = process.argv[3];

fs.readFile(read, 'utf8', (readErr, data) => {
  if (readErr) throw readErr;
  fs.writeFile(write, data, 'utf8', writeErr => {
    if (writeErr) throw writeErr;
  });
});
