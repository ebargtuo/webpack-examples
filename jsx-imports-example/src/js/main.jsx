"use strict";

var React = require("react");
var HelloJSX = require("./helloJSX");
var HelloImports = require("./helloImports");

React.render(
    <div>
        <HelloJSX/>
        <HelloImports/>
    </div>,
    document.getElementById("root")
);
