"use strict";
var pkg = require("../package.json");
var dirs = pkg.projectConfig.dirs;

var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: __dirname + "/" + dirs.src + "/typescript/main",
    output: {
        publicPath: "/",
        path: __dirname + "/" + dirs.dist,
        filename: "js/[name]-[hash].js"
    },
    resolve: {
        extensions: ["", ".js", ".ts"]
    },
    module: {
        loaders: [
            {test: /\.ts/, loader: "ts-loader"},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: dirs.src + "/index.html"
        })
    ],
    devServer: {
        contentBase: dirs.dist,
        publicPath: "/",
        stats: {colors: true}
    }
};
