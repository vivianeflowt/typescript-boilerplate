function splitByWord(str: string): string[] {
  const wordRegex = /[A-Z]?[a-z]+|\d+|[A-Z]+(?![a-z])/g;
  return str.match(wordRegex) || [];
}

export default splitByWord;
