/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  setupFiles: ['<rootDir>/setupJest.ts'],
  moduleNameMapper: {
  '^.+\\.(css|less)$': '<rootDir>/CSSStub.js'
  }
};