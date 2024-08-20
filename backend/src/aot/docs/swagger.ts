import swaggerJsdoc from 'swagger-jsdoc'
import packageJson from '../../../package.json'


const apis = {
    apis: ['./src/aot/router/api.routers.ts', '.src/aot/api/*.api.ts'],
    basePath: '/',
    swaggerDefinition: {
        info: {
            title: 'Consent Audit Backend Service',
            version: packageJson.version,
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
}


const specs = swaggerJsdoc(apis)


export default specs