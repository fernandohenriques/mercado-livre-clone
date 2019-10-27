const path = require('path');
const hash = require('object-hash');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

const resourcesLoader = {
  loader: 'sass-resources-loader',
  options: {
    resources: [
      'src/styles/helpers/_var.scss',
      'node_modules/sass-rem/_rem.scss',
      'src/styles/helpers/_mixins.scss',
    ],
  },
};

const fileLoader = {
  test: /\.(png|jpg|gif|svg)$/,
  use: {
    loader: 'file-loader',
    options: {
      name: '[name]_[hash].[ext]',
      publicPath: '/_next/static/files',
      outputPath: 'static/files',
    },
  },
};

module.exports = withCSS(withSass({
  cssModules: true,
  cssLoaderOptions: {
    sourceMap: true,
    importLoaders: 4,
    localsConvention: 'camelCase',
    getLocalIdent: (loaderContext, _, localName) => {
      const filePath = loaderContext.resourcePath;

      if (/\.module\.(css|scss)$/.test(filePath)) {
        const hashName = hash({ filePath }, { algorithm: 'md5', encoding: 'base64' }).substr(0, 5);
        return `${localName}--${hashName}`;
      }

      return localName;
    },
  },
  webpack: (config) => {
    const newConfig = config;

    newConfig.module.rules = config.module.rules.map((rule) => {
      if (rule.test.source.includes('scss') || rule.test.source.includes('sass')) {
        const newRule = { ...rule };
        newRule.use = [...rule.use, resourcesLoader];
        return newRule;
      }

      return rule;
    });

    newConfig.module.rules.push(fileLoader);
    newConfig.resolve.modules = [...config.resolve.modules, path.resolve(__dirname, 'src')];

    return newConfig;
  },
}));
