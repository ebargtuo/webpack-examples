"use strict";

var commonBaseDir = "../../../";

var tst = require(commonBaseDir + "common/test/webdriverTestHelper");
var webpackDevServer = require(commonBaseDir + "common/test/webpackDevServerHelper");
var webpackConfig = require("../../webpack.config.js");

var expect = require("chai").expect;

webpackDevServer.start(webpackConfig);

tst.bootstrap({withConnectServer: false});

tst.describe("webpack style and CSS inline example", function() {

    tst.describe("index page", function() {
        tst.before(function() {
            this.driver.get("http://localhost:5000");
        });

        tst.it("should have the right title", function() {
            this.driver.getTitle().then(function(title) {
                expect(title).to.equal("Webpack Examples | Basic With Style and CSS");
            });
        });

        tst.it("should have the right main heading", function() {
            expect("h1").dom.to.have.text("Hello webpack style and CSS loaders!");
        });

        tst.it("should have inline style", function() {
            this.driver.getPageSource().then(function(content) {
                expect(content).to.match(/<style[\s\S]*background-color[\s\S]*<\/style>/i);
            });
        });
    });

    tst.describe("/webpack-dev-server/", function() {
        tst.before(function() {
            this.driver.get("http://localhost:5000/webpack-dev-server/");
        });

        tst.it("should have the webpack ok status", function() {
            expect("#status").dom.to.have.text("App ready.");
        });

        tst.it("should have the right main heading", function() {
            this.driver.switchTo().frame("iframe");
            expect("h1").dom.to.have.text("Hello webpack style and CSS loaders!");
            this.driver.switchTo().defaultContent();
        });
    });

});
