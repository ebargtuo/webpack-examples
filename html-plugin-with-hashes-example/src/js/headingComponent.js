"use strict";

var render = function() {
    var title = document.createElement("h1");
    var body = document.getElementsByTagName("body")[0];
    title.appendChild(document.createTextNode("Hello webpack HTML plugin (with hashes)!"));
    body.appendChild(title);
};

module.exports = {render: render};
