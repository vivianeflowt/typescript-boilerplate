import { Volume } from 'memfs';

import { readDirR } from './readdirr';

jest.mock('fs', () => {
  const fs = jest.requireActual('fs');
  const unionfs = require('unionfs').default;
  return unionfs.use(fs);
});

const json = {
  './config.json': '1',
  './README.md': '1',
  './src/index.js': '2',
  './node_modules/debug/index.js': '3',
  './data/clients.json': '3',
};

describe('readDirR', () => {
  let fs;
  let fsMocked;
  let vol;

  beforeEach(() => {
    jest.resetAllMocks();
    vol = Volume.fromJSON(json, '/app');
    fsMocked = require('fs');
    fs = fsMocked.use(vol);
  });

  test('should have 5 files without filter', async () => {
    const result = await readDirR('/app');
    expect(result.length).toEqual(5);
  });
});
