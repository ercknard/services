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
var VerifiedUser_1 = require("@mui/icons-material/VerifiedUser");
var StackAudit = /** @class */ (function (_super) {
    __extends(StackAudit, _super);
    function StackAudit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    StackAudit.prototype.render = function () {
        return (react_1["default"].createElement("section", { className: "services-container", id: "audits", "data-color": "rgb(176, 117, 248)" },
            react_1["default"].createElement("div", { className: "to-width to-flex to-height to-center to-column to-align" },
                react_1["default"].createElement("div", { className: "to-flex" },
                    react_1["default"].createElement("div", { "data-aos": "fade-right", "data-aos-duration": "1500", "data-aos-anchor-placement": "bottom-bottom" },
                        react_1["default"].createElement("div", { className: "text-motion section-title-logo to-secondary team-title" },
                            " ",
                            "\u2756",
                            " "),
                        react_1["default"].createElement("div", { className: "title-audit to-centers" },
                            react_1["default"].createElement("div", { className: "text-motion section-title project-title to-secondary" },
                                " ",
                                "STACKOFSTAKE AUDIT",
                                " ")),
                        react_1["default"].createElement("div", { "data-aos": "fade-right", "data-aos-duration": "1500", "data-aos-anchor-placement": "bottom-bottom", className: "section-desc to-centers" },
                            " ",
                            "Cryptech Services was contracted by",
                            " ",
                            react_1["default"].createElement("a", { href: "https://kb.stackofstake.com/", target: "_blank" },
                                react_1["default"].createElement("span", { className: "we-logo-second to-bold" }, " StackOfStake")),
                            " ",
                            "project to conduct a penetration test in order to determine its exposure to a targeted attack."),
                        react_1["default"].createElement("div", { className: "to-flex to-centers" },
                            react_1["default"].createElement("span", { className: "to-audit" }, " View Audit Report : "),
                            react_1["default"].createElement("a", { className: "project-button to-secondary", href: "https://kb.stackofstake.com/wp-content/uploads/2020/11/stackofstake-com-audit-cryptech-services.pdf", target: "_blank" },
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement("button", { type: "button", className: "home-button-txt" },
                                        react_1["default"].createElement(VerifiedUser_1["default"], null),
                                        " Audit"))))))),
            react_1["default"].createElement(image_1["default"], { className: "sales-1-land-pic", alt: "front-logo", src: "/images/observe-up.webp", width: "3620", height: "1377" })));
    };
    return StackAudit;
}(react_1.Component));
exports["default"] = StackAudit;
