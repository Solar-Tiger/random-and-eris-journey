import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    entry: {
        app: './src/index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/about.html',
            filename: 'pages/about.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/ourstory.html',
            filename: 'pages/ourstory.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/ffxivtales.html',
            filename: 'pages/ffxivtales.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/watchlist.html',
            filename: 'pages/watchlist.html'
        })
    ],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve('dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.html$/i, // 👈 New rule for HTML files
                loader: 'html-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset'
            }
        ]
    },
    optimization: {
        runtimeChunk: 'single'
    }
};
