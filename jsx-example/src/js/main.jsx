"use strict";

require("../../../common/es5BindShim");
var React = require("react");
var HelloJSX = require("./helloJSX");

React.render(
    <HelloJSX/>,
    document.getElementById("root")
);
