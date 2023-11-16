"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var aos_1 = require("aos");
require("aos/dist/aos.css");
var AOScall = function () {
    react_1.useEffect(function () {
        aos_1["default"].init({
            disable: function () {
                var maxWidth = 800;
                return window.innerWidth < maxWidth;
            },
            offset: 50
        });
    }, []);
    return React.createElement(React.Fragment, null);
};
exports["default"] = AOScall;
