"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const crypto_1 = require("crypto");
class Client {
    constructor() {
        this.id = (0, uuid_1.v4)();
        this.salt = this.newSalt();
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
    newSalt() {
        return (0, crypto_1.createHash)('sha256').update(this.id).digest('hex');
    }
}
exports.default = Client;
