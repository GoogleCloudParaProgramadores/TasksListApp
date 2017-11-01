var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

var webpackconfig = {
    context: path.join(__dirname, './src'),
    entry: './front-end/app/app.index.js',
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/'
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        publicPath: '/',
        overlay: {
            warnings: true,
            errors: true
        },
        clientLogLevel: 'info',
        quiet: false,
        port:3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'front-end/app/app.template.html',
            filename: './index.html'
        }),
        new CopyWebpackPlugin([
            { from: 'front-end/app/assets/favicon.ico', to: './img/favicon.ico' },
            { from: 'front-end/app/assets/kdev.png', to: './img/kdev.png' },
            { from: 'front-end/app/assets/loading.svg', to: './img/loading.svg' },
            { from: 'back-end/server.js', to: './server.js' }
        ]),
        new webpack.ProvidePlugin({
            "auth0": "auth0-js",
        })
    ],
    resolve: {
        extensions: ['', '.html', '.js', '.json', '.scss', '.css'],
        alias: {
            angular_material_css: path.join(__dirname, '/node_modules/angular-material/angular-material.css'),
            md_expansion_panel_css: path.join(__dirname, '/node_modules/angular-material-expansion-panel/dist/md-expansion-panel.css')
        }
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'raw-loader'
            }
        ],
        loaders: [
            {
                test: /\.css$/, // Only .css files
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader?name=img/[name].[ext]'
            }
        ]
    },
    externals: {
        'angular': 'angular'
    }
};

var PRODUCTION = process.env.NODE_ENV === 'production';
var DEVELOPMENT = process.env.NODE_ENV === 'development';

if(PRODUCTION){
    webpackconfig.output.filename = 'bundle.[hash:12].min.js';
    webpackconfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }));
    webpackconfig.plugins.push(new ExtractTextPlugin('style-[contenthash:10].css'));
}

if(DEVELOPMENT){
    webpackconfig.output.filename = 'bundle.js';
    webpackconfig.devtool = 'source-map';
    webpackconfig.plugins.push(new ExtractTextPlugin('style.css'));
}

module.exports = webpackconfig;
