import f from 'lodash/fp';
import fg from 'fast-glob';
import { closest } from 'fastest-levenshtein';
import { normalize } from 'path';

export const getDirectoryTree = () => {
  return fg.sync(['**/*', '!node_modules', '!dist', '!build', '!.git'], {
    dot: false,
    deep: 5,
    onlyDirectories: true,
    followSymbolicLinks: false,
    suppressErrors: true,
    caseSensitiveMatch: false,
    baseNameMatch: true,
  });
};

const splitPath = (...args: string[]): string[] => {
  return f.pipe(
    f.map((item: string) =>
      f.pipe(f.trim, f.split('/'), f.compact, f.uniq)(normalize(item)),
    ),
    f.flattenDeep,
    f.compact,
    f.uniq,
  )([...args]);
};

export const matchPath = (input: string) => (list: readonly string[]) => {
  if (!input) return list;

  const splitedInput = splitPath(input);
  const splitedList = splitPath(...list);

  const match = splitedInput
    .map((value) => {
      const norm = splitedList.map((i) => i.slice(0, value.length));
      return closest(value, norm);
    })
    .join('/');

  return [...list]
    .filter((item) => item.includes(match) && item !== match)
    .sort((a, b) => a.length - b.length);
};

// const exec = async () => {
//   //

//   const dirlist = getDirectoryTree();
//   console.log(`~ dirlist`, dirlist);

//   const input = 'src/mo';

//   const res = matchPath(input)(dirlist);

//   console.log(`~ res`, res);

//   // const C1 = matchPath(input1)(dirlist);
//   // const C2 = matchPath(input2)(dirlist);
//   // const C3 = matchPath(input3)(dirlist);

//   // console.log(`~ M`, C1, C2, C3);

//   // const inputSuffix = f.pipe(f.last)(input.split('/'));

//   // const L2 = L1.map((i) => i.slice(0, inputSuffix.length));

//   // const R1 = closest(input, [...L1]);

//   // const R2 = closest(inputSuffix, [...L2]);

//   // console.log(`R => `, R1, R2);

//   // fs.writeJsonSync(join(__dirname, '__paths__.json'), paths);
// };
// exec();
