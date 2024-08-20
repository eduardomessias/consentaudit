"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../context/postgres/prisma"));
class ClientApplicationRepository {
    static save(clientApplication) {
        console.log('Saving client application...', clientApplication);
        prisma_1.default.clientApplication.create({
            data: {
                name: clientApplication.name,
                callback: clientApplication.callback,
                clientId: clientApplication.clientId
            }
        }).then((_clientApplication) => {
            console.log('Client application saved', _clientApplication);
            clientApplication.id = _clientApplication.id;
        }).catch((error) => {
            console.error('Error saving client application', error);
        }).finally(() => {
            return clientApplication;
        });
        return new Promise((resolve, reject) => {
            resolve(clientApplication);
        });
    }
    static findMany() {
        return prisma_1.default.clientApplication
            .findMany()
            .then((_clientApplications) => {
            return _clientApplications.map((clientApplication) => {
                return {
                    id: clientApplication.clientId,
                    name: clientApplication.name,
                    callback: clientApplication.callback,
                    clientId: clientApplication.clientId,
                    authorizationServers: [],
                    createdAt: clientApplication.createdAt.getTime(),
                    updatedAt: clientApplication.updatedAt.getTime()
                };
            }, []);
        }).catch((error) => {
            throw error;
        })
            .finally(() => {
            return [];
        });
    }
}
exports.default = ClientApplicationRepository;
