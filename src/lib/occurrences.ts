function occurrences<T>(value: T) {
  return (list: T[]): number => {
    return [...list].reduce((a, v) => (v === value ? a + 1 : a), 0);
  };
}

export default occurrences;
