const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  watch: false,
  watchOptions: {
      ignored: '/node_modules/'
  },
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'app.js'
  },
  module: {
      rules: [
          {
            test: /\.css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: './docs'
                    }
                },
                "css-loader"
            ]
        },
        {
            test: /\.scss$/,
            use: [
                {loader: "style-loader"},
                {loader: "css-loader"},
                {loader: "sass-loader"}
            ]
        },
        {
            test: /\.json$/,
            loader: 'json-loader'
        },
        {
            test: /\.html$/,
            use: [{ 
                loader:'html-loader'
            }]          
        },
        {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                'file-loader',
                {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true, // webpack@1.x
                        disable: true,
                    }
                }
            ]
        },
    ],
    stats: {
        errorDetails: true,
        errors: true
    },
    devServer: {
        contentBase: './docs',
        compress: true,
        port: 9000,
        publicPath: '/',
        watchContentBase: true,
        hot: true,
        inline: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "app.css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new copyWebpackPlugin([
            {
                from: './src/templates',
                to: 'templates/',
                toType: 'dir'
            },
            {
                from: 'data.json',
                to: 'data.json',
                toType: 'file'
            }
        ])
    ]
};
