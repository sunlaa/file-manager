import * as readline from 'readline/promises';
import { stdin as input, stdout as output, stdout } from 'node:process';
import os from 'os';
import { up, cd, ls } from './nwd/index.js';
import { cat, add, mkdir, rn, cp, mv, rm } from './files/index.js';
import { cpus, eol, homedir, username, architecture } from './os/index.js';
import { hash } from './hash/index.js';
import { brotli } from './brotli/index.js';

const args = process.argv.slice(2);
let user = 'Guest';

args.forEach((arg) => {
  if (arg.startsWith('--username=')) {
    user = arg.split('=')[1];
  }
});

console.log(`Welcome to the File Manager, ${user}!`);

const rl = readline.createInterface({ input, output });

process.chdir(os.homedir());

console.log(`You are curerntly in ${process.cwd()}`);

rl.on('line', async (line) => {
  const currentDir = process.cwd();

  switch (true) {
    case line === '.exit': {
      rl.close();
      process.exit(0);
    }

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

    case line === 'os --EOL': {
      eol();
      break;
    }

    case line === 'os --cpus': {
      cpus();
      break;
    }

    case line === 'os --homedir': {
      homedir();
      break;
    }

    case line === 'os --username': {
      username();
      break;
    }

    case line === 'os --architecture': {
      architecture();
      break;
    }

    case line.startsWith('hash'): {
      hash(line, currentDir);
      break;
    }

    case line.startsWith('compress'): {
      brotli(line, currentDir);
      break;
    }

    case line.startsWith('decompress'): {
      brotli(line, currentDir, 'decompress');
      break;
    }

    default: {
      console.log('Invalid input');
      break;
    }
  }

  console.log(`You are curerntly in ${process.cwd()}`);
});

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${user}, goodbye!`);
});
