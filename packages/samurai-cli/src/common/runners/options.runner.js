"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunnersOption = void 0;
var core_1 = require("@angular-devkit/core");
var RunnersOption = /** @class */ (function () {
    function RunnersOption(name, value) {
        this.name = name;
        this.value = value;
    }
    RunnersOption.prototype.getName = function () {
        return this.name;
    };
    RunnersOption.prototype.getValue = function () {
        return this.value;
    };
    RunnersOption.prototype.toCommandString = function () {
        if (typeof this.value === "string") {
            if (this.name === "name") {
                return "--" + this.name + "=" + this.format();
            }
            else if (this.name === "version" || this.name === "path") {
                return "--" + this.name + "=" + this.value;
            }
            else {
                return "--" + this.name + "=\"" + this.value + "\"";
            }
        }
        else if (typeof this.value === "boolean") {
            var str = core_1.strings.dasherize(this.name);
            return this.value ? "--" + str : "--no-" + str;
        }
        else {
            return "--" + core_1.strings.dasherize(this.name) + "=" + this.value;
        }
    };
    RunnersOption.prototype.format = function () {
        return core_1.strings
            .dasherize(this.value)
            .split("")
            .reduce(function (content, char) {
            if (char === "(" || char === ")" || char === "[" || char === "]") {
                return content + "\\" + char;
            }
            return "" + content + char;
        }, "");
    };
    return RunnersOption;
}());
exports.RunnersOption = RunnersOption;
