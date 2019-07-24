'use strict';
const functions = require('./functions.js');
const FileOrDir = process.argv[2];

//Validate file or directory input from user
if (FileOrDir === 'file') {
  console.log(functions.getLinksFile(process.argv[3]));
} else if (FileOrDir === 'dir') {
  console.log('Error: You must specify the file within the directory. Try this "dirName/fileName.md"');
} else {
  console.log('Error: Must specify file or directory.');
}
