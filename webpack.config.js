const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const autoprefixer = require("autoprefixer");
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: ["./src/index.js", "./src/index2.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js'
    },
    devServer: {
        //contentBase: path.join(__dirname, "dist"),
        port: 9000,
        //watchContentBase: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/index2.html",
            inject:true,
            chunks: ['index'],
            filename: 'index2.html'
        }),

        new BrowserSyncPlugin({
            host: 'localhost',
            port: 9100,
            proxy: 'http://localhost:9000'
        }, {
            reload: true
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
            postcss: [
            autoprefixer()
            ]
            }
            }),
        new CopyWebpackPlugin([{
                from: './assets',
                to: './assets'
                }]),
    ],
    module: {
        rules: [
            {
            test: /\.scss$/,
            use: [
                // { loader: "style-loader/url" },
                // {
                //     loader: "file-loader",
                //     options: { name: "[name].[ext]" }
                // }
                "style-loader",
                "css-loader",
                "sass-loader",
                "postcss-loader"
            ]
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.(png|svg|jpe?g|gif)$/i,
            use: {
            loader: 'file-loader',
            options: {
                //publicPath: 'built'
                esModule: false,
            }
            },
            },
        {
            test: /\.(html)$/,
            use: ["html-loader"]
        }]
    }
}