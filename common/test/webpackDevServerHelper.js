"use strict";

var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

var startServer = function(webpackConfig) {
    var webpackDevConfig = Object.create(webpackConfig);
    webpackDevConfig.debug = true;

    var compiler = webpack(webpackConfig);
    var webpackDevServer = new WebpackDevServer(compiler, webpackConfig.devServer);

    webpackDevServer.listen(5000, "0.0.0.0", function(err) {
        if (err) {
            throw new Error("webpack-dev-server", err);
        }

        console.info("[webpack-dev-server]", "http://0.0.0.0:5000/webpack-dev-server/");
    });
};

module.exports = {
    start: startServer
};
