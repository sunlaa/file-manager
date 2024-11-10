import { resolve } from 'path';
import { createHash } from 'crypto';
import { createReadStream } from 'fs';

export function hash(line, currentDir) {
  try {
    const fileName = line.split(' ')[1];
    const pathToHash = resolve(currentDir, fileName);

    const hs = createHash('sha256').setEncoding('hex');
    const rs = createReadStream(pathToHash);

    rs.pipe(hs);

    hs.on('finish', () => {
      console.log(hs.read());
    });

    rs.on('error', () => {
      console.log('Operation failed');
    });
  } catch {
    console.log('Operation failed');
  }
}
