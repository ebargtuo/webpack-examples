"use strict";

var render = function() {
    var title = document.createElement("h1") // omit semi-colon deliberately
    var body = document.getElementsByTagName("body")[0];
    title.appendChild(document.createTextNode("Hello webpack JSCS loader!"));
    body.appendChild(title);
};

module.exports = {render: render};
