let fs = require('fs');
let path = require('path');

module.exports = () => {
  const printDirectoryFiles = () => {
    let fs = require('fs');
    // read the specified directory and print each item
    fs.readdir('node_modules/.bin', function(err, items) {
      console.log(items);
    });
  };
};
//require the filesystem library from node
// let fs = require('fs');
// //read any file 'str' and specify utf8 encode to avoid getting the raw buffer
// fs.readFile('README.md', 'utf8', (err, data) => {
//   if (err) throw err;
//   //console log file's data
//   console.log(data);
// });

/////////
