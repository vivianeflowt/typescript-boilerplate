const rimraf = require('rimraf');

const run = async () => {
  rimraf.sync('.jest-cache');
  rimraf.sync('coverage');
  rimraf.sync('dist');
};

run();
