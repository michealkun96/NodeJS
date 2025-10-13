const fs = require('node:fs');

fs.rename('Tên rất xấu.txt', 'Ten-rat-xau.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});