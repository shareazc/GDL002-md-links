let fs = require('fs');
let path = require('path');

//Test
function writePath(path) {
  return console.log('Path is ' + path);
}

//Obsolete
function readDirectory(path) {
  fs.readdir(path, 'utf8', (err, files) => {
    if (err) throw err;
    console.log(files);
  });
}
//Obsolete
function readFile(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err;
    return console.log(data);
  });
}

function getLinksFile(path) {
  //Run readFile
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err;
    const text = data;
    //Detect urls and store them inside "matchest"
    const matches = text.match(/\bhttps?:\/\/\S+/gi);
    return console.log(matches);
  });
}

function getLinksDirectory(path) {}
//Excecute readDir

module.exports = {
  writePath,
  readFile,
  readDirectory,
  getLinksFile,
};
