"use strict";
var pkg = require("../package.json");
var dirs = pkg.projectConfig.dirs;

var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: __dirname + "/" + dirs.src + "/js/main.js",
    output: {
        publicPath: "/",
        path: __dirname + "/" + dirs.dist,
        filename: "js/[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style/url!file?context=" + dirs.src + "&name=[path][hash].[ext]"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        })
    ],
    devServer: {
        contentBase: dirs.dist,
        publicPath: "/",
        stats: {colors: true}
    }
};
