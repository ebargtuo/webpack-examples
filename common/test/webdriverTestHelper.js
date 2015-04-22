"use strict";

var webdriver = require("selenium-webdriver");
var testing = require("selenium-webdriver/testing");

var isBootstrapped = false;

testing.withConnectServer = function(root, port) {
    var connect = require("connect");
    var http = require("http");
    var morgan = require("morgan");
    var serveStatic = require("serve-static");

    var server;

    testing.before(function() {
        root = root || ".";
        port = port || 5000;

        var app = connect()
          .use(morgan("dev"))
          .use(serveStatic(root));

        server = http.createServer(app);
        server.listen(port);

        console.info('Started server on "http://0.0.0.0:' + port + '" at root "' + root + '"');
    });

    testing.after(function() {
        server.close();
    });

    return testing;
};

testing.withPhantomJsDriver = function() {
    testing.before(function() {
        this.driver = new webdriver.Builder()
            .forBrowser("phantomjs")
            .build();
    });

    testing.after(function() {
        this.driver.quit();
    });

    return testing;
};

testing.withChaiWebDriver = function() {
    var chai = require("chai");
    var chaiWebdriver = require("chai-webdriver");

    testing.before(function() {
        chai.use(chaiWebdriver(this.driver));
    });

    return testing;
};

testing.bootstrap = function(opts) {
    if (!isBootstrapped) {
        if (false !== opts.withConnectServer) {
            testing.withConnectServer(opts.root);
        }
        if (false !== opts.withPhantomJsDriver) {
            testing.withPhantomJsDriver();
        }
        if (false !== opts.withChaiWebDriver) {
            testing.withChaiWebDriver();
        }
        isBootstrapped = true;
    }
};

module.exports = testing;
