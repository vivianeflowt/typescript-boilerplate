import type { AnyObject, Key } from '../types';
declare function uniqueByKey(predicate: Key): (array: AnyObject[]) => any[];
export default uniqueByKey;
