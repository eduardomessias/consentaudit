"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../context/postgres/prisma"));
class ClientCredentialsRepository {
    static save(clientCredentials) {
        console.log('Saving client credentials...', clientCredentials);
        prisma_1.default.clientCredentials.create({
            data: {
                secret: clientCredentials.secret,
            }
        }).then((_clientCredentials) => {
            console.log('Client credentials saved', _clientCredentials);
            clientCredentials.id = _clientCredentials.id;
        }).catch((error) => {
            console.error('Error saving client credentials', error);
        }).finally(() => {
            return clientCredentials;
        });
        return new Promise((resolve, reject) => {
            resolve(clientCredentials);
        });
    }
}
exports.default = ClientCredentialsRepository;
