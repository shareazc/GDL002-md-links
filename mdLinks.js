const mdLinks = () => {
  //require the filesystem library from node
  let fs = require('fs');
  //read any file 'str' and specify utf8 encode to avoid getting the raw buffer
  fs.readFile('README.md', 'utf8', (err, data) => {
    if (err) throw err;
    //console log file's data
    console.log(data);
  });
};

module.exports = mdLinks;
