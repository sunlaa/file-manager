import { writeFile } from 'fs/promises';
import { resolve } from 'path';

export async function add(line, currentDir) {
  try {
    const fileName = line.split(' ')[1];
    const pathToAdd = resolve(currentDir, fileName);
    await writeFile(pathToAdd, '', { flag: 'wx' });
  } catch {
    console.log('Operation failed');
  }
}
