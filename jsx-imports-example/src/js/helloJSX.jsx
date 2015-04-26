"use strict";

var React = require("react");

var HelloJSX = React.createClass({
    render: function() {
        return (
            <h1>Hello webpack JSX loader!</h1>
        );
    }
});

module.exports = HelloJSX;
