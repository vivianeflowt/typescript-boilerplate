import f from 'lodash/fp';

import type { AnyObject, Key } from '../types';

function uniqueByKey(predicate: Key) {
  return (array: AnyObject[]) => {
    return f.pipe(
      f.reverse,
      f.reduce((acc, cur) => ({ ...acc, [cur[predicate]]: cur }), {}),
      f.values,
    )(array);
  };
}

export default uniqueByKey;
