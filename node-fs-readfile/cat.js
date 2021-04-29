const fs = require('fs');

const files = process.argv.slice(2);

const readAllFiles = indexCounter => {
  if (indexCounter === files.length) {
    return;
  }
  fs.readFile(files[indexCounter], 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    readAllFiles(indexCounter + 1);
  });
};

readAllFiles(0);
