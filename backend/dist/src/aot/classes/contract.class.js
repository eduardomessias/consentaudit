"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const scope_class_1 = __importDefault(require("../classes/scope.class"));
const effectiveness_class_1 = __importDefault(require("../classes/effectiveness.class"));
const authorization_server_class_1 = __importDefault(require("../classes/authorization-server.class"));
const authorization_servers_1 = require("../data/context/offline/authorization-servers");
const bytes32_to_string_1 = __importDefault(require("../common/bytes32-to-string"));
const epoch_to_utc_1 = __importDefault(require("../common/epoch-to-utc"));
class Contract {
    constructor(hash, resource, client, scope, effectiveness, authorizedBy) {
        this.hash = hash;
        this.resource = resource;
        this.client = client;
        this.scope = scope;
        this.effectiveness = effectiveness;
        this.authorizedBy = authorizedBy;
    }
    static newFromSmartContract(contract) {
        //let hash = 
        let tag = (0, bytes32_to_string_1.default)(contract.auth_server_tag).replace(/\x00/g, '');
        let url = (0, bytes32_to_string_1.default)(contract.auth_server_url).replace(/\x00/g, '');
        let clientId = (0, bytes32_to_string_1.default)(contract.client_id);
        let scope = scope_class_1.default.splitFromString((0, bytes32_to_string_1.default)(contract.scope));
        let from = (0, epoch_to_utc_1.default)(contract.from);
        let to = (0, epoch_to_utc_1.default)(contract.to);
        let effectiveness = new effectiveness_class_1.default(from, to);
        let authorizationServer = authorization_server_class_1.default.findByUrlAndAlias(authorization_servers_1.authorizationServers, url, tag)
            || new authorization_server_class_1.default(tag, url, tag);
        return new Contract('', '', clientId, scope, effectiveness, authorizationServer);
    }
}
exports.default = Contract;
