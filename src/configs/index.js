const base = require('./base');
const devServer = require('./devServer');
const merge = require('webpack-merge');

module.exports = merge(base, devServer);
