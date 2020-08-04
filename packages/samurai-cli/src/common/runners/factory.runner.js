"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryRunner = void 0;
var _1 = require(".");
var FactoryRunner = /** @class */ (function () {
    function FactoryRunner() {
    }
    FactoryRunner.create = function (runner) {
        switch (runner) {
            case _1.Runner.SCHEMATIC:
                return new _1.SchematicRunner();
                break;
            case _1.Runner.GULP:
                return new _1.GulpRunner();
                break;
            default:
                break;
        }
    };
    return FactoryRunner;
}());
exports.FactoryRunner = FactoryRunner;
