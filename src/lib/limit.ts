function limit<T = any>(count: number) {
  return (array: T[]): T[] => {
    if (count < 0) {
      count = Number.MAX_SAFE_INTEGER;
    }

    return array.slice(0, count);
  };
}

export default limit;
