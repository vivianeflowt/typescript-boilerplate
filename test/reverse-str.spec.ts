import reverseStr from '../src/lib/reverse-str';

describe('reverseStr', () => {
  const str = 'abcde';

  test('should pass', () => {
    const result = reverseStr(str);

    expect(result).toEqual('edcba');
  });
});
