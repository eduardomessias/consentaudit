"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../context/postgres/prisma"));
class ClientSecretRepository {
    static save(clientSecret) {
        console.log('Saving client secret...', clientSecret);
        prisma_1.default.clientSecret.create({
            data: {
                secret: clientSecret.secret,
            }
        }).then((_clientSecret) => {
            console.log('Client secret saved', _clientSecret);
            clientSecret.id = _clientSecret.id;
        }).catch((error) => {
            console.error('Error saving client secret', error);
        }).finally(() => {
            return clientSecret;
        });
        return new Promise((resolve, reject) => {
            resolve(clientSecret);
        });
    }
}
exports.default = ClientSecretRepository;
