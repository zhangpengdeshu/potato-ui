const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf');

module.exports = merge(webpackBaseConfig, {
    devtool: 'eval-source-map',
    plutins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: 'test'
            }
        })
    ]
})