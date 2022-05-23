// @ts-ignore
import type { Config } from '@jest/types';
import os from 'os';
import path from 'path';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testMatch: ['**/*.test.[jt]s?(x)', '**/*.spec.[jt]s?(x)'],
  testEnvironment: 'node',
  collectCoverage: false,
  verbose: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  // testPathIgnorePatterns: ['/utils/', '/__mocks__/.+', '/__fixtures__/.+'],
  testTimeout: 4 * 60 * 1000, // 4 minutes
  setupFilesAfterEnv: ['jest-extended/all'],
  cacheDirectory: path.join(__dirname, '.jest-cache'),
  maxConcurrency: Math.floor(os.cpus().length / 2),
};
export default config;
