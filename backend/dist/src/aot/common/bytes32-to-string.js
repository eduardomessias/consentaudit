"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = bytes32ToString;
const web3_1 = __importDefault(require("web3"));
function bytes32ToString(bytes32) {
    return web3_1.default.utils.hexToAscii(bytes32);
}
