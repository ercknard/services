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
var Raz = /** @class */ (function (_super) {
    __extends(Raz, _super);
    function Raz() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    Raz.prototype.render = function () {
        return (react_1["default"].createElement("div", { 
            // data-aos="fade-down"
            //   data-aos-duration="750"
            //   data-aos-anchor-placement="bottom-bottom"
            className: "contacts-container-8 contacts-container" },
            react_1["default"].createElement("div", { className: "flip-card" },
                react_1["default"].createElement("div", { className: "flip-card-front to-raz" },
                    react_1["default"].createElement("div", { className: "inner" },
                        react_1["default"].createElement("div", { className: "to-raz-bg" },
                            react_1["default"].createElement(image_1["default"], { className: "contact-mug to-mug s8", alt: "front-logo", src: "/images/raz-nobg-2.webp", width: "512", height: "512" })),
                        react_1["default"].createElement("h3", null, " RasAlGhul "),
                        react_1["default"].createElement("h4", null, " Developer "),
                        react_1["default"].createElement("p", { className: "to-tertiary1" }, "\u2756"))),
                react_1["default"].createElement("div", { className: "flip-card-back to-raz" },
                    react_1["default"].createElement("div", { className: "inner" },
                        react_1["default"].createElement("div", { className: "to-raz-bg1" },
                            react_1["default"].createElement(image_1["default"], { className: "contact-mug", alt: "front-logo", src: "/images/raz.webp", width: "512", height: "512" }),
                            react_1["default"].createElement(image_1["default"], { className: "contact-mug s7 to-special-erc to-abs", alt: "front-logo", src: "/images/raz-nobg-2.webp", width: "512", height: "512" })),
                        react_1["default"].createElement("div", { className: "details-bg" },
                            react_1["default"].createElement("div", { className: "contact-name raz-name" }, " RasAlGhul "),
                            react_1["default"].createElement("div", { className: "contact-description" },
                                react_1["default"].createElement("ul", null,
                                    react_1["default"].createElement("li", { className: "raz-list" }, " Photograher "),
                                    react_1["default"].createElement("li", { className: "raz-list" }, " Consultant "),
                                    react_1["default"].createElement("li", { className: "raz-list" }, " Developer "))),
                            react_1["default"].createElement("div", { className: "to-flex to-gap z" },
                                react_1["default"].createElement("a", { className: "contact-button raz", href: "https://discord.com/users/306288896516423680", target: "_blank" },
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement("button", { type: "button", className: "home-button-txt" },
                                            react_1["default"].createElement(ContactPageOutlined_1["default"], null),
                                            " Discord"))),
                                react_1["default"].createElement("a", { className: "contact-button raz t", href: "mailto:ras@cryptech.services", target: "_blank" },
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement("button", { type: "button", className: "home-button-txt" },
                                            react_1["default"].createElement(AlternateEmailOutlined_1["default"], null),
                                            " Email"))))))))));
    };
    return Raz;
}(react_1.Component));
exports["default"] = Raz;
