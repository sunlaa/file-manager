import os from 'os';
import path from 'path';

export function up(currentDir) {
  try {
    if (currentDir !== os.homedir()) {
      process.chdir(path.resolve(currentDir, '..'));
    }
  } catch {
    console.log('Operation failed');
  }
}
