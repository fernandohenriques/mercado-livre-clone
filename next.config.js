const path = require('path');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

const resourcesLoader = {
  loader: 'sass-resources-loader',
  options: {
    resources: [
      'src/styles/helpers/_var.scss',
      'node_modules/sass-rem/_rem.scss',
      'src/styles/helpers/_mixins.scss',
    ]
  }
};

const cssModuleLoader = {
  test: /\.module\.(css|scss)$/,
  use: [
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        importLoaders: 4,
        localsConvention: 'camelCase',
        modules: {
          localIdentName: '[local]--[hash:base64:5]',
        },
      },
    },
    resourcesLoader
  ]
};

module.exports = withCSS(withSass({
  webpack: (config, options) => {
    config.module.rules = config.module.rules.map(rule => {
      if (rule.test.source.includes('scss') || rule.test.source.includes('sass'))
        rule.use = [ ...rule.use, resourcesLoader ];

      return rule;
    });

    config.module.rules.push(cssModuleLoader);
    config.resolve.modules = [ ...config.resolve.modules, path.resolve(__dirname, 'src') ];

    return config;
  },
}));
