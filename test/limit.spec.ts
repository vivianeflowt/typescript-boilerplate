import limit from '../src/lib/limit';

describe('limit', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];

  test('should pass', () => {
    const result = limit(4)(array);

    expect(result).toEqual(expect.arrayContaining([1, 2, 3, 4]));
  });
});
