import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    entry: {
        // app: './src/index.js'
        homepage: './src/index.js',
        ourstory: './src/components/OurStory/index.js',
        ffxivtales: './src/components/FFXIVTales/index.js',
        watchlist: './src/components/Watchlist/index.js',
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
            template: './src/pages/watchlist.html',
            filename: 'pages/watchlist.html',
            chunks: ['shared', 'watchlist', 'runtime']
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
