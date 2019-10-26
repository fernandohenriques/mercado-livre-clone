module.exports = {
  verbose: true,
  setupFiles: [
    '<rootDir>/src/config/tests/enzymeSetup.js',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff)$': '<rootDir>/src/config/tests/fileTransformer.js',
  },
  transformIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
  ],
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/src/components$1',
    '^assets(.*)$': '<rootDir>/src/assets$1',
    '^services(.*)$': '<rootDir>/src/services$1',
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
  },
};
