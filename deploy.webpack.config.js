var webpackConfig = require('./webpack.config.js');

webpackConfig.output = {
  path: '/Users/patrickcorbett/workspace/testing/sp_prototypes/',
  publicPath: '/assets/',
  filename: 'bundle.js'
};

module.exports = webpackConfig;
