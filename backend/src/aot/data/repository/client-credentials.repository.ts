import prisma from '../context/postgres/prisma'
import IClientCredentials from '../../interfaces/client-credentials.interface'


export default class ClientCredentialsRepository {
    static save(clientCredentials: IClientCredentials): Promise<IClientCredentials> {
        console.log('Saving client credentials...', clientCredentials);
        prisma.clientCredentials.create({
            data: {
                secret: clientCredentials.secret,
            }
        }).then((_clientCredentials: any) => {
            console.log('Client credentials saved', _clientCredentials)
            clientCredentials.id = _clientCredentials.id
        }).catch((error: any) => {
            console.error('Error saving client credentials', error)
        }).finally(() => {
            return clientCredentials
        })


        return new Promise<IClientCredentials>((resolve, reject) => {
            resolve(clientCredentials)
        })
    }
}