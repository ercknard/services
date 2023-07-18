"use client";
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var CurrencyBitcoinOutlined_1 = require("@mui/icons-material/CurrencyBitcoinOutlined");
var PrecisionManufacturingOutlined_1 = require("@mui/icons-material/PrecisionManufacturingOutlined");
var ShieldOutlined_1 = require("@mui/icons-material/ShieldOutlined");
var Sales = /** @class */ (function (_super) {
    __extends(Sales, _super);
    function Sales() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    Sales.prototype.render = function () {
        return (react_1["default"].createElement("section", { className: 'sales-container' },
            react_1["default"].createElement("div", { className: "to-width to-height to-center to-flex" },
                react_1["default"].createElement("div", { "data-aos": "fade-right", "data-aos-duration": "1500", "data-aos-anchor-placement": "bottom-bottom", className: 'home-welcome-border' },
                    react_1["default"].createElement("div", { className: 'sale-welcome-message' },
                        "What we do? ",
                        react_1["default"].createElement("div", { className: 'color-effect' }, " in Cryptech Services, ")),
                    react_1["default"].createElement("p", { className: 'sale-welcome-sub-message' },
                        " We provide web3 and fullstack development services and support, primarily focusing on ",
                        react_1["default"].createElement("span", { className: 'we-logo-first' }, "cryptocurrency "),
                        ", ",
                        react_1["default"].createElement("span", { className: 'we-logo-second' }, "blockchain technology "),
                        "and ",
                        react_1["default"].createElement("span", { className: 'we-logo-third' }, " cyber security. "))),
                react_1["default"].createElement("div", { className: 'we-do-container' },
                    react_1["default"].createElement("div", { className: 'we-do', "data-aos": "fade-up", "data-aos-duration": "1500", "data-aos-anchor-placement": "bottom-bottom" },
                        react_1["default"].createElement(CurrencyBitcoinOutlined_1["default"], { className: 'we-logo we-logo-first' }),
                        react_1["default"].createElement("div", { className: 'we-do-title' }, " Cryptocurrency ")),
                    react_1["default"].createElement("div", { className: 'we-do', "data-aos": "fade-down", "data-aos-duration": "1500", "data-aos-anchor-placement": "bottom-bottom" },
                        react_1["default"].createElement(PrecisionManufacturingOutlined_1["default"], { className: 'we-logo we-logo-second' }),
                        react_1["default"].createElement("div", { className: 'we-do-title' }, " Blockchain Tech. ")),
                    react_1["default"].createElement("div", { className: 'we-do', "data-aos": "fade-up", "data-aos-duration": "1500", "data-aos-anchor-placement": "bottom-bottom" },
                        react_1["default"].createElement(ShieldOutlined_1["default"], { className: 'we-logo we-logo-third' }),
                        react_1["default"].createElement("div", { className: 'we-do-title' }, " Cyber Security ")))),
            react_1["default"].createElement(image_1["default"], { className: "sales-land-pic reflect", alt: 'front-logo', src: "/images/sales.png", width: "3620", height: "1671" })));
    };
    return Sales;
}(react_1.Component));
exports["default"] = Sales;