"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandLoader = void 0;
var actions_1 = require("../actions");
var _1 = require(".");
var CommandLoader = /** @class */ (function () {
    function CommandLoader() {
    }
    CommandLoader.load = function (program) {
        new _1.NewCommand(new actions_1.NewAction()).load(program);
    };
    return CommandLoader;
}());
exports.CommandLoader = CommandLoader;
