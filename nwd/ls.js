import { readdir } from 'fs/promises';

export async function ls(currentDir) {
  const dirents = await readdir(currentDir, { withFileTypes: true });
  const tableData = dirents
    .map((dirent) => ({
      Name: dirent.name,
      Type: dirent.isDirectory() ? 'directory' : 'file',
    }))
    .sort((a, b) => {
      if (a.Type !== b.Type) {
        return a.Type === 'directory' ? -1 : 1;
      }
      return a.Name.localeCompare(b.Name);
    });

  console.table(tableData);
}
