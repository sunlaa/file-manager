import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import os from 'os';
import path from 'path';
import { readdir } from 'fs/promises';

const rl = readline.createInterface({ input, output });

process.chdir(os.homedir());

console.log(`You are curerntly in ${process.cwd()}`);

// const answer = await rl.question('What do you think of Node.js? ');

// console.log(`Thank you for your valuable feedback: ${answer}`);

rl.on('line', async (line) => {
  const currentDir = process.cwd();

  if (line === 'up') {
    if (!(currentDir === os.homedir())) {
      process.chdir(path.resolve(currentDir, '..'));
    }
  }

  if (line.startsWith('cd')) {
    const userPath = line.slice(3);
    const pathToNav = path.resolve(currentDir, userPath);

    try {
      process.chdir(pathToNav);
    } catch (err) {
      console.log('Operation failed');
    }
  }

  if (line === 'ls') {
    const dirents = await readdir(currentDir, { withFileTypes: true });
    const tableData = dirents
      .map((dirent) => ({
        Name: dirent.name,
        Type: dirent.isDirectory() ? 'directory' : 'file',
      }))
      .sort((a, b) => {
        if (a.Type !== b.Type) {
          return a.Type === 'directory' ? -1 : 1;
        }
        return a.Name.localeCompare(b.Name);
      });

    console.table(tableData);
  }

  console.log(`You are curerntly in ${process.cwd()}`);
});

// const args = process.argv.slice(2);
// let username = 'Guest';

// args.forEach((arg) => {
//   if (arg.startsWith('--username=')) {
//     username = arg.split('=')[1];
//   }
// });

// console.log(`Welcome to the File Manager, ${username}!`);

// console.log(`You are curerntly in ${process.cwd()}`);
