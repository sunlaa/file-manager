import { access } from 'fs/promises';

export async function isPathExist(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}
