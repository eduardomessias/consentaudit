"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const crypto_1 = require("crypto");
class ClientCredentials {
    constructor(clientId, salt) {
        this.id = (0, uuid_1.v4)();
        this.salt = salt;
        this.secret = this.newSecret(clientId);
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
    newSecret(clientId) {
        try {
            // hash the client id to create a unique client secret
            let secret = (0, crypto_1.createHash)('sha256').update(clientId).digest('hex');
            // hash
            let hash = (0, crypto_1.pbkdf2Sync)(secret, this.salt, 100000, 64, 'sha512');
            return hash.toString('hex');
        }
        catch (error) {
            console.error('Error generating client secret', error);
            return ''; // or handle the error in a different way
        }
    }
}
exports.default = ClientCredentials;
