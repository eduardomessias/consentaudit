"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contracts = void 0;
const contract_class_1 = __importDefault(require("../../../classes/contract.class"));
const scope_class_1 = __importDefault(require("../../../classes/scope.class"));
const authorization_server_class_1 = __importDefault(require("../../../classes/authorization-server.class"));
const effectiveness_class_1 = __importDefault(require("../../../classes/effectiveness.class"));
const github = new authorization_server_class_1.default('GitHub', 'https://github.com', 'github');
exports.contracts = [
    new contract_class_1.default('1', 'resource1', 'client1', [new scope_class_1.default('email', 'read')], new effectiveness_class_1.default(new Date('2024-06-01T00:00:00.000Z'), new Date('2025-06-01T00:00:00.000Z')), github),
    new contract_class_1.default('2', 'resource1', 'client2', [new scope_class_1.default('email', 'read'), new scope_class_1.default('profile', 'read')], new effectiveness_class_1.default(new Date('2024-06-01T00:00:00.000Z'), new Date('2025-06-01T00:00:00.000Z')), github),
];
