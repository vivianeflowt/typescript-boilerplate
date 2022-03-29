export const randomInt = (min: number, max: number): number => {
  const multiplier = Math.abs(max - min + 1) + min;

  return Math.floor(Math.random() * multiplier);
};

export const range = (start: number, stop: number, step = 1): number[] => {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (_, i) => start + i * step,
  );
};

export const shuffle = <T>(array: readonly T[]): T[] => {
  return [...array]
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
};

export const unique = <T>(array: readonly T[]): T[] => {
  return Array.from(new Set([...array]));
};

export const compact = <T>(array: readonly T[]): T[] => {
  return [...array].filter((i) => i);
};

export const limit =
  <T>(count: number) =>
    (array: T[]): T[] => {
      if (count < 0) {
        count = Number.MAX_SAFE_INTEGER;
      }
      return array.slice(0, count);
    };

export const repeat = <T>(value: T, count: number): T[] => {
  return new Array(count).fill(value);
};

export const intersect = <T>(a: T[], b: T[]): T[] => {
  return [...a].filter((x) => [...b].includes(x));
};

export const difference = <T>(a: T[], b: T[]): T[] => {
  const a1 = [...b].filter((item) => !a.includes(item));
  const b1 = [...a].filter((item) => !b.includes(item));
  return [...a1, ...b1];
};

export const randomHexColor = () => {
  return `#${((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')}`;
};
