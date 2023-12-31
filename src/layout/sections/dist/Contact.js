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
var image_1 = require("next/image");
var react_1 = require("react");
var LayersOutlined_1 = require("@mui/icons-material/LayersOutlined");
var CurrencyBitcoinOutlined_1 = require("@mui/icons-material/CurrencyBitcoinOutlined");
var DrawOutlined_1 = require("@mui/icons-material/DrawOutlined");
var SupportAgentOutlined_1 = require("@mui/icons-material/SupportAgentOutlined");
var DataObject_1 = require("@mui/icons-material/DataObject");
var Brush_1 = require("@mui/icons-material/Brush");
var images = [
    "/images/undraw_building_websites_i78t.svg",
    "/images/undraw_nakamoto_-2-iv6.svg",
    "/images/undraw_ethereum_re_0m68.svg",
    "/images/undraw_heatmap_uyye.svg",
    "/images/undraw_image_viewer_re_7ejc.svg",
    "/images/undraw_instant_support_re_s7un.svg",
];
var Support = /** @class */ (function (_super) {
    __extends(Support, _super);
    function Support() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    Support.prototype.render = function () {
        return (react_1["default"].createElement("section", { className: "support-container", id: "sales", "data-color": "rgb(182, 67, 174)" },
            react_1["default"].createElement("div", { className: "to-width to-height to-center to-flex-column" },
                react_1["default"].createElement("div", { className: "to-left" },
                    react_1["default"].createElement("div", { className: "text-motion section-title-logo to-primary" }, " \u2756 "),
                    react_1["default"].createElement("div", { className: "title-support" },
                        react_1["default"].createElement("div", { className: "text-motion section-title to-primary" },
                            " ",
                            "CRYPTECH SERVICES",
                            " "),
                        " ")),
                react_1["default"].createElement("div", { className: "containers" },
                    react_1["default"].createElement("div", { className: "carousels" },
                        react_1["default"].createElement("input", { type: "radio", name: "slides", id: "slide-1" }),
                        react_1["default"].createElement("input", { type: "radio", name: "slides", id: "slide-2" }),
                        react_1["default"].createElement("input", { type: "radio", name: "slides", id: "slide-3" }),
                        react_1["default"].createElement("input", { type: "radio", name: "slides", id: "slide-4" }),
                        react_1["default"].createElement("input", { type: "radio", name: "slides", id: "slide-5" }),
                        react_1["default"].createElement("input", { type: "radio", name: "slides", id: "slide-6" }),
                        react_1["default"].createElement("ul", { className: "carousel__slides" },
                            react_1["default"].createElement("li", { className: "carousel__slide" },
                                react_1["default"].createElement("figure", { className: "r" },
                                    react_1["default"].createElement("span", { className: "to-center" },
                                        react_1["default"].createElement(image_1["default"], { className: "car b1", src: "/images/undraw_building_websites_i78t.svg", alt: "car", width: "500", height: "500" })),
                                    react_1["default"].createElement("span", { className: "nomors" },
                                        " ",
                                        react_1["default"].createElement("span", null,
                                            react_1["default"].createElement("span", { className: "text-motion section-title project-title to-primary s service-title" },
                                                " ",
                                                "Full-Stack Web Development:"),
                                            " ",
                                            react_1["default"].createElement("br", null),
                                            react_1["default"].createElement("span", { className: "section-desc" },
                                                " ",
                                                "Our full-stack web development approach involves proficiently handling both front-end and back-end aspects to deliver comprehensive and dynamic web solutions.")),
                                        " "))),
                            react_1["default"].createElement("li", { className: "carousel__slide" },
                                react_1["default"].createElement("figure", { className: "r" },
                                    react_1["default"].createElement("span", { className: "to-center" },
                                        react_1["default"].createElement(image_1["default"], { className: "car b2", src: "/images/undraw_nakamoto_-2-iv6.svg", alt: "car", width: "500", height: "500" })),
                                    react_1["default"].createElement("span", { className: "nomors" },
                                        " ",
                                        react_1["default"].createElement("span", null,
                                            react_1["default"].createElement("span", { className: "text-motion section-title project-title to-secondary s service-title" },
                                                " ",
                                                "Web3 And DAPP Development:"),
                                            " ",
                                            react_1["default"].createElement("br", null),
                                            react_1["default"].createElement("span", { className: "section-desc" },
                                                " ",
                                                "As experts in Web3 and DApp development, we harness the power of decentralized technologies to build immersive and user-friendly applications.")),
                                        " "))),
                            react_1["default"].createElement("li", { className: "carousel__slide" },
                                react_1["default"].createElement("figure", { className: "r" },
                                    react_1["default"].createElement("span", { className: "to-center" },
                                        react_1["default"].createElement(image_1["default"], { className: "car b3", src: "/images/undraw_ethereum_re_0m68.svg", alt: "car", width: "500", height: "500" })),
                                    react_1["default"].createElement("span", { className: "nomors" },
                                        " ",
                                        react_1["default"].createElement("span", null,
                                            react_1["default"].createElement("span", { className: "text-motion section-title project-title to-tertiary s service-title" },
                                                " ",
                                                "Solidity Development:"),
                                            " ",
                                            react_1["default"].createElement("br", null),
                                            react_1["default"].createElement("span", { className: "section-desc" },
                                                " ",
                                                "We specialize in Solidity smart contract development, creating secure and efficient blockchain-based solutions tailored to your specific decentralized application needs.")),
                                        " "))),
                            react_1["default"].createElement("li", { className: "carousel__slide" },
                                react_1["default"].createElement("figure", { className: "r" },
                                    react_1["default"].createElement("span", { className: "to-center" },
                                        react_1["default"].createElement(image_1["default"], { className: "car b7", src: "/images/undraw_heatmap_uyye (1).svg", alt: "car", width: "500", height: "500" })),
                                    react_1["default"].createElement("span", { className: "nomors" },
                                        " ",
                                        react_1["default"].createElement("span", null,
                                            react_1["default"].createElement("span", { className: "text-motion section-title project-title to-seventh s service-title" },
                                                " ",
                                                "Web Design:"),
                                            " ",
                                            react_1["default"].createElement("br", null),
                                            react_1["default"].createElement("span", { className: "section-desc" },
                                                " ",
                                                "Our web design approach focuses on crafting user-centric and aesthetically pleasing websites that align with your brand identity and business goals.")),
                                        " "))),
                            react_1["default"].createElement("li", { className: "carousel__slide" },
                                react_1["default"].createElement("figure", { className: "r" },
                                    react_1["default"].createElement("span", { className: "to-center" },
                                        react_1["default"].createElement(image_1["default"], { className: "car b4", src: "/images/undraw_design_team_re_gh2d.svg", alt: "car", width: "500", height: "500" })),
                                    react_1["default"].createElement("span", { className: "nomors" },
                                        " ",
                                        react_1["default"].createElement("span", null,
                                            react_1["default"].createElement("span", { className: "text-motion section-title project-title to-quaternary s service-title" },
                                                " ",
                                                "Graphic Design:"),
                                            react_1["default"].createElement("br", null),
                                            react_1["default"].createElement("span", { className: "section-desc" },
                                                " ",
                                                "Our graphic design services involve translating your brand identity and messaging into visually compelling designs.",
                                                " ")),
                                        " "))),
                            react_1["default"].createElement("li", { className: "carousel__slide" },
                                react_1["default"].createElement("figure", { className: "r" },
                                    react_1["default"].createElement("span", { className: "to-center" },
                                        react_1["default"].createElement(image_1["default"], { className: "car b5", src: "/images/undraw_conference_re_2yld.svg", alt: "car", width: "500", height: "500" })),
                                    react_1["default"].createElement("span", { className: "nomors" },
                                        " ",
                                        react_1["default"].createElement("span", null,
                                            react_1["default"].createElement("span", { className: "text-motion section-title project-title to-quinary s service-title" },
                                                " ",
                                                "Technical Consultation:"),
                                            " ",
                                            react_1["default"].createElement("br", null),
                                            react_1["default"].createElement("span", { className: "section-desc" },
                                                " ",
                                                "We offer technical consultation by deeply understanding your project goals and challenges, and then providing targeted expertise and strategic guidance to optimize your systems, resolve technical issues, and enhance overall project success.")),
                                        " ")))))),
                react_1["default"].createElement("div", { className: "lest" },
                    react_1["default"].createElement("ul", null,
                        react_1["default"].createElement("li", { "data-aos": "fade-up", "data-aos-duration": "500", "data-aos-anchor-placement": "bottom-bottom", className: "icos" },
                            react_1["default"].createElement("label", { htmlFor: "slide-1" },
                                react_1["default"].createElement("div", { className: "icon" },
                                    react_1["default"].createElement(LayersOutlined_1["default"], { className: "we-logo-first ico" })),
                                react_1["default"].createElement("div", { className: "title" }, "Full-Stack Web Development"))),
                        react_1["default"].createElement("li", { "data-aos": "fade-up", "data-aos-duration": "1000", "data-aos-anchor-placement": "bottom-bottom", className: "icos" },
                            react_1["default"].createElement("label", { htmlFor: "slide-2" },
                                react_1["default"].createElement("div", { className: "icon" },
                                    react_1["default"].createElement(CurrencyBitcoinOutlined_1["default"], { className: "we-logo-second ico" })),
                                react_1["default"].createElement("div", { className: "title" }, "Web3 and DAPP Development"))),
                        react_1["default"].createElement("li", { "data-aos": "fade-up", "data-aos-duration": "1500", "data-aos-anchor-placement": "bottom-bottom", className: "icos" },
                            react_1["default"].createElement("label", { htmlFor: "slide-3" },
                                react_1["default"].createElement("div", { className: "icon" },
                                    react_1["default"].createElement(DataObject_1["default"], { className: "we-logo-third ico" })),
                                react_1["default"].createElement("div", { className: "title" }, "Solidity Development"))),
                        react_1["default"].createElement("li", { "data-aos": "fade-up", "data-aos-duration": "2000", "data-aos-anchor-placement": "bottom-bottom", className: "icos" },
                            react_1["default"].createElement("label", { htmlFor: "slide-4" },
                                react_1["default"].createElement("div", { className: "icon" },
                                    react_1["default"].createElement(Brush_1["default"], { className: "we-logo-sixth ico" })),
                                react_1["default"].createElement("div", { className: "title" }, "Web Design"))),
                        react_1["default"].createElement("li", { "data-aos": "fade-up", "data-aos-duration": "2500", "data-aos-anchor-placement": "bottom-bottom", className: "icos" },
                            react_1["default"].createElement("label", { htmlFor: "slide-5" },
                                react_1["default"].createElement("div", { className: "icon" },
                                    react_1["default"].createElement(DrawOutlined_1["default"], { className: "we-logo-fourth ico" })),
                                react_1["default"].createElement("div", { className: "title" }, "Graphic Design"))),
                        react_1["default"].createElement("li", { "data-aos": "fade-up", "data-aos-duration": "3000", "data-aos-anchor-placement": "bottom-bottom", className: "icos" },
                            react_1["default"].createElement("label", { htmlFor: "slide-6" },
                                react_1["default"].createElement("div", { className: "icon" },
                                    react_1["default"].createElement(SupportAgentOutlined_1["default"], { className: "we-logo-fifth ico" })),
                                react_1["default"].createElement("div", { className: "title" }, "Technical Consultation")))))),
            react_1["default"].createElement(image_1["default"], { className: "sales-1-land-pic", alt: "front-logo", src: "/images/observe-up.webp", width: "3620", height: "1377" })));
    };
    return Support;
}(react_1.Component));
exports["default"] = Support;
