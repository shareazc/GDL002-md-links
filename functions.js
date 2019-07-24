'use strict';

let fs = require('fs');
let linkCheck = require('link-check');
let chalk = require('chalk');

function getLinksFile(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err;
    const matches = data.match(/\bhttps?:\/\/\S+/gi);
    matches.forEach(element => {
      linkCheck(element, function(err, result) {
        if (err) {
          console.error(err);
          return;
        }
        if (result.status === 'dead') {
          console.log(result.link + ' is ' + chalk.bold.red(result.status));
        } else if (result.status === 'alive') {
          console.log(result.link + ' is ' + chalk.bold.green(result.status));
        }
      });
    });
  });
}

module.exports = {
  getLinksFile
};
