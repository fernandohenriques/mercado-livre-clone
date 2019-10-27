const autoprefixer = require('autoprefixer');
const flexbugsFixes = require('postcss-flexbugs-fixes');

const plugins = [
  autoprefixer,
  flexbugsFixes,
];

module.exports = {
  plugins,
};
