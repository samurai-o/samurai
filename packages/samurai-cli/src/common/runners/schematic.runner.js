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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchematicRunner = void 0;
var _1 = require(".");
var SchematicRunner = /** @class */ (function (_super) {
    __extends(SchematicRunner, _super);
    function SchematicRunner() {
        return _super.call(this, "\"" + _1.AbstractRunner.findCommandBinary("schematics") + "\"") || this;
    }
    return SchematicRunner;
}(_1.AbstractRunner));
exports.SchematicRunner = SchematicRunner;
