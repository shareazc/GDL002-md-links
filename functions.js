'use strict';

let fs = require('fs');
let linkCheck = require('link-check');
let chalk = require('chalk');

function getLinksFile(path) {
  //Run readFile
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err;
    //Detect urls and store them inside "matches"
    const matches = data.match(/\bhttps?:\/\/\S+/gi);
    // const aliveLinks = [];
    // const deadLinks = [];
    matches.forEach(element => {
      linkCheck(element, function(err, result) {
        if (err) {
          console.error(err);
          return;
        }
        //Validate alive or dead links
        if (result.status === 'dead') {
          // result.link += aliveLinks;
          // console.log(
          //   chalk.bold.green('Working links: ') + chalk.bgGreen(' ' + aliveLinks.length + ' '),
          // );
          console.log(result.link + ' is ' + chalk.bold.red(result.status));
        } else if (result.status === 'alive') {
          // result.link += deadLinks;
          // console.log(chalk.bold.red('Dead links: ') + chalk.bgRed(' ' + deadLinks.length + ' '));
          console.log(result.link + ' is ' + chalk.bold.green(result.status));
        }
        //console.log(`${result.link} is ${result.status}`);
      });
    });
  });
}

/*
async function getLinksFile(path) {
  //Run readFile
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err;
    //Detect urls and store them inside "matches"
    const matches = data.match(/\bhttps?:\/\/\S+/gi);
    return matches;
    matches.forEach(element => {
      linkCheck(element, function(err, result) {
        const aliveLinks = [];
        const deadLinks = [];
        if (err) {
          console.error(err);
          return;
        }
        //Validate alive or dead links
        if (result.status === 'dead') {
          result.link += aliveLinks;
          console.log(chalk.bold.green('Working links: ') + chalk.bgGreen(aliveLinks.length));
          //console.log(result.link + ' is ' + chalk.bold.red(result.status));
        } else if (result.status === 'alive') {
          result.link += deadLinks;
          console.log(chalk.bold.red('Dead links: ') + chalk.bgRed(deadLinks.length));
          //console.log(result.link + ' is ' + chalk.bold.green(result.status));
        }
  });
      //console.log(`${result.link} is ${result.status}`);
    });
  });
}
*/

function getLinksDirectory(path) {
  //Excecute readDir
  fs.readdir(path, 'utf8', (err, files) => {
    if (err) throw err;
    //Excecute getLinksFile for each file
    files.forEach(path => {
      getLinksFile(path);
    });
    return console.log(chalk.bold.green('There are ' + files.length + ' files in this directory'));
  });
}

module.exports = {
  getLinksFile,
  getLinksDirectory,
};
