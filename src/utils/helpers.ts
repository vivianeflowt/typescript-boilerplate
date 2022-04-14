/* eslint-disable @typescript-eslint/no-explicit-any */
// import f from 'lodash/fp';
import path from 'node:path';

export const pathWrapper =
  (wrapper: string) =>
  (...args: string[]) =>
    path.join(wrapper, ...args);

export const findAllByKey = (obj: any, keyToFind: string) => {
  return Object.entries(obj).reduce(
    (acc, [key, value]) =>
      key === keyToFind
        ? acc.concat(value)
        : typeof value === 'object'
        ? acc.concat(findAllByKey(value, keyToFind))
        : acc,
    [],
  );
};

export const splitByWord = (str: string): string[] => {
  const wordRegex = /[A-Z]?[a-z]+|\d+|[A-Z]+(?![a-z])/g;
  return str.match(wordRegex);
};

export const occurrences = <T>(list: T[], value: T): number => {
  return [...list].reduce((a, v) => (v === value ? a + 1 : a), 0);
};

export const detectCharCase = (str: string): string => {
  if (str.includes('_') && /^([A-Z][A-Z0-9_]+)+$/.test(str))
    return 'uppersnake';
  if (str.includes('_') && /^([a-z][a-z0-9_]+)+$/.test(str)) return 'snakecase';
  if (/^[a-z0-9_]+$/.test(str)) return 'lowercase';
  if (/^[A-Z][A-Z0-9_]*$/.test(str)) return 'uppercase';
  if (/^([A-Z][a-z0-9_]*[A-Z]*){2,}$/.test(str)) return 'pascalcase';
  if (/^([a-z][a-z0-9_]*[A-Z][a-z0-9_]*)+$/.test(str)) return 'camelcase';
  if (/^[A-Z][a-z]*$/.test(str)) return 'titlecase';
  if (/^[A-Z][a-z0-9_]*$/.test(str)) return 'mixedcase';
  return '';
};

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
