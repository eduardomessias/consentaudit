"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../context/postgres/prisma"));
class ClientRepository {
    static save(client) {
        console.log('Saving client...', client);
        // save client to the database
        prisma_1.default.client.create({
            data: {
                salt: client.salt,
            }
        }).then((_client) => {
            console.log('Client saved', _client);
            client.id = _client.id;
        }).catch((error) => {
            console.error('Error saving client', error);
        }).finally(() => {
            return client;
        });
        return new Promise((resolve, reject) => {
            resolve(client);
        });
    }
}
exports.default = ClientRepository;
