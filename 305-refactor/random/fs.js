const fs = require('fs');

// Read the contents of the file
fs.readFile('laws.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  // Print the contents of the file
  console.log(data);
});
