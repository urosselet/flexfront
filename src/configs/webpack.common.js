let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let TSLintPlugin = require('tslint-webpack-plugin');
let helpers = require('./helpers');
let path = require('path');

module.exports = {

    entry: {
        'polyfills': './src/configs/polyfills.ts',
        'vendor': './src/configs/vendor.ts',
        'main': './src/configs/main.ts'
    },

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        extensions: ['*', '.ts', '.js'],
        modules: ['./node_modules']
    },

    module: {
        loaders: [{
            test: /\.ts$/,
            loaders: [
                'awesome-typescript-loader?{configFileName: "tsconfig.json"}',
                'angular2-template-loader',
                'angular2-router-loader'
            ]
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }, {
            test: /\.(png|jpeg|jpg|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loaders: ['file-loader?name=assets/[name].[hash].[ext]']
        }, {
            test: /\.css$/,
            exclude: helpers.root('src', 'app'),
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }, {
            test: /\.css$/,
            include: helpers.root('src', 'app'),
            loader: 'raw-loader'
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loaders: ['raw-loader', 'sass-loader']
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file-loader?name=assets/fonts/[name].[ext]'
        }, {
            test: /\.ts$/,
            enforce: 'pre',
            loader: 'tslint-loader',
            options: { /* Loader options go here */ }
        }]
    },

    plugins: [

    	new ExtractTextPlugin('[name].css'),

        new CopyWebpackPlugin([]),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['main', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core/,
            path.resolve(__dirname, '..')
        ),

        new TSLintPlugin({
            files: ['./src/**/*.ts'],
            exclude: []
        }),

        new webpack.ProvidePlugin({
            'window.jQuery': 'jquery',
			jQuery: 'jquery',
            jquery: 'jquery',
      		$: 'jquery',
            Popper: ['popper.js', 'default'],
            Hammer: 'hammerjs/hammer'
		})

    ]
};
