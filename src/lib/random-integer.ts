function randomInteger(min: number, max: number): number {
  const multiplier = Math.abs(max - min + 1) + min;

  return Math.floor(Math.random() * multiplier);
}

export default randomInteger;
