"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
var commands_1 = require("../commands");
function main() {
    var program = commander_1.default;
    program
        .version(require('../../package.json').version, "-v, --version", "Output the current version.")
        .usage("<command>")
        .helpOption("-h, --help", "Output usage information.");
    commands_1.CommandLoader.load(program);
    commander_1.default.parse(process.argv.slice(2));
    if (!process.argv.slice(2)) {
        commander_1.default.outputHelp();
        process.exit(1);
    }
}
main();
