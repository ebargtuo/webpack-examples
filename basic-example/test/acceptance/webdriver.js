"use strict";

var dirs = require("../../../package.json").projectConfig.dirs;

var connect = require("connect");
var http = require("http");
var morgan = require("morgan");
var serveStatic = require("serve-static");

var app = connect()
  .use(morgan("dev"))
  .use(serveStatic(__dirname + "/../../" + dirs.dist));

var server = http.createServer(app);
server.listen(5000);

var webdriver = require("selenium-webdriver");
var By = require("selenium-webdriver").By;
var assert = require("assert");

var driver = new webdriver.Builder()
    .forBrowser("phantomjs")
    .build();

driver.get("http://localhost:5000");

driver.getTitle().then(function(title) {
    assert.equal("Webpack Examples | Basic", title);
});

driver.findElement(By.tagName("h1")).getText().then(function(text) {
    assert.equal("Hello webpack!", text);
});

driver.quit().then(function() {
    server.close();
});
