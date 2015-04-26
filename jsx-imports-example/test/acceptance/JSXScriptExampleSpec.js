"use strict";

var commonBaseDir = "../../../";
var dirs = require(commonBaseDir + "package.json").projectConfig.dirs;

var tst = require(commonBaseDir + "common/test/webdriverTestHelper");

var expect = require("chai").expect;

tst.bootstrap({root: dirs.dist});

tst.describe("webpack basic example", function() {

    tst.describe("index page", function() {
        tst.before(function() {
            this.driver.get("http://localhost:5000");
        });

        tst.it("should have the right title", function() {
            this.driver.getTitle().then(function(title) {
                expect(title).to.equal("Webpack Examples | JSX and Imports Loader");
            });
        });

        tst.it("should have the right first main heading", function() {
            expect("h1:first").dom.to.have.text("Hello webpack JSX loader!");
        });

        tst.it("should have the right second main heading", function() {
            expect("h1:last").dom.to.have.text("Hello webpack imports loader!");
        });

    });

});
