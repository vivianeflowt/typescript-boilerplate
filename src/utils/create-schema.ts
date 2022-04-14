import f from 'lodash/fp';
import fg from 'fast-glob';
import { closest } from 'fastest-levenshtein';
import { normalize } from 'path';
import { getFileList } from './files';

const createSchema =
  (name: string) =>
  async (...files: string[]) => {
    const fileList = await getFileList(...files);
  };

const FILES1 = 'templates';

const exec = async () => {
  //

  const fileList = await getFileList(FILES1);

  await createSchema('viviane')(...fileList);
};
exec();
