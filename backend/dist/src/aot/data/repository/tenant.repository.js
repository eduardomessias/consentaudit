"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../context/postgres/prisma"));
class TenantRepository {
    static save(tenant) {
        console.log('Saving tenant...', tenant);
        // save tenant to the database
        return prisma_1.default.tenant.create({
            data: {
                name: tenant.name,
            }
        }).then((_tenant) => {
            console.log('Tenant saved', _tenant);
            tenant.id = _tenant.id;
            return tenant;
        }).catch((error) => {
            console.error('Error saving tenant', error);
            throw error;
        });
    }
}
exports.default = TenantRepository;
