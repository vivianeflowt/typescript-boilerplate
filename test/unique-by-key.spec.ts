import uniqueByKey from '../src/lib/unique-by-key';

describe('uniqueByKey', () => {
  const array = [
    { name: 'Patricia', color: 'azure' },
    { name: 'Brook', color: 'yellow' },
    { name: 'Giovanna', color: 'purple' },
    { name: 'Patricia', color: 'lavender' },
    { name: 'Lawrence', color: 'yellow' },
  ];

  test('should pass', () => {
    const result = uniqueByKey('name')(array);

    expect(result).toEqual(
      expect.arrayContaining([
        { name: 'Patricia', color: 'azure' },
        { name: 'Brook', color: 'yellow' },
        { name: 'Giovanna', color: 'purple' },
        { name: 'Lawrence', color: 'yellow' },
      ]),
    );
  });
});
