"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../context/postgres/prisma"));
class UserRepository {
    static save(user) {
        console.log('Saving user...', user);
        // save user to the database
        return prisma_1.default.user.create({
            data: {
                tenantId: user.tenantId,
                resourceOwnerId: user.resourceOwnerId,
            }
        }).then((_user) => {
            console.log('User saved', _user);
            user.id = _user.id;
            return user;
        }).catch((error) => {
            console.error('Error saving user', error);
            throw error;
        });
    }
}
exports.default = UserRepository;
