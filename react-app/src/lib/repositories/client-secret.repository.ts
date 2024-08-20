import prisma from '../../data/context/postgres/prisma';
import IClientSecret from '../interfaces/client-secret.interface'


export default class ClientSecretRepository {
    static save(clientSecret: IClientSecret): Promise<IClientSecret> {
        console.log('Saving client secret...', clientSecret);
        prisma.clientSecret.create({
            data: {
                secret: clientSecret.secret,
            }
        }).then((_clientSecret) => {
            console.log('Client secret saved', _clientSecret)
            clientSecret.id = _clientSecret.id
        }).catch((error) => {
            console.error('Error saving client secret', error)
        }).finally(() => {
            return clientSecret
        })


        return new Promise<IClientSecret>((resolve, reject) => {
            resolve(clientSecret)
        })
    }
}