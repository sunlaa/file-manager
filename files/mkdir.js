import { resolve } from 'path';
import { mkdir as createDir } from 'fs/promises';

export async function mkdir(line, currentDir) {
  try {
    const dirName = line.split(' ')[1];
    const pathToAdd = resolve(currentDir, dirName);
    await createDir(pathToAdd);
  } catch {
    console.log('Operation failed');
  }
}
