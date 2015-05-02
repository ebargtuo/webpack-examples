"use strict";
var pkg = require("../package.json");
var dirs = pkg.projectConfig.dirs;

var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: __dirname + "/" + dirs.src + "/js/main.js",
    output: {
        publicPath: "/",
        path: __dirname + "/" + dirs.dist,
        filename: "js/[name]-[hash].js"
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
