"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactorySchematicsManager = void 0;
var runners_1 = require("lib/common/runners");
var _1 = require(".");
var FactorySchematicsManager = /** @class */ (function () {
    function FactorySchematicsManager() {
    }
    FactorySchematicsManager.create = function (schematics) {
        switch (schematics) {
            case _1.Schematics.SAMURAI:
                return new _1.SamuraiSchematicsManager(runners_1.FactoryRunner.create(runners_1.Runner.SCHEMATIC));
                break;
            default:
                return new _1.DefaultSchematicsManager(_1.Schematics.DEFAULT, runners_1.FactoryRunner.create(runners_1.Runner.SCHEMATIC));
                break;
        }
    };
    return FactorySchematicsManager;
}());
exports.FactorySchematicsManager = FactorySchematicsManager;
