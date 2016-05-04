require('core-js');
require('babel-polyfill');

var context = require.context('./webpack', true, /.+\.spec\.js$/);
context.keys().forEach(context);
module.exports = context;
