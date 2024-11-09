import { resolve } from 'path';
import { unlink } from 'fs/promises';

export async function rm(line, currentDir) {
  try {
    const lineArr = line.split(' ');
    const pathToRm = resolve(currentDir, lineArr[1]);

    await unlink(pathToRm);
  } catch {
    console.log('Operation failed');
  }
}
