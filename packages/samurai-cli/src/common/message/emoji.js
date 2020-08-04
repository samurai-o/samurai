"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageIcon = void 0;
var node_emoji_1 = __importDefault(require("node-emoji"));
exports.messageIcon = {
    RUNNER: node_emoji_1.default.get("runner"),
    CHECKMARK: node_emoji_1.default.get("heavy_check_mark"),
    CHECKERROR: node_emoji_1.default.get("red_circle"),
};
