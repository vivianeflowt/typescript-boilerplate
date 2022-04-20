function unaccented(str: string): string {
  return str.normalize('NFD').replace(/\p{Diacritic}/gu, '');
}

export default unaccented;
