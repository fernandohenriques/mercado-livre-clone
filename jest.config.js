module.exports = {
  verbose: true,
  setupFiles: [
    '<rootDir>/src/config/tests/enzymeSetup.js',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|svg|eot|otf|webp|ico|ttf|woff)$': '<rootDir>/src/config/tests/fileTransformer.js',
  },
  transformIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
  ],
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/src/components$1',
    '^assets(.*)$': '<rootDir>/src/assets$1',
    '^services(.*)$': '<rootDir>/src/services$1',
    '^store(.*)$': '<rootDir>/src/store$1',
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    '^-!svg-react-loader(.*)$': '<rootDir>/src/config/tests/__mocks__/svgReactLoaderImport.js',
  },
  collectCoverageFrom: [
    'pages/**/*.js',
    'src/**/*.{js,jsx}',
    '!src/config/tests/**',
    '!**/node_modules/**',
  ],
  coverageDirectory: 'coverage',
};
