const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const webpack = require('webpack');



module.exports = (env) => ({
    entry: './src/index.tsx',
    output : {
        filename: 'index_bundle.js',
        path : path.resolve(__dirname , 'build'),
        publicPath: '/'
    },
    module : {
        rules : [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test : /\.css$/, use:['style-loader', 'css-loader'] },
            { test: /\.(png|jpg|gif)$/, use: [{ loader: 'file-loader', options: { name: '[name].[ext]' } }] }
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'src/index.html'
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
    devServer: {
        hot: true,
        host: process.env.HOST,
        port: process.env.PORT || 8080,
        historyApiFallback: true
    },
    resolve: {
        modules: [path.resolve(__dirname, './src/'), 'node_modules'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
});