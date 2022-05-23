import { fs, vol } from 'memfs';

const json = {
  './README.md': '1',
  './src/index.js': '2',
  './node_modules/debug/index.js': '3',
};
vol.fromJSON(json, '/app');

fs.readFileSync('/app/README.md', 'utf8'); // 1
vol.readFileSync('/app/src/index.js', 'utf8'); // 2
