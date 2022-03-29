/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const fs = require('fs');

const terminal = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question(
  'Input name of file that you want to copy,'
    + ' end file that you where you want copy ', (str) => {
    const arr = str.split(' ');

    console.log(arr);

    if (arr.length !== 2) {
      console.log('ERROR: you must enter name of two '
      + 'files (copiedFile nameOfNewFile)');
      terminal.close();

      return;
    }

    fs.readFile(
      `./src/directoryForRead/${arr[0]}`,
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          fs.writeFile(
            `./src/directoryForWrite/${arr[1]}`,
            data,
            (error) => {
              if (error) {
                console.log('ERROR');
                terminal.close();
              } else {
                console.log('Successfully');
              }
            });
        }
      });
  });
