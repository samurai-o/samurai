"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.message = void 0;
var _1 = require(".");
exports.message = {
    runner: function (info) { return _1.messageIcon.RUNNER + " " + info; },
    success: function (info) { return _1.messageIcon.CHECKMARK + " " + info; },
    error: function (info) { return _1.messageIcon.CHECKERROR + " " + info; },
};
