import type { AnyObject } from '../types';

function uniqueObject(array: AnyObject[]): AnyObject[] {
  return [...new Set([...array].map((item) => JSON.stringify(item)))].map(
    (str: string) => JSON.parse(str),
  );
}

export default uniqueObject;
