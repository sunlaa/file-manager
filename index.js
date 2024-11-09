import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import os from 'os';
import { up, cd, ls } from './nwd/index.js';
import { cat, add, mkdir, rn, cp, mv, rm } from './files/index.js';

const args = process.argv.slice(2);
let username = 'Guest';

args.forEach((arg) => {
  if (arg.startsWith('--username=')) {
    username = arg.split('=')[1];
  }
});

console.log(`Welcome to the File Manager, ${username}!`);

const rl = readline.createInterface({ input, output });

// process.chdir(os.homedir());

console.log(`You are curerntly in ${process.cwd()}`);

rl.on('line', async (line) => {
  const currentDir = process.cwd();

  switch (true) {
    case line === 'up': {
      up(currentDir);
      break;
    }

    case line.startsWith('cd'): {
      cd(line, currentDir);
      break;
    }

    case line === 'ls': {
      await ls(currentDir);
      break;
    }

    case line.startsWith('cat'): {
      cat(line, currentDir);
      break;
    }

    case line.startsWith('add'): {
      await add(line, currentDir);
      break;
    }

    case line.startsWith('mkdir'): {
      await mkdir(line, currentDir);
      break;
    }

    case line.startsWith('rn'): {
      await rn(line, currentDir);
      break;
    }

    case line.startsWith('cp'): {
      await cp(line, currentDir);
      break;
    }

    case line.startsWith('mv'): {
      await mv(line, currentDir);
      break;
    }
    case line.startsWith('rm'): {
      await rm(line, currentDir);
      break;
    }

    default: {
      console.log('Invalid input');
      break;
    }
  }

  console.log(`You are curerntly in ${process.cwd()}`);
});
