"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ContactPageOutlined_1 = require("@mui/icons-material/ContactPageOutlined");
var React = require("react");
var ArrowDropDown_1 = require("@mui/icons-material/ArrowDropDown");
function NavLink(_a) {
    var to = _a.to, children = _a.children;
    return (React.createElement("a", { href: to, className: "mx-4" }, children));
}
function MobileNav(_a) {
    var open = _a.open, setOpen = _a.setOpen;
    return (React.createElement("div", { className: "absolute top-0 left-0 h-screen w-screen bg-black transform " + (open ? "-translate-x-0" : "-translate-x-full") + " transition-transform duration-300 ease-in-out filter drop-shadow-md " },
        React.createElement("div", { className: "flex items-center justify-center filter drop-shadow-md h-20" },
            " ",
            React.createElement("a", { className: "text-xl font-semibold mt-3", href: "/" }, "Cryptech Services")),
        React.createElement("div", { className: "flex flex-col ml-4" },
            React.createElement("a", { className: "text-xl font-medium my-4", href: "#sales", onClick: function () {
                    return setTimeout(function () {
                        setOpen(!open);
                    }, 100);
                } }, "Services"),
            React.createElement("a", { className: "text-xl font-normal my-4", href: "#services", onClick: function () {
                    return setTimeout(function () {
                        setOpen(!open);
                    }, 100);
                } }, "Security Services"),
            React.createElement("a", { className: "text-xl font-normal my-4", href: "#team", onClick: function () {
                    return setTimeout(function () {
                        setOpen(!open);
                    }, 100);
                } }, "Team"),
            React.createElement("a", { className: "text-xl font-normal my-4", href: "#metrix", onClick: function () {
                    return setTimeout(function () {
                        setOpen(!open);
                    }, 100);
                } }, "Metrix.Place"),
            React.createElement("a", { className: "text-xl font-normal my-4", href: "#metrimask", onClick: function () {
                    return setTimeout(function () {
                        setOpen(!open);
                    }, 100);
                } }, "MetrixMask Mobile"),
            React.createElement("a", { className: "text-xl font-normal my-4", href: "#cryptechtest", onClick: function () {
                    return setTimeout(function () {
                        setOpen(!open);
                    }, 100);
                } }, "CryptechTest"))));
}
function Navbar() {
    var _a = react_1.useState(false), open = _a[0], setOpen = _a[1];
    return (React.createElement("nav", { className: "nav-main" },
        React.createElement("nav", { className: "nav-bar to-width to-center flex filter drop-shadow-md px-4 py-4 h-24 items-center" },
            React.createElement(MobileNav, { open: open, setOpen: setOpen }),
            React.createElement("div", { className: "w-1/5 flex items-center kolyo" },
                React.createElement("a", { className: "to-hide text-2xl font-bold text-motion reflect-nav sorno sorno-1", href: "/", id: "header" },
                    React.createElement("span", { className: "ct-logo" }, "\u2756"),
                    " ",
                    React.createElement("span", { className: "logos" }, " CRYPTECH SERVICES "))),
            React.createElement("div", { className: "w-3/5 flex justify-evenly items-center to-fonts sersyo" },
                React.createElement("div", { className: "z-50 ham flex relative w-8 h-8 flex-col justify-between items-center md:hidden", onClick: function () {
                        setOpen(!open);
                    } },
                    React.createElement("span", { className: "h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out " + (open ? "rotate-45 translate-y-3.5" : "") }),
                    React.createElement("span", { className: "h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out " + (open ? "w-0" : "w-full") }),
                    React.createElement("span", { className: "h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out " + (open ? "-rotate-45 -translate-y-3.5" : "") })),
                React.createElement("div", { id: "toactive", className: "hidden md:flex" },
                    React.createElement("span", { className: "kek" },
                        React.createElement(NavLink, { to: "#offers" },
                            React.createElement("span", { id: "serv" }, "SERVICES"))),
                    React.createElement("span", { className: "kek" },
                        React.createElement(NavLink, { to: "#services" },
                            React.createElement("span", { id: "secu" }, "SECURITY"))),
                    React.createElement("span", { className: "kek" },
                        React.createElement(NavLink, { to: "#team" },
                            React.createElement("span", { id: "teas" }, "TEAM"))),
                    React.createElement("div", { className: "dropdown" },
                        React.createElement("button", { className: "dropbtn" },
                            "PROJECTS ",
                            React.createElement(ArrowDropDown_1["default"], null),
                            " "),
                        React.createElement("div", { className: "dropdown-content" },
                            React.createElement("span", { className: "kek" },
                                React.createElement(NavLink, { to: "#metrix" },
                                    React.createElement("span", { id: "met" }, "METRIX.PLACE"))),
                            React.createElement("span", { className: "kek" },
                                React.createElement(NavLink, { to: "#metrimask" },
                                    React.createElement("span", { id: "met" }, "METRIMASK MOBILE"))))),
                    React.createElement("span", { className: "kek" },
                        React.createElement(NavLink, { to: "#cryptechtest" },
                            React.createElement("span", { id: "cryp" }, "CRYPTECHTEST"))))),
            React.createElement("div", { className: "to-hide w-1/5 flex justify-end items-end but" },
                React.createElement("a", { id: "bus", className: "home-button", href: "#contact" },
                    React.createElement("div", null,
                        React.createElement("button", { type: "button", className: "home-button-txt" },
                            " ",
                            React.createElement(ContactPageOutlined_1["default"], null),
                            " ",
                            React.createElement("span", null, "Contact Us"))))))));
}
exports["default"] = Navbar;
