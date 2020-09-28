module.exports = {
  testEnvironment: 'node',
  reporters: [
    'default'
  ],
  moduleFileExtensions: ['js', 'json'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: ['**/specs/step1.js'],
  globals: {
    testTimeout: 50000,
  },
  verbose: true,
};
