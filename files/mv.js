import { unlink } from 'fs/promises';
import { createReadStream, createWriteStream } from 'fs';
import { cp, rm } from './index.js';

export async function mv(line, currentDir) {
  const isEnd = await cp(line, currentDir);

  if (isEnd) {
    await rm(line, currentDir);
  }
}
