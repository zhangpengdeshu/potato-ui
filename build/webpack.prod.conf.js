const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf');

process.env.NODE_ENV = 'production';

module.exports = merge(webpackBaseConfig, {
    mode: "production",
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../lib'),
        publicPath: '/lib/',
        filename: 'potato-ui.min.js',
        library: 'potato-ui',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    externals: {
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
