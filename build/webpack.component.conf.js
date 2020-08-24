const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf');
const components = require('../components.json');
const webpackBaseConf = require('./webpack.base.conf');

process.env.NODE_ENV = 'production';

const basePath = path.resolve(__dirname, '../');

const entries = {};

Object.keys(components).forEach(key => {
    entries[key] = path.join(basePath, 'src', 'packages');
})

module.exports = merge(webpackBaseConfig, {
    devtool: 'source-map',
    mode: 'production',
    entry: entries,
    output: {
        path: path.resolve(__dirname, '../lib'),
        publicPath: '/lib/',
        filename: '[name].js',
        chunkFilename: '[id].js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals:{
        vue: {
            root: 'vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        })
    ]
})