import fs, { Dirent } from 'fs';
import path from 'path';

export async function readDirR(
  rootPath: string,
  pattern?: string,
): Promise<string[]> {
  return fs.promises
    .readdir(rootPath, { withFileTypes: true })
    .then((list: Dirent[]) => {
      return Promise.all(
        list.map((item: Dirent) =>
          item.isDirectory()
            ? readDirR(path.join(rootPath, item.name), pattern)
            : path.join(rootPath, item.name),
        ),
      );
    })
    .then((results) => [...results].flat());
}
