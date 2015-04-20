"use strict";
var wrench = require("wrench");
var pkg = require("../package.json");
var dirs = pkg.projectConfig.dirs;

wrench.copyDirSyncRecursive(dirs.src, dirs.dist, {include: /\.html$/});

module.exports = {
    entry: __dirname + "/" + dirs.src + "/js/main.js",
    output: {
        publicPath: "/js/",
        path: __dirname + "/" + dirs.dist + "/js/",
        filename: "[name].js"
    },

    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "jshint-loader"
            }
        ]
    },

    jshint: {
        camelcase: true,
        emitErrors: false,
        failOnHint: false
    }
};
