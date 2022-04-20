import shuffleList from '../src/lib/shuffle-list';

describe('shuffleList', () => {
  const array = [2, 1, 4, 2, 3, 4, 4, 5, 6, 6];

  test('should pass', () => {
    const result = shuffleList(array);

    expect(result).not.toEqual(array);
  });
});
