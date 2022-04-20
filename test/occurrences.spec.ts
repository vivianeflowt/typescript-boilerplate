import occurrences from '../src/lib/occurrences';

describe('occurrences', () => {
  const array = [2, 1, 4, 2, 3, 4, 4, 5, 6, 6];

  test('should pass', () => {
    const result = occurrences(4)(array);

    expect(result).toEqual(3);
  });
});
