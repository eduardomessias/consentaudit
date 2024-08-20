"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const package_json_1 = __importDefault(require("../../../package.json"));
const apis = {
    apis: ['./src/aot/router/api.routers.ts', '.src/aot/api/*.api.ts'],
    basePath: '/',
    swaggerDefinition: {
        info: {
            title: 'Consent Audit Backend Service',
            version: package_json_1.default.version,
            description: 'Consent Audit Backend Service',
        },
        host: 'localhost:5555',
        basePath: '/',
        produces: [
            'application/json',
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: '',
            },
        },
    },
};
const specs = (0, swagger_jsdoc_1.default)(apis);
exports.default = specs;
