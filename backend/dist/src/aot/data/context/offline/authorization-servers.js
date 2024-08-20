"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizationServers = void 0;
const authorization_server_class_1 = __importDefault(require("../../../classes/authorization-server.class"));
exports.authorizationServers = [
    new authorization_server_class_1.default("GitHub", "https://github.com", "github"),
];
