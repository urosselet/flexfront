const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {

    devServer: {
    	host: 'localhost',
    	port: 3000,
        inline: true,
        historyApiFallback: true,
        disableHostCheck: true,
        stats: 'errors-only',
        contentBase: 'src/'
    },

    plugins: [
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
                'ENV': JSON.stringify('LOCAL'),
                'NODE_ENV': JSON.stringify('LOCAL'),
                'API_URL': JSON.stringify('http://localhost:1337/api/'),
                'SOCKET_URL': JSON.stringify('http://localhost:1337')
            }
        })

    ],

    devtool: 'cheap-module-eval-source-map'

});
