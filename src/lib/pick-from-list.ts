export function pickFromList<T>(list: T[]): T {
  return [...list][Math.floor(Math.random() * (list.length - 1))];
}

export default pickFromList;
