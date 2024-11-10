import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import { resolve } from 'path';
import { access } from 'fs/promises';
import { createReadStream, createWriteStream } from 'fs';

export async function brotli(line, currentDir, flag = 'compress') {
  try {
    const lineArr = line.split(' ');

    const from = resolve(currentDir, lineArr[1]);
    const to = resolve(currentDir, lineArr[2]);

    await access(from);

    const source = createReadStream(from);
    const destination = createWriteStream(to);

    let brotli;

    if (flag === 'compress') {
      brotli = createBrotliCompress();
    } else if (flag === 'decompress') {
      brotli = createBrotliDecompress();
    }

    await new Promise((resolve, reject) => {
      source
        .pipe(brotli)
        .pipe(destination)
        .on('finish', resolve)
        .on('error', reject);
    });
  } catch {
    console.log('Operation failed');
  }
}
