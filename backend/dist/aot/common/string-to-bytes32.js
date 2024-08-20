"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = stringToBytes32;
const web3_1 = __importDefault(require("web3"));
function stringToBytes32(str) {
    let hex = web3_1.default.utils.toHex(str);
    hex = hex.padEnd(66, '0');
    return hex;
}
