"use strict";

var commonBaseDir = "../../../";
var dirs = require(commonBaseDir + "package.json").projectConfig.dirs;

var tst = require(commonBaseDir + "common/test/webdriverTestHelper");

var expect = require("chai").expect;

tst.bootstrap({root: dirs.dist});

tst.describe("webpack basic example with a require", function() {

    tst.describe("index page", function() {
        tst.before(function() {
            this.driver.get("http://localhost:5000");
        });

        tst.it("should have the right title", function() {
            this.driver.getTitle().then(function(title) {
                expect(title).to.equal("Webpack Examples | Basic With Require");
            });
        });

        tst.it("should have the right main heading", function() {
            expect("h1").dom.to.have.text("Hello webpack!");
        });
    });

});
