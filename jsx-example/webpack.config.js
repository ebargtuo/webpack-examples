"use strict";
var wrench = require("wrench");
var pkg = require("../package.json");
var dirs = pkg.projectConfig.dirs;

wrench.copyDirSyncRecursive(dirs.src, dirs.dist, {include: /\.html$/});

module.exports = {
    entry: __dirname + "/" + dirs.src + "/js/main.jsx",
    output: {
        publicPath: "/js/",
        path: __dirname + "/" + dirs.dist + "/js/",
        filename: "[name].js"
    },

    resolve: {
        extensions: ["", ".js", ".jsx"]
    },

    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: "jsx-loader?insertPragma=React.DOM"
            }
        ]
    },

    devServer: {
        contentBase: dirs.dist,
        publicPath: "/js/",
        stats: {colors: true}
    }
};
