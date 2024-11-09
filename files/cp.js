import { createReadStream, createWriteStream } from 'fs';
import { access } from 'fs/promises';
import { resolve } from 'path';
import { pipeline } from 'stream/promises';

export async function cp(line, currentDir) {
  try {
    const lineArr = line.split(' ');

    const from = resolve(currentDir, lineArr[1]);
    const to = resolve(currentDir, lineArr[2], lineArr[1]);

    await access(from);

    const readStream = createReadStream(from);
    const writeStream = createWriteStream(to);

    await pipeline(readStream, writeStream);
    return true;
  } catch {
    console.log('Operation failed');
    return false;
  }
}
