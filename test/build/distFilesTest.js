// Adapted from: https://github.com/h5bp/html5-boilerplate/blob/master/test/file_existence.js
// Adapted parts: Copyright (c) HTML5 Boilerplate
"use strict";

var assert = require("assert");
var fs = require("fs");
var path = require("path");

var pkg = require("./../../package.json");
var dirs = pkg.projectConfig.dirs;

var defaultExpectedFiles = [
    "index.html",

    "js/",
        "js/main.js",
];

var expectedFilesInDistDirs = [

    {
        dir: "basic-example",
        files: defaultExpectedFiles
    },
    {
        dir: "basic-with-require-example",
        files: defaultExpectedFiles
    },
    {
        dir: "js-hint-example",
        files: defaultExpectedFiles
    },
    {
        dir: "jscs-example",
        files: defaultExpectedFiles
    },
    {
        dir: "webpack-dev-server-example",
        files: defaultExpectedFiles
    },
    {
        dir: "jsx-example",
        files: defaultExpectedFiles
    },
    {
        dir: "jsx-imports-example",
        files: defaultExpectedFiles
    },
    {
        dir: "html-plugin-example",
        files: defaultExpectedFiles
    },
    {
        dir: "style-css-inline-example",
        files: defaultExpectedFiles
    },
    {
        dir: "style-css-link-example",
        files: defaultExpectedFiles.concat([
            "css/",
                /css\/[a-zA-Z0-9]+\.css/
        ])
    },
    {
        dir: "html-plugin-with-hashes-example",
        files: [
            "index.html",

            "js/",
                /js\/main-[a-zA-Z0-9]+\.js/,
        ]
    },
    {
        dir: "coffeescript-example",
        files: [
            "index.html",

            "js/",
                /js\/main-[a-zA-Z0-9]+\.js/,
        ]
    },
    {
        dir: "typescript-example",
        files: [
            "index.html",

            "js/",
                /js\/main-[a-zA-Z0-9]+\.js/,
        ]
    }

];

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function checkFiles(directory, expectedFiles) {

    // Get the list of files from the specified directory
    var files = require("glob").sync("**/*", {
        cwd: directory,
        dot: true,      // include hidden files
        mark: true      // add a `/` character to directory matches
    });
    var filesAsString = files.join("|");

    // Check if all expected files are present in the
    // specified directory, and are of the expected type
    expectedFiles.forEach(function(file) {

        var ok = false;

        // If file exists
        if (files.indexOf(file) !== -1) {
            var expectedFileType = "/" !== file.slice(-1) ? "regular file" : "directory";

            // Check if the file is of the correct type
            if ("/" !== file.slice(-1)) {
                // Check if the file is really a regular file
                ok = fs.statSync(path.resolve(directory, file)).isFile();
            } else {
                // Check if the file is a directory
                // (Since glob adds the `/` character to directory matches,
                // we can simply check if the `/` character is present)
                ok = "/" === files[files.indexOf(file)].slice(-1);
            }

            it('"' + file + '" should be present and should be a ' + expectedFileType, function() {
                assert.equal(true, ok);
            });

            return;

        } else if ("[object RegExp]" === Object.prototype.toString.call(file)) {
            ok = file.test(filesAsString);
            // remove matches to avoid the non-found rule
            filesAsString = filesAsString.replace(file, "");
        }

        it('"' + file + '" should be present', function() {
            assert.equal(true, ok);
        });

    });

    // List all files that should be NOT
    // be present in the specified directory
    (filesAsString.split("|").filter(function(file) {
        return "" !== file && expectedFiles.indexOf(file) === -1;
    })).forEach(function(file) {
        it('"' + file + '" should NOT be present', function() {
            assert(false);
        });
    });

}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

describe("Test if all the expected files, and only them, are present in the build directories", function() {

    expectedFilesInDistDirs.forEach(function(distDir) {
        var distDirName = path.join(distDir.dir, dirs.dist);
        describe(distDirName, function() {
            checkFiles(distDirName, distDir.files);
        });
    });

});
