import randomInteger from '../src/lib/random-integer';

describe('randomInt', () => {
  test('shout generate numbers in the correct range', () => {
    const min = 1;
    const max = 10;
    const outputs = [...Array(100)].map(() => randomInteger(min, max));

    const outRangedValues =
      outputs.filter((item) => item < 1 || item > 10).length === 0;

    expect(outputs.length).toEqual(100);
    expect(outRangedValues).toBeFalsy();
  });
});
