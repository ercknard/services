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
var ContactPageOutlined_1 = require("@mui/icons-material/ContactPageOutlined");
var AlternateEmailOutlined_1 = require("@mui/icons-material/AlternateEmailOutlined");
var Jekz = /** @class */ (function (_super) {
    __extends(Jekz, _super);
    function Jekz() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    Jekz.prototype.render = function () {
        return (react_1["default"].createElement("div", { "data-aos": "fade-up", "data-aos-duration": "2000", "data-aos-anchor-placement": "bottom-bottom", className: "contacts-container-5 contacts-container" },
            react_1["default"].createElement(image_1["default"], { className: "contact-mug", alt: "front-logo", src: "/images/seqsee.webp", width: "512", height: "512" }),
            react_1["default"].createElement("div", { className: "details-bg" },
                react_1["default"].createElement("div", { className: "contact-name jekz-name" }, " SeqSee "),
                react_1["default"].createElement("div", { className: "contact-description" },
                    react_1["default"].createElement("ul", null,
                        react_1["default"].createElement("li", { className: "jekz-list" }, " Admin "),
                        react_1["default"].createElement("li", { className: "jekz-list" }, " Consultant "),
                        react_1["default"].createElement("li", { className: "jekz-list" }, " Developer"))),
                react_1["default"].createElement("div", { className: "to-flex to-gap z" },
                    react_1["default"].createElement("a", { className: "contact-button jekz", href: "https://discord.com/users/412122437954830337", target: "_blank" },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("button", { type: "button", className: "home-button-txt" },
                                react_1["default"].createElement(ContactPageOutlined_1["default"], null),
                                " Discord"))),
                    react_1["default"].createElement("a", { className: "contact-button jekz t", href: "mailto:seqsee@cryptech.services", target: "_blank" },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("button", { type: "button", className: "home-button-txt" },
                                react_1["default"].createElement(AlternateEmailOutlined_1["default"], null),
                                " Email")))))));
    };
    return Jekz;
}(react_1.Component));
exports["default"] = Jekz;
