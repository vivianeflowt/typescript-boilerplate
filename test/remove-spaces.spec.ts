import removeSpaces from '../src/lib/remove-spaces';

describe('removeSpaces', () => {
  const str = '  test   text ';

  test('should pass', () => {
    const result = removeSpaces(str);

    expect(result).toEqual('testtext');
  });
});
