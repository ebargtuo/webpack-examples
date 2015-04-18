"use strict";

var dirs = require("../../../package.json").projectConfig.dirs;

var connect = require("connect");
var http = require("http");
var morgan = require("morgan");
var serveStatic = require("serve-static");

var webdriver = require("selenium-webdriver");
var tst = require("selenium-webdriver/testing");
var By = require("selenium-webdriver").By;
var assert = require("assert");

tst.describe("webpack basic example", function() {
    var driver, server;

    tst.before(function() {
        var app = connect()
          .use(morgan("dev"))
          .use(serveStatic(__dirname + "/../../" + dirs.dist));

        server = http.createServer(app);
        server.listen(5000);

        driver = new webdriver.Builder()
            .forBrowser("phantomjs")
            .build();
    });

    tst.after(function() {
        driver.quit().then(function() {
            server.close();
        });
    });

    tst.describe("index page", function() {
        tst.before(function() {
            driver.get("http://localhost:5000");
        });

        tst.it("should have the right title", function() {
            driver.getTitle().then(function(title) {
                assert.equal("Webpack Examples | Basic", title);
            });
        });

        tst.it("should have the right main heading", function() {
            driver.findElement(By.tagName("h1")).getText().then(function(text) {
                assert.equal("Hello webpack!", text);
            });
        });
    });

});
