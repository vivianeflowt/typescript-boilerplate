import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  rootDir: '.',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['src/lib/**/*.(t|j)s'],
  coveragePathIgnorePatterns: ['index.ts', 'debug.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  maxConcurrency: 5,
  maxWorkers: '50%',
};

export default config;
