/*global require*/
require("babel-runtime/core-js/promise").default = require("bluebird");
Promise.config({
    warnings: false
});

import React from "react";
import ReactDOM from "react-dom";
import StatusDashboard from "./app/StatusDashboard";
import "./style.less";

ReactDOM.render(
    <StatusDashboard/>,
    document.getElementById("main")
);