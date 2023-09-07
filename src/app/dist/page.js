"use strict";
exports.__esModule = true;
var Landing_1 = require("@/layout/sections/Landing");
var Sales_1 = require("@/layout/sections/Sales");
var Services_1 = require("@/layout/sections/Services");
var Team_1 = require("@/layout/sections/Team");
var Contact_1 = require("@/layout/sections/Contact");
var Footer_1 = require("@/layout/components/Footer");
var CryptectestGame_1 = require("@/layout/sections/CryptectestGame");
var Navbar_1 = require("@/layout/components/Navbar");
var Metrix_1 = require("@/layout/sections/Metrix");
var MetrixMobile_1 = require("@/layout/sections/MetrixMobile");
var Email_1 = require("@/layout/components/Email");
var StackAudit_1 = require("@/layout/sections/StackAudit");
function Home() {
    return (React.createElement("main", null,
        React.createElement(Navbar_1["default"], null),
        React.createElement(Landing_1["default"], null),
        React.createElement(Sales_1["default"], null),
        React.createElement(Contact_1["default"], null),
        React.createElement(Services_1["default"], null),
        React.createElement(StackAudit_1["default"], null),
        React.createElement(Team_1["default"], null),
        React.createElement(Metrix_1["default"], null),
        React.createElement(MetrixMobile_1["default"], null),
        React.createElement(CryptectestGame_1["default"], null),
        React.createElement(Email_1["default"], null),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = Home;
