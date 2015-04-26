"use strict";

var React = require("react");

var HelloImports = React.createClass({
    render: function() {
        return (
            <h1>Hello webpack imports loader!</h1>
        );
    }
});

module.exports = HelloImports;
