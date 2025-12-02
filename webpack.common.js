import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

export default {
    entry: {
        // app: './src/index.js'
        homepage: './src/index.js',
        ourstory: './src/pages/Our_Story/index.js',
        ffxivtales: './src/pages/FFXIV_Tales/index.js',
        watchlist: './src/pages/Watchlist/index.js',
        shared: './src/components/Shared/index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['shared', 'homepage', 'runtime']
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/Our_Story/ourstory.html',
            filename: 'pages/Our_Story/ourstory.html',
            chunks: ['shared', 'ourstory', 'runtime']
        }),
        new HtmlWebpackPlugin({
            template: './src/pages//FFXIV_Tales/ffxivtales.html',
            filename: 'pages/FFXIV_Tales/ffxivtales.html',
            chunks: ['shared', 'ffxivtales', 'runtime']
        }),
        new HtmlWebpackPlugin({
            template: './src/pages//Watchlist/watchlist.html',
            filename: 'pages//Watchlist/watchlist.html',
            chunks: ['shared', 'watchlist', 'runtime']
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: './src/assets/images',
                    to: 'assets/images/[path][name][ext]'
                }
            ]
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
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            }
        ]
    },
    optimization: {
        runtimeChunk: 'single'
    }
};
