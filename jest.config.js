// jest.config.js
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions }          = require('./tsconfig.json');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',            // tells Jest to use ts-jest
  testEnvironment: 'jsdom',     // jsdom needed for <App /> tests
  moduleFileExtensions: ['ts','tsx','js','jsx','json','node'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, { prefix: '<rootDir>/' }),
};
