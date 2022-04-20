import unaccented from '../src/lib/unaccented';

describe('unaccented', () => {
  const str = 'Ábôà';

  test('should pass', () => {
    const result = unaccented(str);

    expect(result).toEqual('Aboa');
  });
});
