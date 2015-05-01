"use strict";

require("../css/headingComponent.css");

var render = function() {
    var title = document.createElement("h1");
    var body = document.getElementsByTagName("body")[0];
    title.appendChild(document.createTextNode("Hello webpack style and file loaders!"));
    body.appendChild(title);
};

module.exports = {render: render};
