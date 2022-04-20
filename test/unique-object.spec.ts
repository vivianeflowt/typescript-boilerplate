import uniqueObject from '../src/lib/unique-object';

describe('uniqueObject', () => {
  const array = [
    { name: 'Anissa', color: 'lime' },
    { name: 'Zoe', color: 'violet' },
    { name: 'Cletus', color: 'magenta' },
    { name: 'Cletus', color: 'green' },
    { name: 'Zoe', color: 'violet' },
  ];

  test('should pass', () => {
    const result = uniqueObject(array);

    expect(result).toEqual(
      expect.arrayContaining([
        { name: 'Anissa', color: 'lime' },
        { name: 'Zoe', color: 'violet' },
        { name: 'Cletus', color: 'magenta' },
        { name: 'Cletus', color: 'green' },
      ]),
    );
  });
});
