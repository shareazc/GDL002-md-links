// module.exports = () => {
//   // ...
// };

const mdLinks = require('./mdLinks.js');

//to get the path as an argument. It will extract it from process argv position 2
const path = process.argv[2];

mdLinks.printFiles;
