import { resolve } from 'path';

export function cd(line, currentDir) {
  try {
    const dirName = line.split(' ')[1];
    const pathToNav = resolve(currentDir, dirName);
    process.chdir(pathToNav);
  } catch {
    console.log('Operation failed');
  }
}
