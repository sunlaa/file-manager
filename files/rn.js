import { rename } from 'fs/promises';
import { resolve } from 'path';

export async function rn(line, currentDir) {
  try {
    const lineArr = line.split(' ');

    const oldName = resolve(currentDir, lineArr[1]);
    const newName = resolve(currentDir, lineArr[2]);
    
    await rename(oldName, newName);
  } catch (err) {
    console.log('Operation failed');
  }
}
