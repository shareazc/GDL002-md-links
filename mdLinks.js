const functions = require('./functions.js');
const FileOrDir = process.argv[2];

//Validate file or directory input from user
if (FileOrDir === 'file') {
  console.log(functions.getLinksFile(process.argv[3]));
} else if (FileOrDir === 'directory') {
  console.log(functions.readDirectory(process.argv[3]));
} else {
  console.log('Error: Must specify file or directory.');
}

//console.log(functions.getLinks(process.argv[2]));

//console.log(functions.writePath(process.argv[2]));
//console.log(functions.readFile(process.argv[2]));
//console.log(functions.readDirectory(process.argv[2]));
