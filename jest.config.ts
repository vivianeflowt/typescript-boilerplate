import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  rootDir: '.',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['src/**/*.(t|j)s'],
  coveragePathIgnorePatterns: ['index.ts', 'debug.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  maxWorkers: '50%',
  collectCoverage: false,
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './html-report',
        filename: 'report.html',

        openReport: true,
      },
    ],
  ],
};

export default config;
