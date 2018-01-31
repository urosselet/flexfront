const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');
const UglifyJsPlugin = require('uglify-js-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {

    devServer: {
    	host: '0.0.0.0',
        port: 3002,
        disableHostCheck: true,
        historyApiFallback: true,
        stats: 'errors-only',
        contentBase: 'src/',
    },

    plugins: [

        /**
         * Webpack plugin to optimize a JavaScript file for faster initial load
         * by wrapping eagerly-invoked functions.
         *
         * See: https://github.com/vigneshshanmugam/optimize-js-plugin
         */
        new OptimizeJsPlugin({
            sourceMap: false
        }),

        /**
         * Plugin: DefinePlugin
         * Description: Define free variables.
         * Useful for having development builds with debug logging or adding global constants.
         *
         * Environment helpers
         *
         * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
         */
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify('PROD'),
                'NODE_ENV': JSON.stringify('PROD'),
                'API_URL': JSON.stringify('https://api.flexcrowd.org/'),
                'ASSET_URL': JSON.stringify('https://api.flexcrowd.org/upload/'),
                'SOCKET_URL': JSON.stringify('https://flexcrowd.org'),
            }
        }),

        /**
         * Plugin: UglifyJsPlugin
         * Description: Minimize all JavaScript output of chunks.
         * Loaders are switched into minimizing mode.
         *
         * See: https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
         */
        new UglifyJsPlugin({
            beautify: false,
            output: {
                comments: false,
                max_line_len: 50000
            },
            mangle: {
                screw_ie8: true
            },
            compress: {
                screw_ie8: true,
                warnings: false,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
                negate_iife: false
            }
        })
    ],

    devtool: 'source-map'

});
