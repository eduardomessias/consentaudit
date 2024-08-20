"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class ClientApplication {
    constructor(clientId, name, callback) {
        this.id = (0, uuid_1.v4)();
        this.clientId = clientId;
        this.name = name;
        this.callback = callback;
        this.createdAt = Date.now();
        this.updatedAt = Date.now();
        this.authorizationServers = [];
    }
}
exports.default = ClientApplication;
