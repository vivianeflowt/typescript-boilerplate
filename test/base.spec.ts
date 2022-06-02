describe('Base Jest Extended', () => {
  test('passes when using an asymmetrical matcher', () => {
    expect([]).toEqual(expect.toBeArray());
  });
});
