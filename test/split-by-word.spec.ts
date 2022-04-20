import splitByWord from '../src/lib/split-by-word';

describe('splitByWord', () => {
  const str = 'Aatches even if Received contains Additional Elements';

  test('should pass', () => {
    const result = splitByWord(str);

    expect(result).toEqual([
      'Aatches',
      'even',
      'if',
      'Received',
      'contains',
      'Additional',
      'Elements',
    ]);
  });
});
