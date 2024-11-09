import { createReadStream } from 'fs';
import { stdout } from 'process';
import { resolve } from 'path';

export function cat(line, currentDir) {
  try {
    const fileName = line.split(' ')[1];
    const pathToRead = resolve(currentDir, fileName);
    const rs = createReadStream(pathToRead);
    rs.pipe(stdout);

    rs.on('error', () => {
      console.log('Operation failed');
    });
  } catch {
    console.log('Operation failed');
  }
}
